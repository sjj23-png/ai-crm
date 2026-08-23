



export const ApiEndpoints = {
  auth: {
    login: "/auth/login",
    logout: "/auth/logout",
    me: "/auth/me",
    refresh: "/auth/refresh",
    forgotPassword: "/auth/forgot-password",
    resetPassword: "/auth/reset-password",
    verifyOtp: "/auth/verify-otp",
  },

  users: {
    list: "/users",
    create: "/users",
    byId: (id: string) => `/users/${id}`,
  },

  roles: {
    list: "/roles",
    create: "/roles",
    byId: (id: string) => `/roles/${id}`,
  },

  permissions: {
    list: "/permissions",
  },

  companies: {
    list: "/companies",
    create: "/companies",
    byId: (id: string) => `/companies/${id}`,
  },

  departments: {
    list: "/departments",
    create: "/departments",
    byId: (id: string) => `/departments/${id}`,
  },
} as const;

export type ApiEndpointsType = typeof ApiEndpoints;