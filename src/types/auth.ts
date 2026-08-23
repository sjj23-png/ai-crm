export interface LoginRequest {
  email: string;

  password: string;
}

export interface AuthUser {
  id: string;

  name: string;

  email: string;

  tenantId: string;

  roleId: string;

  status?: string;
}

export interface LoginResponse {
  accessToken: string;

  refreshToken: string;

  user: AuthUser;
}