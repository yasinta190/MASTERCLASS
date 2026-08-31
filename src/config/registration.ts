/**
 * Central Configuration for Build Confidence Masterclass Registration & Google Sheet Integration
 * 
 * The Google Sheet endpoint is a private admin webhook.
 * Public visitors cannot view sheet contents or registrant records.
 */

export const APPS_SCRIPT_WEBHOOK_URL =
  'https://script.google.com/macros/s/AKfycbwwU6ByP8wmyKxT8-znGFYiXynCLVHSnvKh2fE_UoAxKgGZ-m4aHmPwYm61wNbZ-5Iq/exec';

export const EVENT_DETAILS = {
  name: 'Build Confidence Masterclass',
  date: 'Saturday, 26 September 2026',
  time: '13:00 PM – 18:00 PM',
  venue: 'Johari Rotana Hall',
  city: 'Dar es Salaam, Tanzania',
  fee: 'Early Bird: 25,000 TZS | On-Site: 50,000 TZS',
  earlyBirdPrice: '25,000 TZS',
  onSitePrice: '50,000 TZS',
  earlyBirdAmount: 25000,
  onSiteAmount: 50000,
  currency: 'TZS',
};

export const COORDINATOR_CONTACT = {
  whatsappNumber: '255612395175',
  whatsappDisplay: '+255 612 395 175',
  email: 'info@buildconfidence.co.tz',
};

export const EVENT_INCLUSIONS = [
  'Full 5-hour immersive live masterclass access',
  'Comprehensive physical workbook and reflection guide',
  'Interactive confidence-building exercises and voice drills',
  'Direct Q&A and personalized facilitation insights',
  'Coffee, tea, and executive refreshments included',
  'Access to post-masterclass growth community',
];

