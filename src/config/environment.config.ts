const environmentConfig = {
  appName: import.meta.env.VITE_APP_NAME,
  appVersion: import.meta.env.VITE_APP_VERSION,

  apiBaseUrl: import.meta.env.VITE_API_BASE_URL,

  defaultLanguage: import.meta.env.VITE_DEFAULT_LANGUAGE,

  enableAnalytics:
    import.meta.env.VITE_ENABLE_ANALYTICS === "true",

  enableDebug:
    import.meta.env.VITE_ENABLE_DEBUG === "true",
};

export default environmentConfig;