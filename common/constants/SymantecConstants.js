import settings from '../../api/config/settings';

const SymantecConstants = {
  // AUTH_2FA_PUSH_URL: 'https://izaac-test.nus.edu.sg/authenticate/1.0/2fa/push',
  // AUTH_2FA_POLL_URL: 'https://izaac-test.nus.edu.sg/authenticate/1.0/2fa/poll',

  AUTH_2FA_PUSH_URL: settings.AUTH_2FA_PUSH_URL,
  AUTH_2FA_POLL_URL: settings.AUTH_2FA_POLL_URL,
  AUTH_2FA_AUTH_URL: settings.AUTH_2FA_AUTH_URL,


  AUTH_2FA_SUCCESS_PUSH: '6040',
  AUTH_2FA_SUCCESS_POLL: '0000',
  AUTH_2FA_APPROVED: '7000',
  AUTH_2FA_IN_PROGRESS: '7001',
  AUTH_2FA_DENIED: '7002',
  AUTH_2FA_CHANGED: '7003',
  AUTH_2FA_EXPIRED: '7004',
  AUTH_2FA_NOT_FOUND: '7005',
  AUTH_2FA_NOT_COMPLETED: '7006',
  AUTH_2FA_ERROR: '7008'
};

export default SymantecConstants;
