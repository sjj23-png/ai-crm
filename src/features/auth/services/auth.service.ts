/**
 * ============================================================================
 * FILE ROLE: Frontend Auth Service
 * 
 * CONNECTED FILES:
 *  - Called by / Imported in: useLogin.ts, useAuth.ts, AuthContext.tsx
 *  - Calls / Imports: auth.api.ts (authApi), storage.service.ts (storageService), auth.types.ts
 * 
 * DATA FLOW:
 *  - Inputs: LoginRequest payload ({ email, password, rememberMe })
 *  - Outputs: LoginResponse object ({ accessToken, refreshToken, user }), stores tokens in localStorage
 * ============================================================================
 */

import storageService from "@/services/storage";

import authApi from "../api";

import type {
  LoginRequest,
  LoginResponse,
  AuthUser,
} from "@/types";

class AuthService {
  async login(
    payload: LoginRequest,
  ): Promise<LoginResponse> {

    const response = await authApi.loginApi(payload);

    storageService.setAccessToken(
      response.data.accessToken,
    );

    storageService.setRefreshToken(
      response.data.refreshToken,
    );

    storageService.set(
      "crm_user",
      response.data.user,
    );

    return response.data;
  }

  async logout(): Promise<void> {
    try {
      await authApi.logoutApi();
    } finally {
      storageService.removeAccessToken();

      storageService.removeRefreshToken();

      storageService.remove("crm_user");

      storageService.remove("crm_permissions");
    }
  }

  getUser(): AuthUser | null {
    return storageService.get<AuthUser>("crm_user");
  }

  async me(): Promise<AuthUser> {
    const response = await authApi.me();
    storageService.set("crm_user", response.data);
    return response.data;
  }

  async getCurrentUser(): Promise<AuthUser> {
    return this.me();
  }

  isAuthenticated(): boolean {
    return !!storageService.getAccessToken();
  }
}

const authService = new AuthService();

export default authService;