import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { organizationApi } from "../api/organization.api";
import type { UpdateUserOrganizationDto } from "../../../types";

export function useOrganization(userId?: string) {
  const queryClient = useQueryClient();

  // --- DEPARTMENTS ---
  const departmentsQuery = useQuery({
    queryKey: ["departments"],
    queryFn: async () => {
      const response = await organizationApi.getDepartments();
      return response.data;
    },
  });

  const createDepartmentMutation = useMutation({
    mutationFn: (data: { name: string; code: string }) =>
      organizationApi.createDepartment(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["departments"] });
    },
  });

  const updateDepartmentMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: { name?: string; code?: string } }) =>
      organizationApi.updateDepartment(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["departments"] });
    },
  });

  const deleteDepartmentMutation = useMutation({
    mutationFn: (id: string) => organizationApi.deleteDepartment(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["departments"] });
    },
  });

  // --- DESIGNATIONS ---
  const designationsQuery = useQuery({
    queryKey: ["designations"],
    queryFn: async () => {
      const response = await organizationApi.getDesignations();
      return response.data;
    },
  });

  const createDesignationMutation = useMutation({
    mutationFn: (data: { name: string; code: string; description?: string }) =>
      organizationApi.createDesignation(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["designations"] });
    },
  });

  const updateDesignationMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: { name?: string; code?: string; description?: string } }) =>
      organizationApi.updateDesignation(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["designations"] });
    },
  });

  const deleteDesignationMutation = useMutation({
    mutationFn: (id: string) => organizationApi.deleteDesignation(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["designations"] });
    },
  });

  // --- TEAMS ---
  const teamsQuery = useQuery({
    queryKey: ["teams"],
    queryFn: async () => {
      const response = await organizationApi.getTeams();
      const resData = response.data as any;
      if (Array.isArray(resData)) return resData;
      if (Array.isArray(resData?.data)) return resData.data;
      return [];
    },
  });

  const createTeamMutation = useMutation({
    mutationFn: (data: { name: string; code: string; departmentId: string; description?: string; leadId?: string }) =>
      organizationApi.createTeam(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["teams"] });
    },
  });

  const updateTeamMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: { name?: string; code?: string; departmentId?: string; description?: string; leadId?: string } }) =>
      organizationApi.updateTeam(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["teams"] });
    },
  });

  const deleteTeamMutation = useMutation({
    mutationFn: (id: string) => organizationApi.deleteTeam(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["teams"] });
    },
  });

  // --- USER MAPPING & HIERARCHY ---
  const usersQuery = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await organizationApi.getUsers();
      return response.data;
    },
  });

  const userHierarchyQuery = useQuery({
    queryKey: ["user-hierarchy", userId],
    queryFn: async () => {
      if (!userId) return null;
      const response = await organizationApi.getUserHierarchy(userId);
      return response.data.data;
    },
    enabled: !!userId,
  });

  const assignUserOrganizationMutation = useMutation({
    mutationFn: ({ targetUserId, data }: { targetUserId: string; data: UpdateUserOrganizationDto }) =>
      organizationApi.assignUserOrganization(targetUserId, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["user-hierarchy", variables.targetUserId] });
      queryClient.invalidateQueries({ queryKey: ["users"] }); // Also invalidate users query list if it exists
    },
  });

  return {
    departments: departmentsQuery.data ?? [],
    isDepartmentsLoading: departmentsQuery.isLoading,
    createDepartment: createDepartmentMutation.mutateAsync,
    isCreatingDepartment: createDepartmentMutation.isPending,
    updateDepartment: updateDepartmentMutation.mutateAsync,
    deleteDepartment: deleteDepartmentMutation.mutateAsync,

    designations: designationsQuery.data ?? [],
    isDesignationsLoading: designationsQuery.isLoading,
    createDesignation: createDesignationMutation.mutateAsync,
    isCreatingDesignation: createDesignationMutation.isPending,
    updateDesignation: updateDesignationMutation.mutateAsync,
    deleteDesignation: deleteDesignationMutation.mutateAsync,

    teams: teamsQuery.data ?? [],
    isTeamsLoading: teamsQuery.isLoading,
    createTeam: createTeamMutation.mutateAsync,
    isCreatingTeam: createTeamMutation.isPending,
    updateTeam: updateTeamMutation.mutateAsync,
    deleteTeam: deleteTeamMutation.mutateAsync,

    users: usersQuery.data ?? [],
    isUsersLoading: usersQuery.isLoading,

    userHierarchy: userHierarchyQuery.data,
    isUserHierarchyLoading: userHierarchyQuery.isLoading,
    assignUserOrganization: assignUserOrganizationMutation.mutateAsync,
    isAssigningUserOrganization: assignUserOrganizationMutation.isPending,
  };
}
