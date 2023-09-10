const UIConstants = {
  // SAFE
  SAFE_LAYOUT: 'safe-layout',
  SAFE_LAYOUT_URLS_LOGIN_SELECTION: '/auth/login/selection',
  SAFE_LAYOUT_URLS_LOGIN: '/auth/login',
  SAFE_LAYOUT_URLS_RESET_PASSWORD: '/auth/resetPassword',
  SAFE_LAYOUT_URLS_REGISTER: '/auth/register',
  SAFE_LAYOUT_URLS_LOGIN_ERROR: '/auth/login/error',

  // Sort order
  ASC: 'asc',
  DESC: 'desc',

  // locale
  LOCALE_EN: 'en',

  // Form fields
  // --- Promo emails
  OPTION_PROMO_ALL: 0,
  OPTION_PROMO_TARGETED_ONLY: 1,
  OPTION_PROMO_SIMILAR_INTEREST_ONLY: 2
};

const SAFE_LAYOUT_URLS = [
  UIConstants.SAFE_LAYOUT_URLS_LOGIN_SELECTION,
  UIConstants.SAFE_LAYOUT_URLS_LOGIN,
  UIConstants.SAFE_LAYOUT_URLS_LOGIN_ERROR,
  UIConstants.SAFE_LAYOUT_URLS_RESET_PASSWORD,
  UIConstants.SAFE_LAYOUT_URLS_REGISTER
];

const AUTH_PAGENAMES = {
  [SAFE_LAYOUT_URLS[SAFE_LAYOUT_URLS.indexOf(UIConstants.SAFE_LAYOUT_URLS_LOGIN_SELECTION)]]: 'Login',
  [SAFE_LAYOUT_URLS[SAFE_LAYOUT_URLS.indexOf(UIConstants.SAFE_LAYOUT_URLS_LOGIN)]]: 'Non-NUS User Login',
  [SAFE_LAYOUT_URLS[SAFE_LAYOUT_URLS.indexOf(UIConstants.SAFE_LAYOUT_URLS_LOGIN_ERROR)]]: 'Login Error',
  [SAFE_LAYOUT_URLS[SAFE_LAYOUT_URLS.indexOf(UIConstants.SAFE_LAYOUT_URLS_RESET_PASSWORD)]]: 'Reset Password',
  [SAFE_LAYOUT_URLS[SAFE_LAYOUT_URLS.indexOf(UIConstants.SAFE_LAYOUT_URLS_REGISTER)]]: 'Register'
};

const TableFields = {
  ID_FIELD: '_id',
  CODE_FIELD: 'code',
  NAME_FIELD: 'name',
  CREATOR_NAME_FIELD: 'creator.name',
  CREATOR_EMAIL_FIELD: 'creator.email',
  CREATED_DATE_FIELD: 'createdDate',
  ACTION_FIELD: 'action',

};

const TableClass = {
  TRACK_CODE: 'track-code',
  TRACK_TITLE: 'track-title',
  TRACK_DATE: 'track-date',
  TRACK_ACTION: 'track-action'

};

export default {
  ...UIConstants,
  SAFE_LAYOUT_URLS,
  AUTH_PAGENAMES,
  ...TableFields,
  ...TableClass
};
