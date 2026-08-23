import { apiClient } from "../../../services/api";
import api from "../../../constants/api";
import type { Company } from "../../../types";

export const companyApi = {
  getCompanies() {
    return apiClient.get<Company[]>(api.companies);
  },
  
  getCompanyById(id: string) {
    return apiClient.get<Company>(`${api.companies}/${id}`);
  },

  createCompany(data: Omit<Company, "id" | "publicId" | "tenantId" | "createdAt" | "updatedAt" | "status">) {
    return apiClient.post<Company>(api.companies, data);
  },

  updateCompany(id: string, data: Partial<Omit<Company, "id" | "publicId" | "tenantId" | "createdAt" | "updatedAt">>) {
    return apiClient.put<Company>(`${api.companies}/${id}`, data);
  },

  deleteCompany(id: string) {
    return apiClient.delete(`${api.companies}/${id}`);
  },
};
