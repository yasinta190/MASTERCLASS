export interface RegistrationFormData {
  fullName: string;
  email: string;
  phone: string;
  ageRange?: string;
  interestReason: string; // Why They Want To Join
  biggestChallenge: string; // Primary Confidence Challenge
  expectations: string; // Expectations
  confidenceAreas: string; // What They Want To Become More Confident About
  referralSource: string; // How They Heard About The Masterclass
  attendedBefore?: 'Yes' | 'No' | '';
  facilitatorNote?: string; // Additional Message
  registrationId?: string;
  submittedAt?: string;
  registrationStatus?: string;
  admissionType?: string;
  ticketTier?: 'Early Bird (25,000 TZS)' | 'On-Site (50,000 TZS)';
}

export interface AppSettings {
  googleSheetWebhookUrl: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  eventName: string;
  eventVenue: string;
  eventDate: string;
  eventTime: string;
  eventFee: string;
  earlyBirdPrice?: string;
  onSitePrice?: string;
}

export interface SubmissionRecord extends RegistrationFormData {
  id: string;
  registrationId: string;
  submittedAt: string;
  syncedToGoogleSheet: boolean;
  syncError?: string;
}

export interface RegistrationSubmissionResult {
  success: boolean;
  registrationId?: string;
  message?: string;
  data?: RegistrationFormData;
}
