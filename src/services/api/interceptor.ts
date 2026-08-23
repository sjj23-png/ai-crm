
import type { AxiosError, InternalAxiosRequestConfig } from "axios";


import storageService from "../storage";
import { apiClient } from "./client";

apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = storageService.getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);

apiClient.interceptors.response.use(
  (response) => response,

  async (error: AxiosError) => {
    if (error.response?.status === 401) {
      /**
       * Future:
       * Refresh session
       * Logout
       * Redirect
       */
    }

    if (error.response?.status === 403) {
      /**
       * Future:
       * Redirect to 403 page
       */
    }

    return Promise.reject(error);
  },
);

export default apiClient;