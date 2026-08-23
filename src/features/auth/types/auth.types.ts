



export interface LoginRequest {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface CurrentUser {
  id: string;

  name: string;

  email: string;

  role: string;

  avatar?: string;

  companyId?: string;
}

export interface LoginResponse {
  accessToken: string;

  refreshToken: string;

  user: CurrentUser;
}

export interface MeResponse {
  success: boolean;

  user: CurrentUser;
}













export interface RegisterRequest {
  // Organization
  name: string;
  code?: string;
  email: string;
  phone?: string;
  website?: string;

  // Owner Account
  ownerName: string;
  ownerEmail: string;
  password: string;
  confirmPassword: string;

  // Company Logo
  logo?: File;

  // UI Only
  terms: boolean;
}
export interface RegisterResponse {
  success: boolean;
  message: string;

  tenant: {
    id: string;
    name: string;
    code?: string;
    email: string;
  };

  owner: {
    id: string;
    name: string;
    email: string;
  };
}