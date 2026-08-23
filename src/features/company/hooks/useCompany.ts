import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { companyApi } from "../api/company.api";
import type { Company } from "../../../types";

export function useCompany(companyId?: string) {
  const queryClient = useQueryClient();

  const companiesQuery = useQuery({
    queryKey: ["companies"],
    queryFn: async () => {
      const response = await companyApi.getCompanies();
      return response.data;
    },
  });

  const companyQuery = useQuery({
    queryKey: ["company", companyId],
    queryFn: async () => {
      if (!companyId) return null;
      const response = await companyApi.getCompanyById(companyId);
      return response.data;
    },
    enabled: !!companyId,
  });

  const createCompanyMutation = useMutation({
    mutationFn: (data: Omit<Company, "id" | "publicId" | "tenantId" | "createdAt" | "updatedAt" | "status">) =>
      companyApi.createCompany(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["companies"] });
    },
  });

  const updateCompanyMutation = useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Partial<Omit<Company, "id" | "publicId" | "tenantId" | "createdAt" | "updatedAt">>;
    }) => companyApi.updateCompany(id, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["companies"] });
      queryClient.invalidateQueries({ queryKey: ["company", variables.id] });
    },
  });

  const deleteCompanyMutation = useMutation({
    mutationFn: (id: string) => companyApi.deleteCompany(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["companies"] });
    },
  });

  return {
    companies: companiesQuery.data ?? [],
    isCompaniesLoading: companiesQuery.isLoading,
    
    company: companyQuery.data,
    isCompanyLoading: companyQuery.isLoading,

    createCompany: createCompanyMutation.mutateAsync,
    isCreatingCompany: createCompanyMutation.isPending,

    updateCompany: updateCompanyMutation.mutateAsync,
    isUpdatingCompany: updateCompanyMutation.isPending,

    deleteCompany: deleteCompanyMutation.mutateAsync,
    isDeletingCompany: deleteCompanyMutation.isPending,
  };
}
