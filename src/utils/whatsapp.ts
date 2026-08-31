import { RegistrationFormData } from '../types';
import { COORDINATOR_CONTACT, EVENT_DETAILS } from '../config/registration';

export const DEFAULT_WHATSAPP_NUMBER = COORDINATOR_CONTACT.whatsappNumber;
export const DEFAULT_WHATSAPP_DISPLAY = COORDINATOR_CONTACT.whatsappDisplay;

/**
 * Creates the customized WhatsApp message sent after the user fills out the registration form.
 */
export function generateRegistrationWhatsAppMessage(data: RegistrationFormData): string {
  const regId = data.registrationId || 'BCM-2026';

  const parts = [
    `✨ *BUILD CONFIDENCE MASTERCLASS — REGISTRATION CONFIRMATION* ✨`,
    `━━━━━━━━━━━━━━━━━━━━━━━━`,
    `Hello! I have completed my registration on the official website.`,
    ``,
    `🎟️ *Registration ID:* ${regId}`,
    `👤 *Full Name:* ${data.fullName}`,
    `📧 *Email:* ${data.email}`,
    `📱 *Phone / WhatsApp:* ${data.phone}`,
    ``,
    `⚡ *Primary Confidence Challenge:*`,
    `"${data.biggestChallenge}"`,
    ``,
    `🎯 *Why I Want To Join:*`,
    `"${data.interestReason}"`,
    ``,
    `🌟 *My Expectations:*`,
    `"${data.expectations}"`,
    ``,
    `🔑 *What I Want To Become More Confident About:*`,
    `"${data.confidenceAreas}"`,
    ``,
    `📢 *Referral Source:* ${data.referralSource || 'Online'}`,
  ];

  if (data.facilitatorNote && data.facilitatorNote.trim() && data.facilitatorNote !== 'None') {
    parts.push(``, `📝 *Additional Message:*`, `"${data.facilitatorNote.trim()}"`);
  }

  parts.push(
    ``,
    `━━━━━━━━━━━━━━━━━━━━━━━━`,
    `📍 *Event:* ${EVENT_DETAILS.name}`,
    `📅 *Date & Time:* ${EVENT_DETAILS.date} (${EVENT_DETAILS.time})`,
    `🏢 *Venue:* ${EVENT_DETAILS.venue}`,
    `🎟️ *Admission Pass:* ${data.ticketTier || 'Early Bird Pass (25,000 TZS)'}`,
    `💰 *Fee:* ${data.ticketTier?.includes('50,000') ? '50,000 TZS (On-Site)' : '25,000 TZS (Early Bird)'}`,
    `📊 *Status:* Confirmed`,
    `━━━━━━━━━━━━━━━━━━━━━━━━`,
    `I have registered for the masterclass. Please confirm my seat reservation.`
  );

  return parts.join('\n');
}

/**
 * Generates the WhatsApp URL with pre-filled customized message
 */
export function getRegistrationWhatsAppUrl(
  data: RegistrationFormData,
  phone: string = DEFAULT_WHATSAPP_NUMBER
): string {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const message = generateRegistrationWhatsAppMessage(data);
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates the general inquiry WhatsApp link
 */
export function getGeneralInquiryWhatsAppUrl(phone: string = DEFAULT_WHATSAPP_NUMBER): string {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const message = `Hello, I'm interested in the Build Confidence Masterclass (Saturday, 26 September 2026 at Johari Rotana Hall). I would like to know more about the Early Bird (25,000 TZS) / On-Site (50,000 TZS) registration.`;
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}
