import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/design-system/components/base/Input";
import { Button } from "@/design-system/components/buttons/Button";
import { Textarea } from "@/design-system/components/base/Textarea/Textarea";
import { Select } from "@/design-system/components/base/Select/Select";
import { useOrganization } from "../hooks/useOrganization";
import type { Team } from "../../../types";
import { AlertCircle } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  code: z.string().trim().min(2, "Code must be at least 2 characters").max(10).toUpperCase(),
  departmentId: z.string().optional().nullable().transform(v => v || undefined),
  description: z.string().max(250, "Description cannot exceed 250 characters").optional(),
  leadId: z.string().optional().nullable().transform(v => v || undefined),
});

type FormData = z.infer<typeof schema>;

interface TeamFormProps {
  onClose: () => void;
  initialData?: Team | null;
}

export function TeamForm({ onClose, initialData }: TeamFormProps) {
  const { createTeam, updateTeam, departments, users } = useOrganization();
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<any>({
    resolver: zodResolver(schema) as any,
    defaultValues: {
      name: initialData?.name ?? "",
      code: initialData?.code ?? "",
      departmentId: initialData?.departmentId ?? "",
      description: initialData?.description ?? "",
      leadId: initialData?.leadId ?? "",
    },
  });

  const onSubmit = async (data: any) => {
    setServerError(null);
    try {
      const payload = {
        ...data,
        leadId: data.leadId || undefined,
        departmentId: data.departmentId || undefined,
      };

      if (initialData) {
        await updateTeam({ id: initialData.id, data: payload as any });
      } else {
        await createTeam(payload as any);
      }
      onClose();
    } catch (error: any) {
      const msg = error.response?.data?.message || error.message || "An error occurred while saving team";
      setServerError(typeof msg === "string" ? msg : JSON.stringify(msg));
    }
  };

  const departmentOptions = departments.map((d) => ({
    value: d.id,
    label: `${d.name} (${d.code})`,
  }));

  const leadOptions = users.map((u) => ({
    value: u.id,
    label: `${u.name} (${u.email})`,
  }));

  return (
    <form onSubmit={handleSubmit(onSubmit as any)} className="space-y-4">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
        {initialData ? "Edit Team" : "Create Team"}
      </h3>
      
      {serverError && (
        <div className="flex items-center gap-3 p-3.5 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-sm text-red-600 dark:text-red-400">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <div className="flex-1 font-medium">{serverError}</div>
        </div>
      )}

      <Input
        label="Team Name"
        required
        error={errors.name?.message as string | undefined}
        placeholder="e.g. Inbound Sales"
        {...register("name")}
      />

      <Input
        label="Team Code"
        required
        error={errors.code?.message as string | undefined}
        placeholder="e.g. INBSALES"
        {...register("code")}
      />

      <Select
        label="Department (Optional)"
        placeholder="Select a department"
        options={departmentOptions}
        error={errors.departmentId?.message as string | undefined}
        {...register("departmentId")}
      />

      <Select
        label="Team Lead (Optional)"
        placeholder="Select a team lead"
        options={leadOptions}
        error={errors.leadId?.message as string | undefined}
        {...register("leadId")}
      />

      <Textarea
        label="Description"
        error={errors.description?.message as string | undefined}
        placeholder="Brief description of team responsibilities..."
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
