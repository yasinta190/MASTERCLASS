import { AppSettings, RegistrationFormData, SubmissionRecord } from '../types';
import { DEFAULT_WHATSAPP_DISPLAY, DEFAULT_WHATSAPP_NUMBER } from './whatsapp';

const SETTINGS_KEY = 'bcm_app_settings_v1';
const SUBMISSIONS_KEY = 'bcm_submissions_v1';

export const DEFAULT_GOOGLE_SHEET_WEBHOOK_URL =
  'https://script.google.com/macros/s/AKfycbwwU6ByP8wmyKxT8-znGFYiXynCLVHSnvKh2fE_UoAxKgGZ-m4aHmPwYm61wNbZ-5Iq/exec';

export const DEFAULT_SETTINGS: AppSettings = {
  googleSheetWebhookUrl: DEFAULT_GOOGLE_SHEET_WEBHOOK_URL,
  whatsappNumber: DEFAULT_WHATSAPP_NUMBER,
  whatsappDisplay: DEFAULT_WHATSAPP_DISPLAY,
  eventName: 'BUILD CONFIDENCE MASTERCLASS',
  eventVenue: 'Johari Rotana Hall',
  eventDate: 'Saturday, 26 September 2026',
  eventTime: '13:00 PM – 18:00 PM',
  eventFee: 'Early Bird: 25,000 TZS | On-Site: 50,000 TZS',
  earlyBirdPrice: '25,000 TZS',
  onSitePrice: '50,000 TZS',
};


export function getStoredSettings(): AppSettings {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) return DEFAULT_SETTINGS;
    const parsed = JSON.parse(raw);
    if (parsed.eventDate === 'Saturday' || !parsed.eventDate || parsed.eventDate.includes('23 August') || parsed.eventDate.includes('01 September') || parsed.eventDate.includes('Tuesday')) {
      parsed.eventDate = DEFAULT_SETTINGS.eventDate;
    }
    parsed.eventFee = DEFAULT_SETTINGS.eventFee;
    parsed.earlyBirdPrice = DEFAULT_SETTINGS.earlyBirdPrice;
    parsed.onSitePrice = DEFAULT_SETTINGS.onSitePrice;
    // If webhook url was not set or was previously pointing to an older deployment, update to active endpoint
    if (
      !parsed.googleSheetWebhookUrl ||
      parsed.googleSheetWebhookUrl.trim() === '' ||
      parsed.googleSheetWebhookUrl.includes('AKfycbxXPCGCsOTG58b5Gy3E5uWd5pQsAmwhWFq6soMxUXtiZDygCHmPqRaJeXrQYCwbZycW') ||
      parsed.googleSheetWebhookUrl.includes('AKfycbzf0VXQU34jY6CV6NOE6T8VZKkiXr7oF9-SFquJbX5SJB3aHCC04tbNBG7ZxOxVADBY1g') ||
      parsed.googleSheetWebhookUrl.includes('AKfycbz0KNW499eU9IrYpq4f36u7VAHZugLx1luG1cd_Sz5J9M5EClw68x4gjFXSxMoML9qPTg')
    ) {
      parsed.googleSheetWebhookUrl = DEFAULT_GOOGLE_SHEET_WEBHOOK_URL;
      saveSettings({ ...DEFAULT_SETTINGS, ...parsed });
    }
    return { ...DEFAULT_SETTINGS, ...parsed };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

export function saveSettings(settings: AppSettings): void {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  } catch (e) {
    console.error('Failed to save settings to localStorage', e);
  }
}

export function getStoredSubmissions(): SubmissionRecord[] {
  try {
    const raw = localStorage.getItem(SUBMISSIONS_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function storeSubmission(submission: RegistrationFormData, synced: boolean = false, syncError?: string): SubmissionRecord {
  const regId = submission.registrationId || 'BCM-2026-' + Math.floor(10000 + Math.random() * 90000);
  const record: SubmissionRecord = {
    ...submission,
    id: 'reg_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
    registrationId: regId,
    submittedAt: submission.submittedAt || new Date().toISOString(),
    syncedToGoogleSheet: synced,
    syncError: syncError,
  };

  try {
    const existing = getStoredSubmissions();
    const updated = [record, ...existing];
    localStorage.setItem(SUBMISSIONS_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to save submission to localStorage', e);
  }

  return record;
}

export function updateSubmissionStatus(id: string, synced: boolean, error?: string): void {
  try {
    const existing = getStoredSubmissions();
    const updated = existing.map((sub) =>
      sub.id === id ? { ...sub, syncedToGoogleSheet: synced, syncError: error } : sub
    );
    localStorage.setItem(SUBMISSIONS_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to update submission status', e);
  }
}

/**
 * Sends the registration payload to the configured Google Apps Script Web App URL
 */
export async function sendToGoogleSheet(
  data: RegistrationFormData,
  webhookUrl: string
): Promise<{ success: boolean; message: string }> {
  if (!webhookUrl || !webhookUrl.trim()) {
    return {
      success: false,
      message: 'No Google Sheet Webhook URL configured. Submission saved locally.',
    };
  }

  try {
    const payload = JSON.stringify({
      ...data,
      submittedAt: data.submittedAt || new Date().toLocaleString('en-US', { timeZone: 'Africa/Dar_es_Salaam' }),
      eventName: 'BUILD CONFIDENCE MASTERCLASS',
      eventFee: 'TZS 50,000',
    });

    // Content-Type: text/plain;charset=utf-8 prevents browser CORS preflight OPTIONS blocking
    // while delivering the full JSON string to Google Apps Script e.postData.contents
    await fetch(webhookUrl.trim(), {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: payload,
    });

    return {
      success: true,
      message: 'Registration details sent directly to Google Sheet!',
    };
  } catch (error: any) {
    console.error('Error posting to Google Apps Script:', error);
    return {
      success: false,
      message: error?.message || 'Network error while contacting Google Sheet',
    };
  }
}

/**
 * Exports stored registrations as a CSV download
 */
export function exportSubmissionsToCSV(submissions: SubmissionRecord[]): void {
  if (!submissions.length) return;

  const headers = [
    'Submitted At',
    'Full Name',
    'Email Address',
    'Phone / WhatsApp',
    'Age Range',
    'Interest Reason',
    'Biggest Challenge',
    'Expectations',
    'Confidence Areas',
    'Referral Source',
    'Attended Before',
    'Facilitator Note',
    'Synced to Sheet',
  ];

  const escapeCSV = (str: string | undefined) => {
    if (!str) return '""';
    return `"${str.replace(/"/g, '""')}"`;
  };

  const rows = submissions.map((s) => [
    escapeCSV(s.submittedAt),
    escapeCSV(s.fullName),
    escapeCSV(s.email),
    escapeCSV(s.phone),
    escapeCSV(s.ageRange),
    escapeCSV(s.interestReason),
    escapeCSV(s.biggestChallenge),
    escapeCSV(s.expectations),
    escapeCSV(s.confidenceAreas),
    escapeCSV(s.referralSource),
    escapeCSV(s.attendedBefore),
    escapeCSV(s.facilitatorNote),
    escapeCSV(s.syncedToGoogleSheet ? 'Yes' : 'No'),
  ]);

  const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `confidence-masterclass-registrations-${Date.now()}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
