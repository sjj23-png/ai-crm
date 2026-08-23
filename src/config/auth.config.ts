const authConfig = {
  loginRoute: "/login",

  dashboardRoute: "/dashboard",

  unauthorizedRoute: "/403",

  forbiddenRoute: "/403",

  notFoundRoute: "/404",

  tokenRefreshInterval: 10 * 60 * 1000,

  rememberMeDuration: 30,
};

export default authConfig;