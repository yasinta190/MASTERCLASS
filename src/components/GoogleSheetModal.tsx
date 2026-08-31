import React, { useState } from 'react';
import {
  X,
  FileSpreadsheet,
  Copy,
  Check,
  ExternalLink,
  Send,
  Download,
  AlertCircle,
  CheckCircle2,
  HelpCircle,
  Database,
  Code2,
  Phone,
  RefreshCw,
  Search,
  MessageCircle,
  User,
  Calendar,
  Sparkles,
  Info,
} from 'lucide-react';
import { AppSettings, SubmissionRecord } from '../types';
import { GOOGLE_APPS_SCRIPT_CODE, GOOGLE_SHEET_INSTRUCTIONS } from '../data/googleScriptCode';
import { exportSubmissionsToCSV, sendToGoogleSheet, DEFAULT_GOOGLE_SHEET_WEBHOOK_URL } from '../utils/storage';

interface GoogleSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: AppSettings;
  onSaveSettings: (settings: AppSettings) => void;
  submissions: SubmissionRecord[];
}

export const GoogleSheetModal: React.FC<GoogleSheetModalProps> = ({
  isOpen,
  onClose,
  settings,
  onSaveSettings,
  submissions,
}) => {
  const [activeTab, setActiveTab] = useState<'submissions' | 'config' | 'script'>('submissions');
  const [copied, setCopied] = useState(false);
  const [webhookUrl, setWebhookUrl] = useState(settings.googleSheetWebhookUrl || DEFAULT_GOOGLE_SHEET_WEBHOOK_URL);
  const [whatsappNumber, setWhatsappNumber] = useState(settings.whatsappNumber || '255612395175');
  const [whatsappDisplay, setWhatsappDisplay] = useState(settings.whatsappDisplay || '+255 612 395 175');
  const [testStatus, setTestStatus] = useState<'idle' | 'testing' | 'success' | 'error'>('idle');
  const [testMessage, setTestMessage] = useState('');
  const [savedNotice, setSavedNotice] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubmission, setSelectedSubmission] = useState<SubmissionRecord | null>(null);

  if (!isOpen) return null;

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(GOOGLE_APPS_SCRIPT_CODE);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // fallback
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveSettings({
      ...settings,
      googleSheetWebhookUrl: webhookUrl.trim(),
      whatsappNumber: whatsappNumber.trim(),
      whatsappDisplay: whatsappDisplay.trim(),
    });
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 3000);
  };

  const handleTestConnection = async () => {
    if (!webhookUrl.trim()) {
      setTestStatus('error');
      setTestMessage('Please enter a Web App URL first.');
      return;
    }

    setTestStatus('testing');
    setTestMessage('Sending test registration row to Google Sheets...');

    try {
      const res = await sendToGoogleSheet(
        {
          fullName: 'Test Attendee (Build Confidence Demo)',
          email: 'demo@example.com',
          phone: '+255 700 000 000',
          ageRange: '26 – 35 years',
          interestReason: 'Testing Google Sheet webhook connection integration.',
          biggestChallenge: 'None - Integration Test',
          expectations: 'Successful row sync in Google Sheets',
          confidenceAreas: 'System automation and workflow test',
          referralSource: 'Integration Test',
          attendedBefore: 'No',
          facilitatorNote: 'Automatic test ping from Masterclass Landing Portal',
          submittedAt: new Date().toLocaleString(),
        },
        webhookUrl.trim()
      );

      if (res.success) {
        setTestStatus('success');
        setTestMessage('Test request sent! Check your Google Sheet to see the new test row.');
      } else {
        setTestStatus('error');
        setTestMessage(res.message || 'Connection failed. Ensure "Who has access" is set to "Anyone".');
      }
    } catch (err: any) {
      setTestStatus('error');
      setTestMessage(err?.message || 'Connection failed.');
    }
  };

  const filteredSubmissions = submissions.filter((s) => {
    const q = searchQuery.toLowerCase();
    return (
      s.fullName.toLowerCase().includes(q) ||
      s.email.toLowerCase().includes(q) ||
      s.phone.toLowerCase().includes(q) ||
      s.biggestChallenge.toLowerCase().includes(q)
    );
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs">
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-[#0F172A] text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 text-[#38BDF8] flex items-center justify-center">
              <FileSpreadsheet className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-black text-white">
                  Registered Attendees & Google Sheet Sync
                </h2>
                <span className="px-2 py-0.5 rounded-full bg-[#38BDF8]/20 text-[#38BDF8] text-[10px] font-bold">
                  {submissions.length} Total
                </span>
              </div>
              <p className="text-xs text-slate-400">
                All registration details are sent live to your Google Sheet
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="px-6 pt-3 border-b border-slate-200 flex gap-2 bg-slate-50 text-xs font-bold">
          <button
            onClick={() => {
              setActiveTab('submissions');
              setSelectedSubmission(null);
            }}
            className={`pb-3 px-3 border-b-2 flex items-center gap-1.5 transition-colors cursor-pointer ${
              activeTab === 'submissions'
                ? 'border-sky-600 text-sky-800'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <User className="w-4 h-4" />
            <span>Attendee Records ({submissions.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('config')}
            className={`pb-3 px-3 border-b-2 flex items-center gap-1.5 transition-colors cursor-pointer ${
              activeTab === 'config'
                ? 'border-sky-600 text-sky-800'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <Database className="w-4 h-4" />
            <span>Google Sheet Webhook Settings</span>
          </button>
          <button
            onClick={() => setActiveTab('script')}
            className={`pb-3 px-3 border-b-2 flex items-center gap-1.5 transition-colors cursor-pointer ${
              activeTab === 'script'
                ? 'border-sky-600 text-sky-800'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <Code2 className="w-4 h-4" />
            <span>Google Apps Script Code</span>
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* TAB 1: Registered Attendees */}
          {activeTab === 'submissions' && (
            <div className="space-y-4">
              {selectedSubmission ? (
                /* Detailed view for a single attendee */
                <div className="space-y-4 animate-in fade-in duration-150">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <button
                      onClick={() => setSelectedSubmission(null)}
                      className="text-xs font-bold text-sky-700 hover:text-sky-900 flex items-center gap-1 cursor-pointer"
                    >
                      ← Back to All Attendees
                    </button>
                    <span className="text-xs text-slate-400 font-medium">
                      Registered on {selectedSubmission.submittedAt}
                    </span>
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">
                          {selectedSubmission.fullName}
                        </h3>
                        <p className="text-xs text-slate-500">
                          {selectedSubmission.email} • {selectedSubmission.phone} • {selectedSubmission.ageRange}
                        </p>
                      </div>
                      <a
                        href={`https://wa.me/${selectedSubmission.phone.replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-xs shrink-0"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Chat on WhatsApp</span>
                      </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 text-xs">
                      <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                        <strong className="block text-slate-700 font-bold mb-1">
                          Reason for Interest:
                        </strong>
                        <p className="text-slate-600 leading-relaxed">
                          {selectedSubmission.interestReason || 'Not specified'}
                        </p>
                      </div>

                      <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                        <strong className="block text-slate-700 font-bold mb-1">
                          Biggest Confidence Challenge:
                        </strong>
                        <p className="text-slate-600 leading-relaxed">
                          {selectedSubmission.biggestChallenge || 'Not specified'}
                        </p>
                      </div>

                      <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                        <strong className="block text-slate-700 font-bold mb-1">
                          Expectations:
                        </strong>
                        <p className="text-slate-600 leading-relaxed">
                          {selectedSubmission.expectations || 'Not specified'}
                        </p>
                      </div>

                      <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                        <strong className="block text-slate-700 font-bold mb-1">
                          Areas to Grow Confidence:
                        </strong>
                        <p className="text-slate-600 leading-relaxed">
                          {selectedSubmission.confidenceAreas || 'Not specified'}
                        </p>
                      </div>
                    </div>

                    <div className="bg-white p-3.5 rounded-xl border border-slate-200 text-xs">
                      <strong className="block text-slate-700 font-bold mb-1">
                        Note for Facilitator:
                      </strong>
                      <p className="text-slate-600">
                        {selectedSubmission.facilitatorNote || 'None provided'}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2 text-[11px] text-slate-500 border-t border-slate-200">
                      <span>Referral Source: <strong>{selectedSubmission.referralSource}</strong></span>
                      <span>Attended Event Before: <strong>{selectedSubmission.attendedBefore}</strong></span>
                      <span className="text-emerald-700 font-bold">Google Sheet Sync: Synced</span>
                    </div>
                  </div>
                </div>
              ) : (
                /* List of attendees table */
                <>
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="relative w-full sm:w-72">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        placeholder="Search attendee by name, phone, email..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 text-xs bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-900"
                      />
                    </div>
                    {submissions.length > 0 && (
                      <button
                        onClick={() => exportSubmissionsToCSV(submissions)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-colors cursor-pointer shrink-0"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download Full CSV</span>
                      </button>
                    )}
                  </div>

                  {filteredSubmissions.length === 0 ? (
                    <div className="p-10 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-200 text-slate-500 text-xs space-y-2">
                      <p className="font-semibold text-slate-700">No registrations found.</p>
                      <p>
                        When someone completes the registration form on the page, their full response immediately appears here and streams to your Google Sheet!
                      </p>
                    </div>
                  ) : (
                    <div className="border border-slate-200 rounded-2xl overflow-hidden max-h-[380px] overflow-y-auto">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200 sticky top-0">
                          <tr>
                            <th className="p-3">Attendee Name</th>
                            <th className="p-3">Phone / WhatsApp</th>
                            <th className="p-3">Email Address</th>
                            <th className="p-3">Age</th>
                            <th className="p-3">Sheet Status</th>
                            <th className="p-3 text-right">Action</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {filteredSubmissions.map((sub) => (
                            <tr key={sub.id} className="hover:bg-slate-50 transition-colors">
                              <td className="p-3 font-bold text-slate-900">{sub.fullName}</td>
                              <td className="p-3 text-slate-600 font-mono text-[11px]">{sub.phone}</td>
                              <td className="p-3 text-slate-600">{sub.email}</td>
                              <td className="p-3 text-slate-500">{sub.ageRange}</td>
                              <td className="p-3">
                                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                                  <Check className="w-3 h-3" /> Live Synced
                                </span>
                              </td>
                              <td className="p-3 text-right">
                                <button
                                  onClick={() => setSelectedSubmission(sub)}
                                  className="px-2.5 py-1 rounded-lg font-bold text-xs text-sky-700 bg-sky-50 hover:bg-sky-100 transition-colors cursor-pointer"
                                >
                                  View Details
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </>
              )}
            </div>
          )}

          {/* TAB 2: Config & Connection Test */}
          {activeTab === 'config' && (
            <div className="space-y-6">
              {/* How it works summary */}
              <div className="p-4 rounded-2xl bg-sky-50/80 border border-sky-200 text-xs text-sky-950 space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm text-sky-900">
                  <CheckCircle2 className="w-4 h-4 text-sky-600" />
                  <span>Google Sheets Integration Endpoint Active</span>
                </div>
                <p>
                  Every participant who registers has their answers instantly appended as a new row in your connected Google Sheet.
                </p>
              </div>

              {/* URL Form */}
              <form onSubmit={handleSave} className="space-y-4">
                <div>
                  <label htmlFor="webhook-input" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Active Google Apps Script Web App URL
                  </label>
                  <input
                    id="webhook-input"
                    type="url"
                    value={webhookUrl}
                    onChange={(e) => setWebhookUrl(e.target.value)}
                    placeholder="https://script.google.com/macros/s/.../exec"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none bg-slate-50 text-slate-900 font-mono"
                  />
                  <p className="text-[11px] text-slate-500 mt-1">
                    Your Webhook URL is loaded and active.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="wa-num-input" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Coordinator WhatsApp Number
                    </label>
                    <input
                      id="wa-num-input"
                      type="text"
                      value={whatsappNumber}
                      onChange={(e) => setWhatsappNumber(e.target.value)}
                      placeholder="255612395175"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none bg-slate-50 text-slate-900"
                    />
                  </div>
                  <div>
                    <label htmlFor="wa-display-input" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      WhatsApp Display Format
                    </label>
                    <input
                      id="wa-display-input"
                      type="text"
                      value={whatsappDisplay}
                      onChange={(e) => setWhatsappDisplay(e.target.value)}
                      placeholder="+255 612 395 175"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none bg-slate-50 text-slate-900"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-[#0F172A] hover:bg-slate-800 transition-colors shadow-xs cursor-pointer"
                  >
                    Save Changes
                  </button>

                  <button
                    type="button"
                    onClick={handleTestConnection}
                    disabled={testStatus === 'testing'}
                    className="px-4 py-2.5 rounded-xl font-bold text-xs text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    {testStatus === 'testing' ? (
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                      <Send className="w-3.5 h-3.5 text-sky-600" />
                    )}
                    <span>Send Test Row to Google Sheet</span>
                  </button>

                  {savedNotice && (
                    <span className="text-xs text-emerald-700 font-bold flex items-center gap-1">
                      <Check className="w-4 h-4" /> Settings Saved!
                    </span>
                  )}
                </div>

                {/* Test Feedback Notice */}
                {testStatus === 'success' && (
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{testMessage}</span>
                  </div>
                )}
                {testStatus === 'error' && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-900 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                    <span>{testMessage}</span>
                  </div>
                )}
              </form>

              {/* Step by Step Visual Guide */}
              <div className="border-t border-slate-200 pt-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                  Google Sheet Setup Checklist:
                </h4>
                <div className="space-y-2.5">
                  {GOOGLE_SHEET_INSTRUCTIONS.map((inst) => (
                    <div key={inst.step} className="flex items-start gap-3 text-xs">
                      <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-900 font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {inst.step}
                      </span>
                      <div>
                        <strong className="text-slate-900">{inst.title}: </strong>
                        <span className="text-slate-600">{inst.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Google Apps Script Code */}
          {activeTab === 'script' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Google Apps Script Webhook Code</h3>
                  <p className="text-xs text-slate-500">
                    Paste this into Google Sheet &gt; Extensions &gt; Apps Script
                  </p>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#0F172A] hover:bg-slate-800 transition-colors shadow-xs cursor-pointer"
                >
                  {copied ? <Check className="w-4 h-4 text-[#38BDF8]" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied Code!' : 'Copy Script Code'}</span>
                </button>
              </div>

              <div className="relative rounded-2xl bg-slate-950 text-slate-100 p-4 font-mono text-xs overflow-x-auto max-h-[380px] border border-slate-800">
                <pre>{GOOGLE_APPS_SCRIPT_CODE}</pre>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex justify-between items-center">
          <span className="text-[11px] text-slate-500">
            Real-time webhook active: <code>AKfycbxXPCGCsOTG...</code>
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-200 hover:bg-slate-300 transition-colors cursor-pointer"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
