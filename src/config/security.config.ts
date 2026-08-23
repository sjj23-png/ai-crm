const securityConfig = {
  jwtStorageKey: "crm_access_token",

  refreshTokenKey: "crm_refresh_token",

  csrfHeader: "X-CSRF-Token",

  authorizationHeader: "Authorization",

  bearerPrefix: "Bearer",

  sessionTimeout: 30 * 60 * 1000,

  idleTimeout: 15 * 60 * 1000,

  maxLoginAttempts: 5,

  enableAutoLogout: true,

  enableAuditLogging: true,

  enableRouteProtection: true,
};

export default securityConfig;