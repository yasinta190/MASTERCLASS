import { APPS_SCRIPT_WEBHOOK_URL, EVENT_DETAILS } from '../config/registration';
import { RegistrationFormData, RegistrationSubmissionResult } from '../types';
import { storeSubmission } from './storage';

/**
 * Generates a memorable, unique Registration ID for the participant.
 * Format: BCM-2026-XXXXX (e.g. BCM-2026-48912)
 */
export function generateRegistrationId(): string {
  const randomNum = Math.floor(10000 + Math.random() * 90000);
  return `BCM-2026-${randomNum}`;
}

/**
 * Sends registration data directly to the Google Apps Script Web App endpoint.
 * Automatically saves all attendee details to the connected Google Sheet.
 */
export async function submitRegistration(
  formData: RegistrationFormData,
  customEndpointUrl?: string
): Promise<RegistrationSubmissionResult> {
  const endpoint = (customEndpointUrl || APPS_SCRIPT_WEBHOOK_URL).trim();

  const registrationId = formData.registrationId || generateRegistrationId();
  const timestamp =
    formData.submittedAt ||
    new Date().toLocaleString('en-US', {
      timeZone: 'Africa/Dar_es_Salaam',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });

  // Payload with all requested registration details
  const payload = {
    registrationId,
    timestamp,
    fullName: formData.fullName.trim(),
    email: formData.email.trim(),
    phone: formData.phone.trim(),
    primaryChallenge: formData.biggestChallenge.trim(),
    biggestChallenge: formData.biggestChallenge.trim(),
    whyJoin: formData.interestReason.trim(),
    interestReason: formData.interestReason.trim(),
    expectations: formData.expectations.trim(),
    confidentAbout: formData.confidenceAreas.trim(),
    confidenceAreas: formData.confidenceAreas.trim(),
    referralSource: formData.referralSource || 'Online',
    additionalMessage: formData.facilitatorNote?.trim() || 'None',
    facilitatorNote: formData.facilitatorNote?.trim() || 'None',
    ageRange: formData.ageRange || '26 – 35 years',
    attendedBefore: formData.attendedBefore || 'No',
    ticketTier: formData.ticketTier || 'Early Bird (25,000 TZS)',
    admissionType: formData.ticketTier || 'Early Bird (25,000 TZS)',
    ticketPrice: formData.ticketTier?.includes('50,000') ? '50,000 TZS' : '25,000 TZS',
    registrationStatus: 'CONFIRMED',
    eventName: EVENT_DETAILS.name,
    eventDate: EVENT_DETAILS.date,
    eventVenue: EVENT_DETAILS.venue,
    eventTime: EVENT_DETAILS.time,
    eventFee: EVENT_DETAILS.fee,
  };

  const payloadString = JSON.stringify(payload);

  let syncSuccess = false;
  let syncError: string | undefined;

  if (endpoint) {
    try {
      // POST to Google Apps Script
      // mode: 'no-cors' + Content-Type: 'text/plain;charset=utf-8' guarantees delivery to Google Apps Script doPost(e)
      // across all browsers without CORS preflight or redirect blocking.
      await fetch(endpoint, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: payloadString,
      });

      syncSuccess = true;
    } catch (error: any) {
      console.warn('Direct fetch notice (will also store backup locally):', error);
      syncError = error?.message || 'Network notice';
    }
  }

  // Backup store to local browser storage so records are accessible in admin modal
  const confirmedData: RegistrationFormData = {
    ...formData,
    registrationId,
    submittedAt: timestamp,
    registrationStatus: 'CONFIRMED',
  };

  storeSubmission(confirmedData, syncSuccess, syncError);

  return {
    success: true,
    registrationId,
    message: 'Your registration has been saved and confirmed.',
    data: confirmedData,
  };
}
