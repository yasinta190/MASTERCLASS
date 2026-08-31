export const GOOGLE_APPS_SCRIPT_CODE = `/**
 * Google Apps Script for BUILD CONFIDENCE MASTERCLASS Registrations
 * Event Date: Saturday, 26 September 2026
 * Venue: Johari Rotana Hall, Dar es Salaam
 * Pricing: Early Bird 25,000 TZS | On-Site 50,000 TZS
 * 
 * Works for BOTH:
 * 1. Web App Webhook (Website registrations via doPost)
 * 2. Google Forms Trigger (Google Form submissions via onFormSubmit)
 */

// 1. HANDLES REGISTRATIONS FROM THE WEBSITE (Web App endpoint)
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(30000); // 30s lock to prevent race conditions
  
  try {
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = getOrCreateRegistrationSheet(doc);
    
    // Parse incoming payload
    var data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (parseErr) {
        data = (e && e.parameter) || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }
    
    var timestamp = data.timestamp || Utilities.formatDate(new Date(), "Africa/Dar_es_Salaam", "yyyy-MM-dd HH:mm:ss");
    var regId = data.registrationId || ("BCM-2026-" + Math.floor(10000 + Math.random() * 90000));
    var pass = data.ticketTier || data.admissionType || "Early Bird (25,000 TZS)";
    var fee = (pass.indexOf("50,000") !== -1) ? "50,000 TZS" : "25,000 TZS";
    
    var newRow = [
      timestamp,
      regId,
      "CONFIRMED",
      pass,
      fee,
      data.fullName || data.name || "",
      data.email || "",
      data.phone || data.whatsapp || "",
      data.ageRange || "26 – 35 years",
      data.primaryChallenge || data.biggestChallenge || "",
      data.whyJoin || data.interestReason || "",
      data.expectations || "",
      data.confidentAbout || data.confidenceAreas || "",
      data.referralSource || "Online",
      data.attendedBefore || "No",
      data.additionalMessage || data.facilitatorNote || ""
    ];
    
    sheet.appendRow(newRow);
    
    var lastRow = sheet.getLastRow();
    var rowRange = sheet.getRange(lastRow, 1, 1, newRow.length);
    rowRange.setVerticalAlignment("middle");
    sheet.setRowHeight(lastRow, 30);
    sheet.getRange(lastRow, 2).setFontWeight("bold").setFontColor("#0284C7");
    
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: true,
        result: "success", 
        registrationId: regId,
        message: "Registration recorded successfully",
        row: lastRow 
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false,
        result: "error", 
        error: err.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

// 2. HANDLES DIRECT GOOGLE FORM SUBMISSIONS (Trigger onFormSubmit)
function onFormSubmit(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(30000);
  
  try {
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = getOrCreateRegistrationSheet(doc);
    
    var timestamp = Utilities.formatDate(new Date(), "Africa/Dar_es_Salaam", "yyyy-MM-dd HH:mm:ss");
    var regId = "BCM-2026-" + Math.floor(10000 + Math.random() * 90000);
    
    var responses = (e && e.namedValues) ? e.namedValues : {};
    
    function getVal(keys) {
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (responses[key] && responses[key][0]) {
          return responses[key][0];
        }
      }
      return "";
    }
    
    var fullName = getVal(["Full Name", "Name", "Jina Kamili", "Your Name"]);
    var email = getVal(["Email Address", "Email", "Barua Pepe"]);
    var phone = getVal(["Phone / WhatsApp", "Phone Number", "WhatsApp", "Phone", "Namba ya Simu"]);
    var pass = getVal(["Ticket", "Pass", "Ticket Tier", "Admission", "Early Bird or On-Site"]) || "Early Bird (25,000 TZS)";
    var fee = (pass.indexOf("50,000") !== -1) ? "50,000 TZS" : "25,000 TZS";
    var ageRange = getVal(["Age Range", "Umri", "Age"]) || "26 – 35 years";
    var challenge = getVal(["Primary Confidence Challenge", "Biggest Challenge", "Challenge", "Changamoto Yako"]);
    var whyJoin = getVal(["Why They Want To Join", "Why Join", "Reason for Joining", "Kwanini Unataka Kushiriki"]);
    var expectations = getVal(["Expectations", "Matarajio Yako"]);
    var confidentAbout = getVal(["What They Want To Become More Confident About", "Confidence Area", "Maeneo ya Kujiamini"]);
    var referral = getVal(["How They Heard About The Masterclass", "Referral Source", "Umejuaje Kuhusu Programu Hii"]) || "Google Form";
    var attendedBefore = getVal(["Attended Before", "Umeshawahi Kuhudhuria"]) || "No";
    var notes = getVal(["Additional Message / Note for Facilitator", "Notes", "Ujumbe wa Ziada"]) || "None";
    
    var newRow = [
      timestamp,
      regId,
      "CONFIRMED",
      pass,
      fee,
      fullName,
      email,
      phone,
      ageRange,
      challenge,
      whyJoin,
      expectations,
      confidentAbout,
      referral,
      attendedBefore,
      notes
    ];
    
    sheet.appendRow(newRow);
    var lastRow = sheet.getLastRow();
    sheet.setRowHeight(lastRow, 30);
    sheet.getRange(lastRow, 2).setFontWeight("bold").setFontColor("#0284C7");
    
  } catch (err) {
    Logger.log("Error in onFormSubmit: " + err.toString());
  } finally {
    lock.releaseLock();
  }
}

// HELPER: Auto-creates sheet with styled headers if not existing
function getOrCreateRegistrationSheet(doc) {
  var sheet = doc.getSheetByName("Registrations");
  if (!sheet) {
    var sheets = doc.getSheets();
    if (sheets.length > 0 && sheets[0].getLastRow() === 0) {
      sheet = sheets[0];
      sheet.setName("Registrations");
    } else {
      sheet = doc.insertSheet("Registrations");
    }
  }
  
  var headers = [
    "Timestamp",
    "Registration ID",
    "Status",
    "Admission Pass",
    "Fee Amount",
    "Full Name",
    "Email Address",
    "Phone / WhatsApp",
    "Age Range",
    "Primary Confidence Challenge",
    "Why They Want To Join",
    "Expectations",
    "What They Want To Become More Confident About",
    "Referral Source",
    "Attended Before",
    "Additional Message / Facilitator Note"
  ];

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
    var headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setBackground("#0F172A");
    headerRange.setFontColor("#38BDF8");
    headerRange.setFontWeight("bold");
    headerRange.setFontFamily("Arial");
    headerRange.setHorizontalAlignment("center");
    headerRange.setVerticalAlignment("middle");
    sheet.setRowHeight(1, 38);
    sheet.setFrozenRows(1);
  }
  
  return sheet;
}

// Browser GET ping
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ 
      status: "active", 
      event: "Build Confidence Masterclass",
      date: "26 September 2026",
      pricing: "Early Bird: 25,000 TZS | On-Site: 50,000 TZS",
      message: "Build Confidence Masterclass Google Sheet & Form Service is ACTIVE!" 
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
`;

export const GOOGLE_SHEET_INSTRUCTIONS = [
  {
    step: 1,
    title: "Create or Open a Google Sheet",
    description: "Create a new Google Sheet (e.g. named 'Build Confidence Masterclass Registrations')."
  },
  {
    step: 2,
    title: "Open Apps Script Editor",
    description: "In your Google Sheet menu, click 'Extensions' > 'Apps Script'."
  },
  {
    step: 3,
    title: "Paste the Code",
    description: "Delete any default code in the Code.gs editor and paste the provided script."
  },
  {
    step: 4,
    title: "Deploy as Web App",
    description: "Click the blue 'Deploy' button > 'New deployment' > Click gear icon > Select 'Web app'. Set 'Execute as' to 'Me' and 'Who has access' to 'Anyone'."
  },
  {
    step: 5,
    title: "Copy Web App URL",
    description: "Copy your deployed Web App URL into your private config."
  }
];
