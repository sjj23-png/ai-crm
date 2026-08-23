import { apiClient } from "@/services/api";

export interface ContactData {
  id?: string;
  publicId?: string;
  companyId: string;
  firstName: string;
  lastName?: string;
  email: string;
  phone?: string;
  designation?: string;
  department?: string;
  status?: string;
}

export const contactApi = {
  getAll() {
    return apiClient.get("/contacts");
  },
  getById(id: string) {
    return apiClient.get(`/contacts/${id}`);
  },
  getByCompany(companyId: string) {
    return apiClient.get(`/contacts/company/${companyId}`);
  },
  create(data: ContactData) {
    return apiClient.post("/contacts", data);
  },
  update(id: string, data: Partial<ContactData>) {
    return apiClient.put(`/contacts/${id}`, data);
  },
  delete(id: string) {
    return apiClient.delete(`/contacts/${id}`);
  },
};
