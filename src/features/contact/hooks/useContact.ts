import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { contactApi, type ContactData } from "../api/contact.api";

export function useContact() {
  const queryClient = useQueryClient();

  const {
    data: contacts = [],
    isLoading: isContactsLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["contacts"],
    queryFn: async () => {
      const res = await contactApi.getAll();
      return res.data;
    },
  });

  const createMutation = useMutation({
    mutationFn: (data: ContactData) => contactApi.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<ContactData> }) =>
      contactApi.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => contactApi.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
    },
  });

  return {
    contacts,
    isContactsLoading,
    error,
    refetch,
    createContact: createMutation.mutateAsync,
    updateContact: updateMutation.mutateAsync,
    deleteContact: deleteMutation.mutateAsync,
    isSubmitting: createMutation.isPending || updateMutation.isPending,
  };
}
