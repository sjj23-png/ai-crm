import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/design-system/components/base/Input";
import { Button } from "@/design-system/components/buttons/Button";
import { useOrganization } from "../hooks/useOrganization";
import type { Department } from "../../../types";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  code: z.string().min(2, "Code must be at least 2 characters").max(10).toUpperCase(),
});

type FormData = z.infer<typeof schema>;

interface DepartmentFormProps {
  onClose: () => void;
  initialData?: Department | null;
}

export function DepartmentForm({ onClose, initialData }: DepartmentFormProps) {
  const { createDepartment, updateDepartment } = useOrganization();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: initialData?.name ?? "",
      code: initialData?.code ?? "",
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      if (initialData) {
        await updateDepartment({ id: initialData.id, data });
      } else {
        await createDepartment(data);
      }
      onClose();
    } catch (error: any) {
      alert(error.response?.data?.message || error.message || "An error occurred");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
        {initialData ? "Edit Department" : "Create Department"}
      </h3>
      
      <Input
        label="Department Name"
        required
        error={errors.name?.message}
        placeholder="e.g. Sales"
        {...register("name")}
      />

      <Input
        label="Department Code"
        required
        error={errors.code?.message}
        placeholder="e.g. SALES"
        {...register("code")}
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
