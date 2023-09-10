const AdfsConstants = {
  // Claims
  NAME_CLAIM: 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname',
  EMAIL_CLAIM:
    'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress',
  DOMAIN_CLAIM: 'http://schemas.nus.edu.sg/ws/2015/07/identity/claims/domain',
  ID_CLAIM: 'nameID',

  // Extensions
  EXT_STUDENT: 'NUSSTU',
  EXT_STAFF: 'NUSSTF',
  EXT_EXTERNAL: 'NUSEXT'
};

export default AdfsConstants;
