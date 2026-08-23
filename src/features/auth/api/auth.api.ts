import {apiClient} from "../../../services/api";

import api from "../../../constants/api";

import type { LoginRequest } from "@/types";
import type { RegisterRequest } from "../types/auth.types";











const authApi = {
  registerApi(data: RegisterRequest) {
    return apiClient.post(api.auth.register, data);
  },

  loginApi(data: LoginRequest) {
    return apiClient.post(api.auth.login, data)
  },

  logoutApi() {
    return apiClient.post(api.auth.logout);
  },

  me() {
    return apiClient.get(api.auth.me);
  },

  // refresh(data: RefreshTokenRequest) {
  //   return apiClient.post(api.auth.refresh, data);
  // },
};

export default authApi;