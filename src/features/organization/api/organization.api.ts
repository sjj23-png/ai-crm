import { apiClient } from "../../../services/api";
import api from "../../../constants/api";
import type {
  Department,
  Designation,
  Team,
  User,
  UpdateUserOrganizationDto,
  UserHierarchyResponse,
} from "../../../types";

export const organizationApi = {
  // Departments CRUD
  getDepartments() {
    return apiClient.get<Department[]>(api.departments);
  },
  getDepartment(id: string) {
    return apiClient.get<Department>(`${api.departments}/${id}`);
  },
  createDepartment(data: { name: string; code: string }) {
    return apiClient.post<Department>(api.departments, data);
  },
  updateDepartment(id: string, data: { name?: string; code?: string }) {
    return apiClient.put<Department>(`${api.departments}/${id}`, data);
  },
  deleteDepartment(id: string) {
    return apiClient.delete(`${api.departments}/${id}`);
  },

  // Designations CRUD
  getDesignations() {
    return apiClient.get<Designation[]>(api.designations);
  },
  getDesignation(id: string) {
    return apiClient.get<Designation>(`${api.designations}/${id}`);
  },
  createDesignation(data: { name: string; code: string; description?: string }) {
    return apiClient.post<Designation>(api.designations, data);
  },
  updateDesignation(id: string, data: { name?: string; code?: string; description?: string }) {
    return apiClient.put<Designation>(`${api.designations}/${id}`, data);
  },
  deleteDesignation(id: string) {
    return apiClient.delete(`${api.designations}/${id}`);
  },

  // Teams CRUD
  getTeams() {
    return apiClient.get<{ success: boolean; data: Team[] }>(api.teams);
  },
  getTeam(id: string) {
    return apiClient.get<{ success: boolean; data: Team }>(`${api.teams}/${id}`);
  },
  createTeam(data: { name: string; code: string; departmentId: string; description?: string; leadId?: string }) {
    return apiClient.post<{ success: boolean; data: Team }>(api.teams, data);
  },
  updateTeam(id: string, data: { name?: string; code?: string; departmentId?: string; description?: string; leadId?: string }) {
    return apiClient.put<{ success: boolean; data: Team }>(`${api.teams}/${id}`, data);
  },
  deleteTeam(id: string) {
    return apiClient.delete<{ success: boolean; message: string }>(`${api.teams}/${id}`);
  },

  // User Assignment & Hierarchy
  getUsers() {
    return apiClient.get<User[]>(api.users);
  },
  assignUserOrganization(userId: string, data: UpdateUserOrganizationDto) {
    return apiClient.put<{ success: boolean; message: string; data: any }>(
      `${api.organizations}/users/${userId}/organization`,
      data
    );
  },
  getUserHierarchy(userId: string) {
    return apiClient.get<{ success: boolean; data: UserHierarchyResponse }>(
      `${api.organizations}/users/${userId}/hierarchy`
    );
  },
};
