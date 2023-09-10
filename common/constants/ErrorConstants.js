const FieldRanges = {
  // User Range
  USER_EMAIL_MIN_LENGTH: 1,
  USER_NAME_MIN_LENGTH: 1,
  USER_PW_MIN_LENGTH: 6,
  USER_PW_MAX_LENGTH: 30,

  // Event Range
  EVENT_CODE_MIN_LENGTH: 3,
  EVENT_CODE_MAX_LENGTH: 10,
  EVENT_NAME_MIN_LENGTH: 1,
  EVENT_NAME_MAX_LENGTH: 70,

  // Payment Configuration
  EVENT_PAYMENT_CONFIGURATION_DEPARTMENT_CODE_LENGTH: 3,
  EVENT_PAYMENT_CONFIGURATION_APPLICATION_CODE_LENGTH: 4,
  EVENT_PAYMENT_CONFIGURATION_ACTIVITY_CODE_LENGTH: 10,
  EVENT_PAYMENT_CONFIGURATION_DESCRIPTION_LENGTH: 70,
  EVENT_PAYMENT_CONFIGURATION_NUSGL_LENGTH: 80,
  EVENT_PAYMENT_CONFIGURATION_TAX_CODE_LENGTH: 15,
  EVENT_PAYMENT_CONFIGURATION_HASH_SECRET_LENGTH: 100,
  EVENT_PAYMENT_CONFIGURATION_COUNTER_MAX_VALUE: 999999,

  //Payment Submission
  EVENT_PAYMENT_SUBMISSION_TRANSACTION_CODE_LENGTH: 7,
  EVENT_PAYMENT_SUBMISSION_TRANSACTION_AMOUNT_MIN_VALUE: 0,
  EVENT_PAYMENT_SUBMISSION_TRANSACTION_AMOUNT_MAX_VALUE: 99999999.99,
  EVENT_PAYMENT_SUBMISSION_CUSTOMER_ID_LENGTH: 20,
  EVENT_PAYMENT_SUBMISSION_NAME_LENGTH: 70,
  EVENT_PAYMENT_SUBMISSION_EMAIL_LENGTH: 70,
  EVENT_PAYMENT_SUBMISSION_TRANSACTION_REFNO_LENGTH: 15,
  EVENT_PAYMENT_SUBMISSION_EXTERNAL_REFNO_LENGTH: 70,
  EVENT_PAYMENT_SUBMISSION_DESCRIPTION_LENGTH: 70,
  EVENT_PAYMENT_SUBMISSION_INFOLINE3_LENGTH: 70,
  EVENT_PAYMENT_SUBMISSION_INFOLINE4_LENGTH: 70,
  EVENT_PAYMENT_SUBMISSION_INFOLINE5_LENGTH: 70,

  // Module Range
  MODULE_CODE_MIN_LENGTH: 3,
  MODULE_CODE_MAX_LENGTH: 10,
  MODULE_NAME_MIN_LENGTH: 1,

  // Project Range
  PROJECT_NAME_MIN_LENGTH: 1,

  // Submssion Range
  SUBMISSION_NAME_MIN_LENGTH: 1,
  SUBMISSION_NAME_MAX_LENGTH: 70,
};

const ErrorConstants = {
  // Request Handler Errors
  ERROR_POLL_EXCEEDED_MAX_ATTEMPTS: 'Exceeded maximum amount of poll attempts',

  // Authorisation Errors
  ERROR_SPECIAL_KEY_INVALID: 'Special key is invalid',
  ERROR_TOKEN_DID_NOT_EXIST: 'Token does not exist',
  ERROR_TOKEN_UNVERIFIED: 'Token cannot be verified',
  ERROR_TOKEN_QR_INVALID: 'QR code used is invalid for this event',
  ERROR_ADMIN_TOKEN_DID_NOT_EXIST: 'Admin token does not exist',
  ERROR_ADMIN_TOKEN_UNVERIFIED: 'Admin token cannot be verified',
  ERROR_ADMIN_TOKEN_INVALID: 'Admin token is invalid',
  ERROR_STAFF_TOKEN_DID_NOT_EXIST: 'Staff token does not exist',
  ERROR_STAFF_TOKEN_UNVERIFIED: 'Staff token cannot be verified',
  ERROR_STAFF_TOKEN_INVALID: 'Staff token is invalid',
  ERROR_TOKEN_EXPIRED: 'Token has expired',

  // Mongoose Errors
  ERROR_MONGOOSE_DID_EXIST: 'MongoDB object did exist',
  ERROR_MONGOOSE_DID_NOT_EXIST: 'MongoDB object did not exist',
  ERROR_NOT_MONGOOSE_OBJECT: 'Not MongoDB object',
  ERROR_SELECT_OPTION_INCLUSION_EXCLUSION: 'Not able to include and exclude fields for select options at the same time',

  // User Errors
  ERROR_USER_ID_REQUIRED: 'User ID is required',
  ERROR_USER_EMAIL_NOT_FOUND: 'There is no user with the email',
  ERROR_USER_LOGIN_INCORRECT: 'User email or password is incorrect',
  ERROR_USER_UPDATE_INFO_FAIL: 'Fail to update user info. Please try again',
  ERROR_USER_NOT_HUMAN: 'Please verify that you are a human',
  ERROR_LOGIN_TOO_MANY_ATTEMPTS: 'You failed too many login attempts. Please reset your password',
  ERROR_USER_EMAIL_REQUIRED: 'User email is required',
  ERROR_USER_EMAIL_IN_USE: 'Account with this email already exists',
  ERROR_USER_EMAIL_NOT_IN_USE: 'Account with this email does not exist',
  ERROR_USER_EMAIL_INVALID: 'User email is invalid',
  ERROR_USER_EMAIL_MIN_LENGTH: `User email length should be at least ${FieldRanges.USER_EMAIL_MIN_LENGTH}`,
  ERROR_USER_NAME_REQUIRED: 'Name is required',
  ERROR_USER_NAME_MIN_LENGTH: `Name length should be at least ${FieldRanges.USER_NAME_MIN_LENGTH}`,
  ERROR_USER_PW_REQUIRED: 'Please fill up all password fields',
  ERROR_USER_PW_NOT_STRONG: 'Password does not meet requirement',
  ERROR_USER_PW_MIN_LENGTH: `Password length should be at least ${FieldRanges.USER_PW_MIN_LENGTH}`,
  ERROR_USER_PW_MAX_LENGTH: `Password length should be at most ${FieldRanges.USER_PW_MAX_LENGTH}`,
  ERROR_USER_PW_INCORRECT: 'The old password you entered is incorrect',
  ERROR_USER_CONFIRMED_PW_MISMATCH:
    'The new passwords you entered do not match',
  ERROR_USER_PHONE_REQUIRED: 'User phone number is required',
  ERROR_USER_PHONE_NUMERIC_REQUIRED:
    'User phone number must contain only numeric characters',
  ERROR_USERNAME_REQUIRED: 'Username is required',
  ERROR_USERNAME_FORMAT_REQUIRED:
    'Username must be 4 to 25 characters, only contain letters, numbers, "_" and "-"',
  ERROR_USER_ROLE_NOT_ADMIN: 'User role is not admin',
  ERROR_USER_PW_CHANGE_DISABLED_NUS: 'Password change is not applicable for NUS user login',
  ERROR_USER_STATUS_INVALID: 'User status is invalid',
  ERROR_USER_STATUS_REQUIRED: 'User status is required',
  ERROR_USER_RANDOM_STRING_INVALID: 'User random string is invalid',
  ERROR_USER_RANDOM_STRING_REQUIRED: 'User random string is required',

  // Event Errors
  ERROR_EVENT_CODE_EXISTS: 'There was already an event with this event code',
  ERROR_EVENT_CODE_REQUIRED: 'Event/module code is required',
  ERROR_EVENT_CODE_MIN_LENGTH: `Event/module code length should be at least ${FieldRanges.EVENT_CODE_MIN_LENGTH}`,
  ERROR_EVENT_CODE_MAX_LENGTH: `Event/module code length should be at most ${FieldRanges.EVENT_CODE_MAX_LENGTH}`,
  ERROR_EVENT_CODE_UPDATE_MIN_LENGTH: `Event/module code update length should be at least ${FieldRanges.EVENT_CODE_MIN_LENGTH}`,
  ERROR_EVENT_CODE_UPDATE_MAX_LENGTH: `Event/module code update length should be at most ${FieldRanges.EVENT_CODE_MAX_LENGTH}`,

  ERROR_EVENT_CODE_ALPHANUMERIC_REQUIRED:
    'Event/module code must contain only alpha-numeric characters',
  ERROR_EVENT_NAME_REQUIRED: 'Event/module name is required',
  ERROR_EVENT_NAME_MIN_LENGTH: `Event/module name length should be at least ${FieldRanges.EVENT_NAME_MIN_LENGTH}`,
  ERROR_EVENT_NAME_MAX_LENGTH: `Event/module name length should be at max ${FieldRanges.EVENT_NAME_MAX_LENGTH}`,
  ERROR_EVENT_TYPE_REQUIRED: 'Event/module type is required',
  ERROR_EVENT_TYPE_INVALID: 'Type should be either event or module',
  ERROR_EVENT_CATEGORY_REQUIRED: 'Event/module category is required',
  ERROR_EVENT_START_TIME_NOT_ISO: 'Event start time is not in ISO format',
  ERROR_EVENT_END_TIME_NOT_ISO: 'Event end time is not in ISO format',
  ERROR_EVENT_START_TIME_AFTER_END_TIME: 'Event end time should be after start time',
  ERROR_EVENT_SCHEDULES_NOT_ARRAY: 'Event schedule should be an array',
  ERROR_EVENT_SCHEDULE_TIME_REQUIRED: 'Event schedule time is required',
  ERROR_EVENT_SHCEDULE_TIME_NOT_ISO: 'Event schedule time is not in ISO format',
  ERROR_EVENT_SPONSOR_RANK_REQUIRED: 'Event sponsor type rank is required',
  ERROR_EVENT_SPONSOR_RANK_NOT_NUMBER:
    'Event sponsor type rank should be a number',
  ERROR_EVENT_SPONSOR_RANK_OUT_OF_RANGE:
    'Event sponsor type rank is out of range',
  ERROR_EVENT_SPONSOR_MEMBERS_REQUIRED: 'Event sponsor members is required',
  ERROR_EVENT_SPONSOR_MEMBERS_NOT_ARRAY:
    'Event sponsor members should be an array',
  ERROR_EVENT_VOTING_TIME_INVALID: 'Voting is unavailable at this moment',
  ERROR_EVENT_REGISTRATION_START_TIME_REQUIRED:
    'Event registration period start time is required',
  ERROR_EVENT_REGISTRATION_END_TIME_REQUIRED:
    'Event registration period end time is required',
  ERROR_EVENT_REGISTRATION_START_TIME_AFTER_END_TIME:
    'Event registration period end time should be after start time',
  ERROR_EVENT_REGISTRATION_TICKET_TYPE_REQUIRED:
    'Event registration ticket type is required',
  ERROR_EVENT_REGISTRATION_TICKET_DESCRIPTION_REQUIRED:
    'Event registration ticket description is required',
  ERROR_EVENT_REGISTRATION_TICKET_START_TIME_REQUIRED:
    'Event registration ticket start time is required',
  ERROR_EVENT_REGISTRATION_TICKET_END_TIME_REQUIRED:
    'Event registration ticket end time is required',
  ERROR_EVENT_REGISTRATION_TICKET_START_TIME_AFTER_END_TIME:
    'Event registration ticket validity end time should be after start time',
  ERROR_EVENT_REGISTRATION_TICKET_TIME_INVALID:
    'This ticket type is unavailable at this moment',
  ERROR_EVENT_REGISTRATION_TICKET_LIMIT_REQUIRED:
    'Event registration ticket limit is required',
  ERROR_EVENT_REGISTRATION_TICKET_LIMIT_NOT_NUMBER:
    'Event ticket limit should be a number',
  ERROR_EVENT_REGISTRATION_TICKET_LIMIT_NOT_POSITIVE:
    'Event ticket limit should be a positive number',
  ERROR_EVENT_REGISTRATION_TICKET_WEIGHTAGE_REQUIRED:
    'Event registration ticket voting weightage is required',
  ERROR_EVENT_REGISTRATION_TICKET_WEIGHTAGE_NOT_NUMBER:
    'Event ticket voting weightage should be a number',
  ERROR_EVENT_REGISTRATION_TICKET_WEIGHTAGE_NOT_POSITIVE:
    'Event ticket voting weightage should be a positive number',
  ERROR_EVENT_REGISTRATION_TICKET_LIMIT_EXCEED:
    'Insufficient tickets for selected ticket type',
  ERROR_EVENT_REGISTRATION_TICKET_MAX_ACQUIRE_EXCEED:
    'Max tickets per registration for selected ticket type is exceeded',
  ERROR_EVENT_REGISTRATION_TICKET_MAX_ACQUIRE_REQUIRED:
    'Event maximum acquisition is required',
  ERROR_EVENT_REGISTRATION_TICKET_MAX_ACQUIRE_INVALID:
    'Event maximum acquisition type provided is invalid',
  ERROR_EVENT_REGISTRATION_TICKET_MAX_ACQUIRE_OUT_OF_BOUNDS:
    'Maximum acquisition for event registration ticket must be between 1 and the quantity of tickets',
  ERROR_EVENT_REGISTRATION_TICKET_ORIGINAL_PRICE_REQUIRED:
    'Event registration ticket original price is required',
  ERROR_EVENT_REGISTRATION_TICKET_ORIGINAL_PRICE_NOT_NUMBER:
    'Event ticket original price should be a number',
  ERROR_EVENT_REGISTRATION_TICKET_ORIGINAL_PRICE_NOT_POSITIVE:
    'Event ticket original price should be a positive number',
  ERROR_EVENT_REGISTRATION_TICKET_DISCOUNT_VALUE_REQUIRED:
    'Event registration ticket discount percentage is required',
  ERROR_EVENT_REGISTRATION_TICKET_DISCOUNT_VALUE_NOT_NUMBER:
    'Event ticket discount percentage should be a number',
  ERROR_EVENT_REGISTRATION_TICKET_DISCOUNT_VALUE_OUT_OF_RANGE:
    'Event ticket discount percentage should be between 0 and 100',
  ERROR_EVENT_REGISTRATION_TICKET_DISCOUNT_START_TIME_REQUIRED:
    'Event ticket discount validity start time is required',
  ERROR_EVENT_REGISTRATION_TICKET_DISCOUNT_END_TIME_REQUIRED:
    'Event ticket discount validity end time is required',
  ERROR_EVENT_REGISTRATION_TICKET_DISCOUNT_START_AFTER_END:
    'Event ticket discount validity end time should be after start time',
  ERROR_EVENT_REGISTRATION_PRICE_MISMATCH: 'Something went wrong. Please refresh the page and try again.',
  ERROR_EVENT_REGISTRATION_EXTRA_FIELDS_TYPE_REQUIRED: 'Field type is required',
  ERROR_EVENT_REGISTRATION_EXTRA_FIELDS_TYPE_MISSING_FOR_PAYMENT_CONFIG: 'Field cannot be deleted because it is used in Payment Configuration',
  ERROR_EVENT_REGISTRATION_SUCCESS_WITH_EMAIL_ERROR: 'Guest was added successfully, but the confirmation email failed to send',
  ERROR_EVENT_REMINDER_TIME_REQUIRED: 'Event reminder time is required',
  ERROR_EVENT_REMINDER_EMAIL_SUBJECT_REQUIRED: 'Event reminder email subject is required',
  ERROR_EVENT_REMINDER_EMAIL_OPENING_REQUIRED: 'Event reminder email opening is required',
  ERROR_EVENT_REMINDER_EMAIL_BODY_REQUIRED: 'Event reminder email body is required',
  ERROR_EVENT_REMINDER_EMAIL_TICKET_DETAILS_REQUIRED: 'Event reminder email ticket details is required',
  ERROR_EVENT_REMINDER_EMAIL_FOOTNOTE_REQUIRED: 'Event reminder email footnote is required',
  ERROR_EVENT_REMINDER_SMS_BODY_REQUIRED: 'Event reminder SMS body is required',
  ERROR_EVENT_REG_CONFIRM_EMAIL_SUBJECT_REQUIRED: 'Event confirmation email subject is required',
  ERROR_EVENT_REG_CONFIRM_EMAIL_OPENING_REQUIRED: 'Event confirmation email opening is required',
  ERROR_EVENT_REG_CONFIRM_EMAIL_BODY_REQUIRED: 'Event confirmation email body is required',
  ERROR_EVENT_REG_CONFIRM_EMAIL_TICKET_DETAILS_REQUIRED: 'Event confirmation email ticket details is required',
  ERROR_EVENT_REG_CONFIRM_EMAIL_FOOTNOTE_REQUIRED: 'Event confirmation email footnote is required',
  ERROR_EVENT_REG_CONFIRM_SMS_BODY_REQUIRED: 'Event confirmation SMS body is required',
  ERROR_EVENT_PROMO_EMAIL_SUBJECT_REQUIRED: 'Event promotion email subject is required',
  ERROR_EVENT_PROMO_EMAIL_OPENING_REQUIRED: 'Event promotion email opening is required',
  ERROR_EVENT_PROMO_EMAIL_BODY_REQUIRED: 'Event promotion email body is required',
  ERROR_EVENT_PROMO_EMAIL_FOOTNOTE_REQUIRED: 'Event promotion email footnote is required',
  ERROR_EVENT_PROMO_EMAIL_TARGET_GROUP_REQUIRED: 'Event promotion email targeted group option is required',
  ERROR_EVENT_PROMO_EMAIL_TARGETED_RECIPIENT_REQUIRED: 'Event promotion email targeted recipients is required',
  ERROR_EVENT_PROMO_EMAIL_SEND_FAILED: 'Failed to send event promotion email',
  ERROR_EVENT_REGISTRATION_EXTRA_FIELDS_TYPE_INVALID:
    'Field type has to be either text, checkbox, radio, ranking, label or datetime',
  ERROR_EVENT_REGISTRATION_EXTRA_FIELDS_NUM_OPTS_REQUIRED:
    'Number of options is required',
  ERROR_EVENT_REGISTRATION_EXTRA_FIELDS_OPTS_REQUIRED:
    'List of options is required',
  ERROR_EVENT_REGISTRATION_EXTRA_FIELDS_NUM_OPTS_NOT_NUMBER:
    'Number of options for extra fields should be a number',
  ERROR_EVENT_REGISTRATION_EXTRA_FIELDS_NUM_OPTS_NOT_POSITIVE:
    'Number of options for extra fields should be positive',
  ERROR_EVENT_REGISTRATION_EXTRA_FIELDS_OPTS_MISMATCH:
    'Length of list of options is not equal to the number of options',
  ERROR_EVENT_REGISTRATION_EXTRA_FIELDS_DROPDOWN_EMPTY:
    'Dropdown list options cannot be empty',
  ERROR_EVENT_REGISTRATION_EXTRA_FIELDS_DUPLICATE_TITLE:
    'Extra Fields cannot have repeat titles',
  ERROR_EVENT_REGISTRATION_EXTRA_FIELDS_MISSING_TITLE:
    'Extra Fields must have titles',
  ERROR_EVENT_REFERENCES_NOT_ARRAY: 'Event references should be an array',
  ERROR_EVENT_PROMOTE_LINKS_NOT_ARRAY: 'Event promote links should be an array',
  ERROR_EVENT_AWARDS_PRIZES_NOT_ARRAY: 'Event award prizes should be an array',
  ERROR_EVENT_CREATOR_REQUIRED: 'Event creator is required',
  ERROR_EVENT_EXISTING_INSTRUCTOR:
    'This email has already been set as an instructor account',
    ERROR_EVENT_EXISTING_SUBEVENT_CHAIR:
      'This email has already been set as a sub-event chair account',
  ERROR_EVENT_EXISTING_MANAGER:
    'This email has already been set as a manager account',
  ERROR_EVENT_EXISTING_STAFF:
    'This email has already been set as a staff account',
  ERROR_EVENT_NOT_INSTRUCTOR: 'User is not a instructor of this event',
  ERROR_EVENT_NOT_SUBEVENT_CHAIR: 'User is not a sub-event chair of this event',
  ERROR_EVENT_NOT_MANAGER: 'User is not a manager of this event',
  ERROR_EVENT_NOT_STUDENT: 'User is not a student of this event',
  ERROR_EVENT_NOT_STAFF: 'User is not a staff member of this event',
  ERROR_EVENT_NOT_VERIFIER: 'User is not a verifier of this event',
  ERROR_EVENT_INVITE_EMPTY_LIST: 'Invitation list is empty',
  ERROR_EVENT_INVITE_NOT_INVITE_ONLY: 'Event is not invite-only',
  ERROR_EVENT_VOTING_START_TIME_REQUIRED: 'Event voting start time is required',
  ERROR_EVENT_VOTING_END_TIME_REQUIRED: 'Event voting end time is required',
  ERROR_EVENT_VOTING_START_TIME_AFTER_END_TIME: 'Event voting end time should be after start time',
  ERROR_EVENT_SURVEY_START_TIME_REQUIRED: 'Event survey start time is required',
  ERROR_EVENT_SURVEY_END_TIME_REQUIRED: 'Event survey end time is required',
  ERROR_EVENT_SURVEY_START_TIME_AFTER_END_TIME: 'Event survey end time should be after start time',
  ERROR_EVENT_INVITE_INVALID_EMAIL: 'Invited guest email provided is invalid',
  ERROR_EVENT_INVITE_INVALID_NAME: 'Invited guest name provided is invalid',
  ERROR_EVENT_PROMOCODE_GUESTS_EMPTY_LIST: 'Guests list is empty',
  ERROR_EVENT_PROMOCODE_NOT_ENABLED: 'Event does not allow for promo codes',
  ERROR_EVENT_PROMOCODE_INVALID_EMAIL: 'Guest email provided for sending promo codes is invalid',
  ERROR_EVENT_PROMOCODE_INVALID_NAME: 'Guest name provided for sending promo codes is invalid',
  ERROR_EVENT_MASS_REGISTRATION_NA_INVITE_ONLY: 'Manager mass registration is not applicable for invite-only events',
  ERROR_EVENT_MASS_REGISTRATION_UNAUTHORISED : 'You are not authorized to register multiple guests',

  //Payment Transaction
  ERROR_EVENT_PAYMENT_TRANSACTION_DID_NOT_EXIST: 'Payment transaction does not exist',
  ERROR_EVENT_PAYMENT_TRANSACTION_GUEST_DID_NOT_EXIST: 'Payment transaction guest does not exist',
  ERROR_EVENT_PAYMENT_TRANSACTION_HASH_MISMATCH: 'Payment transaction hash do not match',
  ERROR_EVENT_PAYMENT_TRANSACTION_AMOUNT_MISMATCH: 'Paymenet transaction amount do not match',
  ERROR_EVENT_PAYMENT_FAILURE_BY_EVENT_MANAGER: 'Marked as Payment Failure by Event Manager',
  ERROR_EVENT_PAYMENT_TRANSACTION_TOTAL_AMOUNT_REQUIRED: 'Total Amount is required',
  ERROR_EVENT_PAYMENT_TRANSACTION_RECEIPT_NO_REQUIRED: 'Receipt No is required',
  ERROR_EVENT_PAYMENT_TRANSACTION_INVOICE_NO_REQUIRED: 'Invoice No is required',
  ERROR_EVENT_PAYMENT_TRANSACTION_STATUS_REQUIRED: 'Status is required',

  //Payment Configuration
  ERROR_EVENT_PAYMENT_CONFIGURATION_DEPARTMENT_CODE_REQUIRED:
    'Department Code is required',
  ERROR_EVENT_PAYMENT_CONFIGURATION_APPLICATION_CODE_REQUIRED:
    'Application Code is required',
  ERROR_EVENT_PAYMENT_CONFIGURATION_ACTIVITY_CODE_REQUIRED:
    'Activity Code is required',
  ERROR_EVENT_PAYMENT_CONFIGURATION_HASH_SECRET_REQUIRED:
    'Hash Secred is required',
  ERROR_EVENT_PAYMENT_CONFIGURATION_DEPARTMENT_CODE_MAX_LENGTH:
    `Department Code length should be at most ${FieldRanges.EVENT_PAYMENT_CONFIGURATION_DEPARTMENT_CODE_LENGTH}`,
  ERROR_EVENT_PAYMENT_CONFIGURATION_APPLICATION_CODE_MAX_LENGTH:
    `Application Code length should be at most ${FieldRanges.EVENT_PAYMENT_CONFIGURATION_APPLICATION_CODE_LENGTH}`,
  ERROR_EVENT_PAYMENT_CONFIGURATION_ACTIVITY_CODE_MAX_LENGTH:
    `Activity Code length should be at most ${FieldRanges.EVENT_PAYMENT_CONFIGURATION_ACTIVITY_CODE_LENGTH}`,
  ERROR_EVENT_PAYMENT_CONFIGURATION_DESCRIPTION_MAX_LENGTH:
    `Description length should be at most ${FieldRanges.EVENT_PAYMENT_CONFIGURATION_DESCRIPTION_LENGTH}`,
  ERROR_EVENT_PAYMENT_CONFIGURATION_NUSGL_MAX_LENGTH:
    `NUS GL length should be at most ${FieldRanges.EVENT_PAYMENT_CONFIGURATION_NUSGL_LENGTH}`,
  ERROR_EVENT_PAYMENT_CONFIGURATION_TAX_CODE_MAX_LENGTH:
    `Tax Code length should be at most ${FieldRanges.EVENT_PAYMENT_CONFIGURATION_TAX_CODE_LENGTH}`,
  ERROR_EVENT_PAYMENT_CONFIGURATION_HASH_SECRET_MAX_LENGTH:
    `Hash Secret length should be at most ${FieldRanges.EVENT_PAYMENT_CONFIGURATION_HASH_SECRET_LENGTH}`,
  ERROR_EVENT_PAYMENT_CONFIGURATION_COUNTER_MAX_VALUE:
    `This payment configuration was used for too many events`,
  ERROR_EVENT_PAYMENT_CONFIGURATION_RECEIPT_TYPE_REQUIRED: 'Receipt Type is required',
  ERROR_EVENT_PAYMENT_CONFIGURATION_RECEIPT_TYPE_INVALID: 'Receipt Type is invalid',
  ERROR_EVENT_PAYMENT_CONFIGURATION_PERCENTAGE_VALUE: 'Percentage should be between 0 and 100',
  ERROR_EVENT_PAYMENT_CONFIGURATION_TOTAL_PERCENTAGE_VALUE: 'Total Percentage in Accounts must be 100',
  ERROR_EVENT_PAYMENT_CONFIGURATION_NUSGL_REQUIRED: 'NUS General Ledger Code is required',
  ERROR_EVENT_PAYMENT_CONFIGURATION_TAX_CODE_REQUIRED: 'Tax Code is required',
  ERROR_EVENT_PAYMENT_CONFIGURATION_PERCENTAGE_REQUIRED: 'Percentage is required',
  ERROR_EVENT_PAYMENT_VERIFIER_EMAIL_REQUIRED: 'Verifier Email is required',
  ERROR_EVENT_PAYMENT_CONFIGURATION_INVALID_DESCRIPTION: 'Description is invalid',
  ERROR_EVENT_PAYMENT_CONFIGURATION_INVALID_INFO_LINE_3: 'Line 3 is invalid',
  ERROR_EVENT_PAYMENT_CONFIGURATION_INVALID_INFO_LINE_4: 'Line 4 is invalid',
  ERROR_EVENT_PAYMENT_CONFIGURATION_INVALID_INFO_LINE_5: 'Line 5 is invalid',
  ERROR_EVENT_PAYMENT_CONFIGURATION_DUPLICATE:
  'There was a duplicated Application, Department and Activity Code (aka ecoll2.0 transaction type code) used in -eventCode- – -eventName-. Please provide the unique Application, Department and Activity Code that is required for every new PAID event under the Payment module',

  //Payment Submission
  ERROR_PAYMENT_SUBMISSION_EVENT_CODE_REQUIRED : 'Event code is required',
  ERROR_PAYMENT_SUBMISSION_RECEIPT_TYPE_REQUIRED : 'Receipt type is required',
  ERROR_PAYMENT_SUBMISSION_TRANSACTION_CODE_REQUIRED : 'Transaction code is required',
  ERROR_PAYMENT_SUBMISSION_TRANSACTION_CODE_MAX_LENGTH:
    `Transaction code length should be at most ${FieldRanges.EVENT_PAYMENT_SUBMISSION_TRANSACTION_CODE_LENGTH}`,
  ERROR_PAYMENT_SUBMISSION_TRANSACTION_AMOUNT_REQUIRED : 'Transaction amount is required',
  ERROR_PAYMENT_SUBMISSION_TRANSACTION_AMOUNT_VALUE:
    `Transaction amount should be between ${FieldRanges.EVENT_PAYMENT_SUBMISSION_TRANSACTION_AMOUNT_MIN_VALUE} and ${FieldRanges.EVENT_PAYMENT_SUBMISSION_TRANSACTION_AMOUNT_MAX_VALUE}`,
  ERROR_PAYMENT_SUBMISSION_TRANSACTION_AMOUNT_DECIMAL_PLACES: "Transaction amount can only have 2 decimal places",
  ERROR_PAYMENT_SUBMISSION_CUSTOMER_ID_MAX_LENGTH :
    `Customer ID length should be at most ${FieldRanges.EVENT_PAYMENT_SUBMISSION_CUSTOMER_ID_LENGTH}`,
  ERROR_PAYMENT_SUBMISSION_NAME_REQUIRED : 'Name is required',
  ERROR_PAYMENT_SUBMISSION_NAME_MAX_LENGTH :
    `Name length should be at most ${FieldRanges.EVENT_PAYMENT_SUBMISSION_NAME_LENGTH}`,
  ERROR_PAYMENT_SUBMISSION_EMAIL_REQUIRED : 'Email address is required',
  ERROR_PAYMENT_SUBMISSION_EMAIL_INVALID : 'Email address is invalid',
  ERROR_PAYMENT_SUBMISSION_EMAIL_MAX_LENGTH :
    `Email address length should be at most ${FieldRanges.EVENT_PAYMENT_SUBMISSION_EMAIL_LENGTH}`,
  ERROR_PAYMENT_SUBMISSION_TRANSACTION_REFNO_REQUIRED : 'Transaction RefNo is required',
  ERROR_PAYMENT_SUBMISSION_TRANSACTION_REFNO_MAX_LENGTH :
    `Transaction RefNo length should be at most ${FieldRanges.EVENT_PAYMENT_SUBMISSION_TRANSACTION_REFNO_LENGTH}`,
  ERROR_PAYMENT_SUBMISSION_EXTERNAL_REFNO_MAX_LENGTH :
    `External RefNo length should be at most ${FieldRanges.EVENT_PAYMENT_SUBMISSION_EXTERNAL_REFNO_LENGTH}`,
  ERROR_PAYMENT_SUBMISSION_DESCRIPTION_MAX_LENGTH :
    `Description length should be at most ${FieldRanges.EVENT_PAYMENT_SUBMISSION_DESCRIPTION_LENGTH}`,
  ERROR_PAYMENT_SUBMISSION_INFOLINE3_MAX_LENGTH :
    `Info Line 3 length should be at most ${FieldRanges.EVENT_PAYMENT_SUBMISSION_INFOLINE3_LENGTH}`,
  ERROR_PAYMENT_SUBMISSION_INFOLINE4_MAX_LENGTH :
    `Info Line 4 length should be at most ${FieldRanges.EVENT_PAYMENT_SUBMISSION_INFOLINE4_LENGTH}`,
  ERROR_PAYMENT_SUBMISSION_INFOLINE5_MAX_LENGTH :
    `Info Line 5 length should be at most ${FieldRanges.EVENT_PAYMENT_SUBMISSION_INFOLINE5_LENGTH}`,
  ERROR_PAYMENT_SUBMISSION_HASH_SECRET_REQUIRED : 'Hash secret is required',
  ERROR_PAYMENT_SUBMISSION_ACCOUNT_REQUIRED : 'Account is required',
  ERROR_PAYMENT_SUBMISSION_COUNTER_REQUIRED : 'Counter is required',

  // Module Errors
  ERROR_MODULE_ID_REQUIRED: 'Module/task ID is required',
  ERROR_TRACK_TYPE_REQUIRED: 'Track type is required',
  ERROR_MODULE_CODE_REQUIRED: 'Module code is required',
  ERROR_TASK_CODE_INCOMPLETE: 'Task code is incomplete',
  ERROR_MODULE_CODE_MIN_LENGTH: `Module code length should be at least ${FieldRanges.MODULE_CODE_MIN_LENGTH}`,
  ERROR_MODULE_CODE_MAX_LENGTH: `Module code length should be at most ${FieldRanges.MODULE_CODE_MAX_LENGTH}`,
  ERROR_MODULE_CODE_ALPHANUMERIC_REQUIRED:
    'Module code must contain only alpha-numeric characters',
  ERROR_MODULE_NAME_REQUIRED: 'Module/task name is required',
  ERROR_MODULE_NAME_MIN_LENGTH: `Module/task name length should be at least ${FieldRanges.MODULE_NAME_MIN_LENGTH}`,
  ERROR_MODULE_CREATOR_REQUIRED: 'Module/task creator is required',
  ERROR_MODULE_EXISTING_INSTRUCTOR:
    'This email has already been set as an instructor account',
  ERROR_MODULE_NOT_INSTRUCTOR: 'User is not an instructor of this module',
  ERROR_MODULE_NOT_STUDENT: 'User is not a student of this module',

  // Guest Errors
  ERROR_GUEST_DID_EXIST:
    'There already exists a registered guest with this email',
  ERROR_GUEST_DID_PARTICIPATE:
    'This email is already used by one of the participants. No registration needed.',
  ERROR_GUEST_TOKEN_REQUIRED: 'Guest token is required',
  ERROR_GUEST_TOKEN_INVALID: 'Guest token is invalid',
  ERROR_GUEST_TICKET_REQUIRED: 'Guest ticket is required',
  ERROR_GUEST_TICKET_INVALID: 'Guest ticket is invalid',
  ERROR_GUEST_NOT_CHECKED_IN: 'Guest is not checked in',
  ERROR_GUEST_NAME_REQUIRED: 'Guest name is required',
  ERROR_GUEST_NAME_INVALID: 'Guest name is invalid',
  ERROR_GUEST_EMAIL_REQUIRED: 'Guest email is required',
  ERROR_GUEST_EMAIL_INVALID: 'Guest email is not in correct format',
  ERROR_GUEST_STATUS_REQUIRED: 'Guest status is required',
  ERROR_GUEST_STATUS_INVALID: 'Guest status is not in correct format',
  ERROR_GUEST_NUMBER_REQUIRED: 'Guest phone number is required',
  ERROR_GUEST_NUMBER_INVALID: 'Guest phone number is invalid; it must contain only numeric characters',
  ERROR_GUEST_MODULE_VOTES_REQUIRED: 'Guest module votes are required',
  ERROR_GUEST_MODULE_VOTES_INVALID: 'Guest module votes are invalid',
  ERROR_GUEST_NOT_NUS_USER: 'This event is for NUS users only. If you are a NUS member, please log in with your NUS account',
  ERROR_EVENT_PUBLIC_BUT_MEETING_INTERNAL: 'This event zoom meeting is wrongly configured and only open for NUS Zoom Accounts. Please contact the administrator of this event for more information',
  NUS_MEETING_ONLY_FOR_INTERNAL_EVENT: 'This event zoom meeting is only for NUS users but the event is not restricted to NUS users',
  NUS_MEETING_ONLY_FOR_PRIVATE_EVENT: 'You cannot set a meeting to both be for the public and for NUS users only',
  ZOOM_TOKEN_NOT_FOR_USER: 'This zoom token is invalid',
  ERROR_GUEST_INVITE_CODE_REQUIRED: 'Guest invite code is required for invite-only events',
  ERROR_GUEST_INVITE_CODE_INVALID: 'Guest invitation code is invalid',
  ERROR_GUEST_INVITE_CODE_REDEEMED: 'Guest invitation code has already been used',
  ERROR_GUEST_PROMO_CODE_INVALID: 'Guest promotion code is invalid',
  ERROR_GUEST_PROMO_CODE_REDEEMED: 'Guest promotion code has already been used',
  ERROR_GUEST_DISCOUNT_TIME_INVALID: 'This discount type is not applicable at the moment',
  ERROR_GUEST_EXTRA_TEXT_FIELD_INVALID:
    'There is an invalid text field. Please check',
  ERROR_GUEST_EXTRA_TEXT_FIELD_EMPTY:
    'There is an empty text field. Please check',
  ERROR_GUEST_EXTRA_CHECKBOX_FIELD_INVALID:
    'There is an invalid checkbox field. Please check',
  ERROR_GUEST_EXTRA_CHECKBOX_FIELD_OUT_OF_RANGE:
    'There is a checkbox field whose chosen options are out of range',
  ERROR_GUEST_EXTRA_CHECKBOX_FIELD_EMPTY:
    'There is an empty checkbox field. Please check',
  ERROR_GUEST_EXTRA_RADIO_FIELD_INVALID:
    'There is an invalid radio field. Please check',
  ERROR_GUEST_EXTRA_RADIO_FIELD_OUT_OF_RANGE:
    'There is a radio field whose option is out of range',
  ERROR_GUEST_EXTRA_DATETIME_FIELD_INVALID:
    'There is an invalid datetime field. Please check',
    ERROR_GUEST_EXTRA_UPLOAD_FIELD_INVALID:
      'There is an invalid upload field. Please check',
    ERROR_GUEST_EXTRA_UPLOAD_FIELD_EMPTY:
      'There is an empty upload field. Please check',
  ERROR_GUEST_EMAIL_NOT_EXIST: 'Guest email does not exist',
  ERROR_GUEST_REGISTRATION_STATUS_REQUIRED: 'Guest registration status is required',
  ERROR_GUEST_REGISTRATION_STATUS_INVALID: 'Guest registration status is not in correct format',
  ERROR_GUEST_PAYMENT_MODE_INVALID: 'Guest Payment Mode is not in correct format',
  ERROR_GUEST_PAYMENT_REFERENCE_INVALID: 'Guest Reference No. should be an alphanumeric string not more than 18 characters',

  // Vote Errors
  ERROR_EVENT_VOTE_RESULT_NOT_PUBLISHED:
    'Current user cannot access unpublished voting results',

  ERROR_FEEDBACK_DID_EXIST: 'This user already gave a feedback for this event',

  ERROR_INVALID_TOKEN: 'Invalid Token',

  // Project Errors
  ERROR_PROJECT_NOT_MEMBERS: 'User is not a member of this project',
  ERROR_PROJECT_NAME_REQUIRED: 'Project name is required',
  ERROR_PROJECT_NAME_MIN_LENGTH: `Project name length should be at least ${FieldRanges.PROJECT_NAME_MIN_LENGTH}`,
  ERROR_PROJECT_NEW_IDS_NOT_CONSECUTIVE: 'New project IDs are not consecutive',
  ERROR_PROJECT_IMAGE_LINKS_INVALID: 'Project image links should be an array',

  // Speaker Errors
  ERROR_SPEAKER_ALREADY_EXISTS: 'The speaker with this email already exists',
  // Misc Errors
  ERROR_URLS_INVALID: 'URL is invalid',
  INVALID_EMAIL_FOR_INTERNAL_EVENT:
    'This email is invalid for the internal event',

  // ADFS Errors
  ERROR_ADFS_ARGS_REQUIRED: 'User name and email are required',
  ERROR_ADFS_FAILED_TO_LOGIN: 'Failed to login through ADFS',
  ERROR_ADFS_LOGIN_REQUIRED: 'Please use NUS User Login',
  ERROR_ADFS_FAILED_TO_UPDATE_STATUS: 'Failed to update user status',

  // JWT Errors
  ERROR_JWT_FAILED_TO_AFFIX_TOKEN: 'Failed to affix JWT token to user',

  // 2FA Errors
  ERROR_AUTH_2FA_FAILED: 'Failed to authenticate via 2FA',
  ERROR_AUTH_2FA_TRY_AGAIN: 'Authentication in progress, try again',
  ERROR_AUTH_2FA_DENIED: '2FA permission has been denied',

  // Event Report Errors
  ERROR_END_DATE_EARLIER_THAN_START_DATE: 'The filter end date is earlier than the start date',
  ERROR_REPORT_SUBMISSION_EXCEED: 'Number of report(s) submitted exceed limit',

  // Submission Errors
  ERROR_SUBMISSION_TITLE_REQUIRED: 'Submission title is required',
  ERROR_SUBMISSION_TITLE_MIN_LENGTH: `Submission title length should be at least ${FieldRanges.SUBMISSION_NAME_MIN_LENGTH}`,
  ERROR_SUBMISSION_ABSTRACT_REQUIRED: 'Submission abstract is required',
  ERROR_SUBMISSION_ABSTRACT_MIN_LENGTH: `Submission abstract length should be at least ${FieldRanges.SUBMISSION_NAME_MIN_LENGTH}`,
  ERROR_SUBMISSION_BLIND_TYPE_REQUIRED: 'Submission blind type is required',
  ERROR_SUBMISSION_BLIND_TYPE_INCORRECT: `Submission blind type should be single blind or double blind`,
  ERROR_SUBMISSION_SUBMISSION_TIME_REQUIRED: 'Submission datetime is required',
  ERROR_SUBMISSION_FILE_REQUIRED: 'A pdf submission is required',
  ERROR_SUBMISSION_AUTHOR_EXISTS: 'The author has already been added to the submission',
  ERROR_SUBMISSION_AUTHORS_REQUIRED: 'Submission requires at least 1 author',
  ERROR_SUBMISSION_AUTHOR_NAME_REQUIRED: 'Submission author name is required',
  ERROR_SUBMISSION_AUTHOR_NAME_MIN_LENGTH: `Submission author name length should be at least ${FieldRanges.SUBMISSION_NAME_MIN_LENGTH}`,
  ERROR_SUBMISSION_AUTHOR_EMAIL_REQUIRED: 'Submission author name is required',
  ERROR_SUBMISSION_AUTHOR_EMAIL_MIN_LENGTH: `Submission author email length should be at least ${FieldRanges.SUBMISSION_NAME_MIN_LENGTH}`,
  ERROR_SUBMISSION_AUTHOR_ALTERNATE_EMAIL_REQUIRED: 'Submission author alternate email is required',
  ERROR_SUBMISSION_AUTHOR_ALTERNATE_EMAIL_MIN_LENGTH: `Submission author alternate email length should be at least ${FieldRanges.SUBMISSION_NAME_MIN_LENGTH}`,
  ERROR_SUBMISSION_AUTHOR_COUNTRY_REQUIRED: 'Submission author country is required',
  ERROR_SUBMISSION_AUTHOR_COUNTRY_MIN_LENGTH: `Submission author country length should be at least ${FieldRanges.SUBMISSION_NAME_MIN_LENGTH}`,
  ERROR_SUBMISSION_AUTHOR_AFFILIATION_REQUIRED: 'Submission author affiliation is required',
  ERROR_SUBMISSION_AUTHOR_AFFILIATION_MIN_LENGTH: `Submission author affiliation length should be at least ${FieldRanges.SUBMISSION_NAME_MIN_LENGTH}`,
  ERROR_SUBMISSION_FILE_WRONG_TYPE: 'File is not in the pdf format',
  ERROR_SUBMISSION_REVIEW_SCORE_REQUIRED: 'A score for the paper is required',
  ERROR_SUBMISSION_REVIEW_REQUIRED: 'Review is required',
  ERROR_SUBMISSION_DECISION_REQUIRED: 'Please select a decision before clicking the "Submit Decision" button',
  ERROR_SUBMISSION_COMMENTS_TO_REVIEW_CHAIR_REQUIRED: 'Comments to review chair is required',
  ERROR_EXTRA_CHECKBOX_FIELD_REQUIRED:
    'There is a required checkbox field that is not marked. Please check',
  ERROR_GUEST_EXTRA_RADIO_FIELD_REQUIRED:
    'There is an empty radio field. Please check',
  ERROR_ABSTRACT_HEADING_NO_BLANK:
    'There is an empty abstract heading. Please add a heading or delete it.',
  ERROR_GUEST_EXTRA_CHECKBOX_FIELD_LIMIT_EXCEED:
    'Number of checked boxes exceeded the limit. Please check',

  // Sub-Event Errors
  ERROR_SUBEVENT_NAME_REQUIRED: 'Sub-Event name is required',
  ERROR_SUBEVENT_NAME_MIN_LENGTH: `Sub-Event name length should be at least ${FieldRanges.SUBMISSION_NAME_MIN_LENGTH}`,
  ERROR_SUBEVENT_NAME_MAX_LENGTH: `Sub-Event name length should be at most ${FieldRanges.SUBMISSION_NAME_MAX_LENGTH}`,
  ERROR_SUBEVENT_CHAIR_NAME_REQUIRED: 'Sub-Event chair name is required',
  ERROR_SUBEVENT_CHAIR_NAME_MIN_LENGTH: `Sub-Event chair name length should be at least ${FieldRanges.SUBMISSION_NAME_MIN_LENGTH}`,
  ERROR_SUBEVENT_CHAIR_EMAIL_REQUIRED: 'Sub-Event chair email is required',
  ERROR_SUBEVENT_CHAIR_EMAIL_LENGTH: `Sub-Event chair email length should be at least ${FieldRanges.SUBMISSION_NAME_MIN_LENGTH}`,
  ERROR_SUBEVENT_OBJECTIVE_REQUIRED: 'Sub-Event objective is required',
  ERROR_SUBEVENT_OBJECTIVE_LENGTH: `Sub-Event objective email length should be at least ${FieldRanges.SUBMISSION_NAME_MIN_LENGTH}`,
  ERROR_SUBEVENT_TYPE_REQUIRED: 'Sub-Event type is required',
  ERROR_SUBEVENT_DESCRIPTION_REQUIRED: 'Sub-Event description is required',
  ERROR_SUBEVENT_DESCRIPTION_LENGTH: `Sub-Event description length should be at least ${FieldRanges.SUBMISSION_NAME_MIN_LENGTH}`,
  ERROR_SUBEVENT_DATE_REQUIRED: 'Sub-Event date is required',
  ERROR_SUBEVENT_END_DATE_REQUIRED: 'Sub-Event date is required',
  ERROR_SUBEVENT_DURATION_REQUIRED: 'Sub-Event duration is required',
  ERROR_SUBEVENT_LOCATION_REQUIRED: 'Sub-Event location is required',
  ERROR_SUBEVENT_LOCATION_LENGTH: `Sub-Event location length should be at least ${FieldRanges.SUBMISSION_NAME_MIN_LENGTH}`,
  ERROR_SUBEVENT_FORM_FIELDS_REQUIRED: 'Sub-Event form fields is required',
  ERROR_SUBEVENT_FORM_FIELD_TITLE_REQUIRED: 'Sub-Event form field title is required',
  ERROR_SUBEVENT_FORM_FIELD_PLACEHOLDER_REQUIRED: 'Sub-Event form field placeholder is required',
  ERROR_SUBEVENT_FORM_FIELD_OPTIONS_REQUIRED: 'Sub-Event form field options is required',

  // Sub-Event Doc Download Errors
  ERROR_BULLET_LEVEL_OUT_OF_RANGE: 'Document bullet level out of range. It should be between 0 - 6.',
  ERROR_DOC_TEXT_RUN_REQUIRED: 'At least one Text Run is required for each paragraph or bullet',
  ERROR_DOC_TEXT_REQUIRED: 'Text Run text is required',
  ERROR_DOC_FONT_SIZE_REQUIRED: 'Text Run font size is required',
  ERROR_DOC_INVALID_FONT_COLOR_HEX_CODE: 'Text Run font color is an invalid hex code. IT should be 6 digits for RRGGBB',
  ERROR_DOC_IMAGE_LOCATION_REQUIRED: 'Image link is required. A variable as specified below should be used.',
  ERROR_DOC_BOTH_HEIGHT_AND_WIDTH_REQUIRED: 'If specified, both height and width are required. Otherwise, both should be blank.',

  // Image / Video Link Errors
  ERROR_LINK_NOT_HTTPS: 'Insecure URL, use one that starts with https',
  ERROR_IMAGE_LINK_INVALID: 'Image file needs to be of type jpeg, jpg, gif or png',
  ERROR_VIDEO_LINK_INVALID: 'Video URL should be from YouTube (i.e. domains https://youtube.com or https://youtu.be)',

  // Submission File Errors
  ERROR_SUBMISSION_FILE_INVALID: 'Submission file needs to be of type pdf, doc or docx',

  // General File type errors
  ERROR_DOC_FILE_INVALID: 'File needs to be of type pdf, doc or docx',

  // QR Attendance Errors
  ERROR_QR_CHECKOUT_BEFORE_CHECKIN: 'You have not checked in yet!',
  ERROR_QR_ALREADY_CHECKED_IN: 'You have already checked in to this session!',
  ERROR_QR_ALREADY_CHECKED_OUT: 'You have already checked out for this session!',

  // Admin operations errors
  ERROR_USER_GUIDE_EMPTY: 'User guide file name cannot be empty'
};

export default {
  ...FieldRanges,
  ...ErrorConstants
};
