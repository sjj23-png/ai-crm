export interface PaginationRequest {
  page: number;

  limit: number;

  search?: string;

  sortBy?: string;

  order?: "asc" | "desc";
}

export interface PaginationMeta {
  page: number;

  limit: number;

  total: number;

  totalPages: number;
}