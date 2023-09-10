import keymirror from 'keymirror';
// import settings from '../../api/config/settings';
/**
 * Application Constants
 * @type { Object }
 */
const AppConstants = {
  ADMIN_EMAIL: 'dcsab@nus.edu.sg',

  // Jwt Token
  TOKEN_KEY: 'X-Steps-Token',

  // Redirect Token - Registration
  REDIRECT_KEY: 'X-Steps-Redirect',
  REDIRECT_EXPIRY: 7200000, // 2 hours

  // Session timeout - after one login
  // SESSION_TIMEOUT: settings.SESSION_TIMEOUT_IN_SECONDS ? settings.SESSION_TIMEOUT_IN_SECONDS : 7200000, // 7200000, // 2 hours

  // Remind user to extend session
  // REMINDER_TIMEOUT: settings.TIMEOUT_REMINDER_IN_SECONDS ? settings.TIMEOUT_REMINDER_IN_SECONDS : 120000, // 120000, // 5 minutes

  // 2FA Token
  AUTH_2FA_KEY: 'X-Steps-2FA',
  AUTH_2FA_EXPIRY: 7200000, // 2 hours

  // Site URL and name
  UVENTS_URL: 'https://uvents.nus.edu.sg',
  STEPS_URL: 'https://isteps.comp.nus.edu.sg',
  STEPS_NAME: 'STePS',
  UVENTS_NAME: 'UVENTS',

  // Environment Names - UVENT_ENVIRONMENT_NAME
  ENVIRONMENT_LOCAL: 'LOCAL',
  ENVIRONMENT_DEV: 'DEV',
  ENVIRONMENT_UAT: 'UAT',
  ENVIRONMENT_PRODUCTION: 'PRODUCTION',

  //User Guide
  USER_GUIDE_LINK: 'https://docs.google.com/document/d/1uDDkobCY0NaEvxkEwcJH-NJc1sq2SadVEOfOIUJFk38/edit?usp=sharing',

  // Login Attempt
  DEFAULT_USER_LOGIN_ATTEMPTS: 10,

  // Email Template ID
  // EMAIL_SENDER_ADDRESS: 'steps@comp.nus.edu.sg',
  // EMAIL_SENDER_NAME: 'STEPS-SOC',

  // EMAIL_SENDER_ADDRESS: settings.EMAIL_SENDER_ADDRESS,
  // EMAIL_SENDER_NAME: settings.EMAIL_SENDER_NAME,

  // Email and Phone Reminder Text
  // eslint-disable-next-line max-len
  EMAIL_REMINDER_BODY_GENERAL_TEXT:
    "Here's a reminder for -code- that's coming up!\nPlease bring a soft-copy or hard-copy of your ticket to <strong>check-in</strong> and to collect your dinner coupon at the registration desk.\nHere's your ticket again:",
  // eslint-disable-next-line max-len
  EMAIL_REMINDER_BODY_EXHIBITOR_TEXT:
    "Here's a reminder for -code- that's coming up!\nYou are not required to check-in for this event as you are one of the exhibitors in the event.\nHere's your ticket again:",
  EMAIL_REMINDER_SUBJECT_TEXT: '[-code-] Event Ticket Reminder',
  EMAIL_REMINDER_OPENING_TEXT: 'Hi',
  // eslint-disable-next-line max-len
  EMAIL_REMINDER_TICKET_TEXT: "Full name: -name-\nToken: -guestToken-\nEmail: -email-\nTicket: -ticket-\nEvent Time: -startTime- to -endTime-\nEvent Location: -location-\nZoom links: -zoom-",
  ZOOM_MEETING_NUS_DOMAIN: 'nus.edu',
  // eslint-disable-next-line max-len
  EMAIL_REMINDER_FOOTNOTE_TEXT: 'To have equal share of votes for all courses, you should vote for the best projects in at least two courses.\nYou are receiving this email because you have registered for this event.',
  // eslint-disable-next-line max-len
  PHONE_REMINDER_TEXT_FOR_EXHIBITOR: `Hi, Welcome to -eventName- (-startTime-) at -location-. You are not required to check-in as you are one of the exhibitors in the event.\nYour secret VOTER-ID is -guestToken-.\nThank you and all the best for your project! :)`,
  // eslint-disable-next-line max-len
  PHONE_REMINDER_TEXT_FOR_GENERAL: `Hi, Welcome to -eventName- (-startTime-) at -location-. Please bring your registration QR code for hassle free check-in.\nYour secret VOTER-ID is -guestToken-.\nThank you! :)`,

  // Email and Phone Registration Confirmation Text
  EMAIL_REG_CONFIRM_BODY_TEXT: "Welcome to <strong>-eventName-</strong>!\nHere's your ticket:",
  EMAIL_REG_CONFIRM_SUBJECT_TEXT: '[-code-] Event Registration Confirmation',
  EMAIL_REG_CONFIRM_OPENING_TEXT: 'Hi',
  // eslint-disable-next-line max-len
  EMAIL_REG_CONFIRM_TICKET_TEXT: "Full name: -name-\nToken: -guestToken-\nEmail: -email-\nTicket: -ticket-\nEvent Time: -startTime- to -endTime-\nEvent Location: -location-\nZoom Links: -zoom-",
  EMAIL_REG_CONFIRM_FOOTNOTE_TEXT: 'You are receiving this email because you have registered for this event.',
  // eslint-disable-next-line max-len
  PHONE_REG_CONFIRM_TEXT: `Hi, Welcome to -eventName- (-startTime-) at -location-. You have successfully registered for the event. Please bring your registration QR code on the event day for hassle free check-in.\nYour secret VOTER-ID is -guestToken-.\nThank you! :)`,

  // Promotional Email sending confirmation message
  // eslint-disable-next-line max-len
  SEND_CROSS_PROMOTION_EMAIL_CONFIRMATION_MESSAGE: 'Send Promotional Emails to UVENTs users with similar interest areas or/and targeted recipients.',
  UVENTS_PROMOTION_EMAIL_CONFIRMATION_MESSAGE: "Sends a general promotional email about recent events to all users registered on the platform.",

  // Promo email text
  EMAIL_PROMO_SUBJECT_TEXT: '[-code-] UVENTS event recommendation',
  EMAIL_PROMO_OPENING_TEXT: 'Hi',
  EMAIL_PROMO_BODY_TEXT:
  `You might be interested in the following events:\n
<b>-eventName-</b>\n
Click <a href="-eventUrl-">here</a> to find out more information and to register for the event.\n
We look forward to seeing you in these events!\n
Regards,
-name- from -eventName-`,
  EMAIL_PROMO_FOOTNOTE_TEXT:
  `<i>Existing UVENTs users are receiving this email due to the users' field of interest which are similar to this event tags.
Please click <a href="-url-">here</a> to unsubscribe, if you do not wish to receive any UVENTs promotional emails.
Non-existing UVENTs users are receiving this email as this your email address is specifically indicated by the event manager.</i>`,
  EMAIL_PROMO_TARGETED_RECIPIENTS_TEXT: '',

  // Paper Submission Logo Upload Links
  PAPER_SUBMISSION_LOGO_UPLOAD: "submissionLogoUpload",
  PAPER_REVIEWER_LOGO_UPLOAD: "reviewerLogoUpload",
  PAPER_DECISION_LOGO_UPLOAD: "decisionLogoUpload",

  // Email Reviewer Text
  EMAIL_PAPER_SUBMISSION_BODY_TEXT:
    `You have submitted or have been added as a author for a Paper Submission in -code-.\n`,
  EMAIL_PAPER_SUBMISSION_BODY_DEFAULT_TEXT:
    `<p><strong>Event/Sub-Event:</strong> -code-</p>
    <p><strong>Paper Title:</strong> -title-</p>
    <p><strong>Paper ID:</strong> -paperId-</p>
    <p><strong>Author Details:</strong> -name- (-email-)</p>\n`,
  EMAIL_PAPER_SUBMISSION_SUBJECT_TEXT: '[-code-] Acknowledgement of Paper Submission',
  EMAIL_PAPER_SUBMISSION_OPENING_TEXT: 'Hi',
  // eslint-disable-next-line max-len
  EMAIL_PAPER_SUBMISSION_FOOTNOTE_TEXT: `You are receiving this email because you submitted a paper for this event.`,

  // Email Reviewer Text
  EMAIL_REVIEWER_BODY_TEXT:
    `You have been assigned some paper submissions to review as shown below. Please login to your account in UVENTs and navigate to the "Paper Submission -> Abstracts to Review" module to review the paper submissions.\n`,
  EMAIL_REVIEWER_BODY_DEFAULT_TEXT:
    `<p><strong>Event/Sub-Event:</strong> -code-</p>
    <p><strong>Reviewer Details:</strong> -name- (-email-)</p>
    <p><strong>Review Deadline:</strong> -deadline-</p>
    <p><strong>List of Submissions</strong></p>

    -Table of Submissions assigned to Reviewer-\n`,
  EMAIL_REVIEWER_SUBJECT_TEXT: '[-code-] Assigned Paper Submissions',
  EMAIL_REVIEWER_OPENING_TEXT: 'Hi',
  // eslint-disable-next-line max-len
  EMAIL_REVIEWER_FOOTNOTE_TEXT: `You are receiving this email because you have been added as a reviewer for the paper.
    If you are new to Uvents, your account has been created when you were added as a reviewer.
    Please find a previous email for your login details.`,

  // Email Paper Submission Decision Text
  // eslint-disable-next-line max-len
  EMAIL_PAPER_DECISION_BODY_ACCEPTANCE_TEXT:
    `Your paper submission has been approved for -verdict-! Please login to your account in UVENTs and navigate to the "Paper Submission" module to check for comments from reviewers and managers.\n`,
  // eslint-disable-next-line max-len
  EMAIL_PAPER_DECISION_BODY_REJECTION_TEXT:
    `Sorry, your Paper Submission was rejected. You can check for comments left by reviewers and managers.\n`,
  EMAIL_PAPER_DECISION_BODY_DEFAULT_TEXT:
    `<p><strong>Event:</strong> -code-</p>
    <p><strong>Paper Title:</strong> -title-</p>
    <p><strong>Author:</strong> -name- (-email-)</p>
    <hr />`,
  EMAIL_PAPER_DECISION_SUBJECT_TEXT: '[-code-] Outcome of Paper Submission',
  EMAIL_PAPER_DECISION_OPENING_TEXT: 'Hi',
  // eslint-disable-next-line max-len
  EMAIL_PAPER_DECISION_FOOTNOTE_TEXT: 'You are receiving this email because you submitted a paper for this event.',

  // Email Sub-Event Proposal Submission Text
  // eslint-disable-next-line max-len
  EMAIL_SUB_EVENT_SUBMISSION_BODY_TEXT:
    `You have submitted or have been added as a -chairTitle- for a -type-.\n`,
  // eslint-disable-next-line max-len
  EMAIL_SUB_EVENT_SUBMISSION_BODY_DEFAULT_TEXT:
    ` <p><strong>Event:</strong> -code-</p>
    <p><strong>Sub-Event:</strong> -subEventCode-</p>
    <p><strong>Sub-Event ID:</strong> -subEventId-</p>
    <p><strong>-chairTitle- Details:</strong> -name- (-email-)</p>\n`,

  EMAIL_SUB_EVENT_SUBMISSION_SUBJECT_TEXT: '[-code-] Acknowledgement of Sub-Event Proposal Submission',
  EMAIL_SUB_EVENT_SUBMISSION_OPENING_TEXT: 'Hi',
  // eslint-disable-next-line max-len
  EMAIL_SUB_EVENT_SUBMISSION_FOOTNOTE_TEXT: 'You are receiving this email because you submitted a sub-event proposal for this event.',

  // Email Sub-Event Proposal Decision Text
  // eslint-disable-next-line max-len
  EMAIL_SUB_EVENT_DECISION_BODY_ACCEPTANCE_TEXT:
    `Hooray, your sub-event has been approved! Let's go ahead and start adding contents!\n`,
  // eslint-disable-next-line max-len
  EMAIL_SUB_EVENT_DECISION_BODY_REJECTION_TEXT:
    `Sorry, your sub-event has not been approved.\n`,
  // eslint-disable-next-line max-len
  EMAIL_SUB_EVENT_DECISION_BODY_DEFAULT_TEXT:
    `<p><strong>Event:</strong> -code-</p>
  <p><strong>Sub-Event:</strong> -subEventCode-</p>
  <p><strong>Sub-Event Chair:</strong> -name- (-email-)</p>
  <p><strong>Status:</strong> -status-</p>\n`,

  EMAIL_SUB_EVENT_DECISION_SUBJECT_TEXT: '[-code-] Outcome of Sub-Event Proposal',
  EMAIL_SUB_EVENT_DECISION_OPENING_TEXT: 'Hi',
  // eslint-disable-next-line max-len
  EMAIL_SUB_EVENT_DECISION_FOOTNOTE_TEXT: 'You are receiving this email because you submitted a sub-event proposal for this event.',

  // Food Preferences
  VEGETARIAN_PREF: 'Vegetarian',
  NON_VEGETARIAN_PREF: 'Non-vegetarian',

  // Promise States
  ...keymirror({
    PROMISE_STATE_PENDING: null,
    PROMISE_STATE_SUCCESS: null,
    PROMISE_STATE_FAILURE: null,
    PROMISE_STATE_NAVIGATE: null
  }),

  CATEGORY_LIFELONGLEARNING: 'Lifelong Learning/Educational',
  CATEGORY_OTHERS: 'Others',

  // User Roles
  ROLE_USER: 'user',
  ROLE_ADMIN: 'admin',
  ROLE_STAFF: 'staff',

  // Sengrid Subject Headings
  SUBJECT_EVENT: '[-code-] Invite to event as instructor',
  SUBJECT_MODULE: '[-code-] Invite to track as track chair',
  SUBJECT_SUBEVENT_CHAIR: '[-code-] Sub-Event Proposal Submission Acknowledgement',
  SUBJECT_EVENT_SUBMISSION_AUTHOR: '[-code-] Invite to Event as Paper Author',
  SUBJECT_SUB_EVENT_SUBMISSION_AUTHOR: '[-code-] Invite to Sub-Event as Paper Author',
  SUBJECT_EVENT_REVIEWER_CHAIR: '[-code-] Invite to Event as Reviewer',
  SUBJECT_SUB_EVENT_REVIEWER_CHAIR: '[-code-] Invite to Sub-Event as Reviewer',
  SUBJECT_EVENT_REVIEWER_ASSIGNMENT: '[-code-] Review Assigned to you',

  SECURE_HTTPS_SOURCE: 'https',

  SECURE_VIDEO_DOMAIN_1: 'https://youtube.com',
  SECURE_VIDEO_DOMAIN_2: 'https://youtu.be',
  SECURE_VIDEO_DOMAIN_3: 'https://www.youtube.com',
  SECURE_VIDEO_DOMAIN_4: 'https://www.youtu.be',

  URL_HOMEPAGE: '/',
  URL_LOGIN: '/login',
  URL_ADFS_LOGIN_ERROR_PAGE: '/login/error',

  // Upload folders
  SPEAKER_IMAGE_FOLDER: 'speaker_image',
  USER_GUIDE_FOLDER: 'user_guide',

  STATUS_PUBLIC: 'public',
  STATUS_STUDENT: 'student',
  STATUS_STAFF: 'staff',
  STATUS_EXT: 'external',
  STATUS_OTHERS: 'others',

  REVIEW_PENDING: 'pending-review',
  REVIEW_ACCEPTED: 'accepted',
  REVIEW_PUBLISHED: 'published',
  REVIEW_ACCEPTED_ORAL_PRESENTATION: 'oral-presentation',
  REVIEW_ACCEPTED_PAPER: 'paper',
  REVIEW_ACCEPTED_POSTER_DEMO: 'poster-demo',
  REVIEW_REJECTED: 'rejected',
  REVIEW_REVISION: 'major-revisions',

  SINGLE_BLINDED: 'single-blind',
  DOUBLE_BLINDED: 'double-blind',

  SUBSECTION_TYPE_PARAGRAPH: 'paragraph',
  SUBSECTION_TYPE_IMAGE: 'image',
  SUBSECTION_TYPE_BULLET: 'bullet',

  SUBEVENT_ROUTE_INDEX: 4,

  // Guest Registration Status
  FREE_EVENT: 'Free Event',
  PAYMENT_ALTERNATIVE_PENDING: 'Alternative Payment Pending',
  PAYMENT_PENDING: 'Payment Pending',
  PAYMENT_SUCCESS: 'Payment Success',
  PAYMENT_ERROR: 'Payment Error',
  PAYMENT_FOC: 'Payment FOC',

  // Payment transaction Status
  PAYMENT_TRANS_APPROVED: 'Approved',
  PAYMENT_TRANS_CANCELLED: 'Cancelled',
  PAYMENT_TRANS_DECLINED: 'Declined',
  PAYMENT_TRANS_TIMEOUT: 'Timeout',
  PAYMENT_TRANS_VALIDATION_ERROR: 'Validation Error',

  // Guest Payment Modes
  CASH: 'Cash',
  CHEQUE: 'Cheque',
  BANK_TRANSFER: 'Bank Transfer',
  COMPANY_DEPT_INVOICE: 'Company/Dept Invoice',
  GROUP_INVOICE: 'Group Invoice',
  OTHERS: 'Others',
  NIL: '',

  PAYMENT_REFERENCE_CHAR_LIMIT: 18,

  EXPOSED_EVENT_SELECT: 'name type organisation description location startTime endTime sponsors speakers schedules managers registration.endTime registration.startTime registration.multiDay registration.multiDayDetails vote',

  IAM_EVENT_SELECT: 'code type instructors managers staffs paymentConfiguration.verifier',
  // IAM Report Descriptions
  IAM_ACCOUNT_TYPE: "EUA",
  IAM_ACCOUNT_OWNER_SPONSOR_ID: "",
  IAM_APPLICATION_ID: 1514,
  IAM_ENTITLEMENT_TYPE: "ROLE",
  IAM_ENTITLEMENT_SCOPE_TYPE: "OTH:Event",
  IAM_ROLE_VERIFIER: "Verifier",
  IAM_ROLE_MANAGERS: "Managers",
  IAM_ROLE_INSTRUCTORS: "Instructors",
  IAM_ROLE_STAFFS: "Staffs",
  IAM_ROLE_SUBEVENT_CHAIRS: "Sub-Event Chairs",
  IAM_ROLE_ADMIN: "Admin",
  IAM_OTH_PREFIX: "OTH:",
  IAM_OTH_ALL: "OTH:ALL",
  IAM_ACCESS_DESCRIPTION_MANAGERS: 'Managers - Event Manager to configure event details',
  IAM_ACCESS_DESCRIPTION_INSTRUCTORS: 'Instructors - Track Chair to manage tracks with the event',
  IAM_ACCESS_DESCRIPTION_SUBEVENT_CHAIRS: 'Sub Event Chairs - Sub Event Chair to manage sub event',
  IAM_ACCESS_DESCRIPTION_STAFFS: 'Staffs - Event Check-In staff for attendance taking',
  IAM_ACCESS_DESCRIPTION_ADMINS: 'Admin - Manage and support the system',
  IAM_ACCESS_DESCRIPTION_VERIFIER: 'Verifier - Payment Verifier to verify entered eColl2.0 settings',

  SIMILARITY_THRESHOLD: 10,
};

export default AppConstants;
