import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/design-system/components/base/Input";
import { Button } from "@/design-system/components/buttons/Button";
import { Textarea } from "@/design-system/components/base/Textarea/Textarea";
import { useOrganization } from "../hooks/useOrganization";
import type { Designation } from "../../../types";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  code: z.string().min(2, "Code must be at least 2 characters").max(10).toUpperCase(),
  description: z.string().max(250, "Description cannot exceed 250 characters").optional(),
});

type FormData = z.infer<typeof schema>;

interface DesignationFormProps {
  onClose: () => void;
  initialData?: Designation | null;
}

export function DesignationForm({ onClose, initialData }: DesignationFormProps) {
  const { createDesignation, updateDesignation } = useOrganization();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: initialData?.name ?? "",
      code: initialData?.code ?? "",
      description: initialData?.description ?? "",
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      if (initialData) {
        await updateDesignation({ id: initialData.id, data });
      } else {
        await createDesignation(data);
      }
      onClose();
    } catch (error: any) {
      alert(error.response?.data?.message || error.message || "An error occurred");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
        {initialData ? "Edit Designation" : "Create Designation"}
      </h3>
      
      <Input
        label="Designation Name"
        required
        error={errors.name?.message}
        placeholder="e.g. Sales Manager"
        {...register("name")}
      />

      <Input
        label="Designation Code"
        required
        error={errors.code?.message}
        placeholder="e.g. SM"
        {...register("code")}
      />

      <Textarea
        label="Description"
        error={errors.description?.message}
        placeholder="Brief description of designation duties..."
        {...register("description")}
      />

      <div className="flex justify-end gap-3 mt-6">
        <Button variant="secondary" type="button" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="primary" type="submit" loading={isSubmitting}>
          {initialData ? "Save Changes" : "Create"}
        </Button>
      </div>
    </form>
  );
}
