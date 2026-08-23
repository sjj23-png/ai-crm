import type { PaginationMeta } from "./pagination";


export interface ApiResponse<T> {
  success: boolean;

  message: string;

  data: T;
}

export interface ApiListResponse<T> {
  success: boolean;

  message: string;

  data: T[];

  pagination: PaginationMeta;
}

export interface ApiErrorResponse {
  success: false;

  message: string;

  errors?: Record<string, string[]>;
}