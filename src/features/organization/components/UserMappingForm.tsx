import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/design-system/components/buttons/Button";
import { Select } from "@/design-system/components/base/Select/Select";
import { useOrganization } from "../hooks/useOrganization";
import type { User } from "../../../types";

const schema = z.object({
  departmentId: z.string().optional().nullable().transform(val => val || null),
  designationId: z.string().optional().nullable().transform(val => val || null),
  teamId: z.string().optional().nullable().transform(val => val || null),
  managerId: z.string().optional().nullable().transform(val => val || null),
});

type FormData = z.infer<typeof schema>;

interface UserMappingFormProps {
  onClose: () => void;
  user: User;
}

export function UserMappingForm({ onClose, user }: UserMappingFormProps) {
  const { assignUserOrganization, departments, designations, teams, users } = useOrganization();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<any>({
    resolver: zodResolver(schema) as any,
    defaultValues: {
      departmentId: user.departmentId ?? "",
      designationId: user.designationId ?? "",
      teamId: user.teamId ?? "",
      managerId: user.managerId ?? "",
    },
  });

  const onSubmit = async (data: any) => {
    try {
      await assignUserOrganization({
        targetUserId: user.id,
        data,
      });
      onClose();
    } catch (error: any) {
      alert(error.response?.data?.message || error.message || "An error occurred");
    }
  };

  const departmentOptions = departments.map((d: any) => ({
    value: d.id,
    label: `${d.name} (${d.code})`,
  }));

  const designationOptions = designations.map((d: any) => ({
    value: d.id,
    label: `${d.name} (${d.code})`,
  }));

  const teamOptions = teams.map((t: any) => ({
    value: t.id,
    label: `${t.name} (${t.code})`,
  }));

  // Exclude current user from manager list to prevent reporting cycles
  const managerOptions = users
    .filter((u: any) => u.id !== user.id)
    .map((u: any) => ({
      value: u.id,
      label: `${u.name} (${u.email})`,
    }));

  return (
    <form onSubmit={handleSubmit(onSubmit as any)} className="space-y-4">
      <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
        Update Organization Settings: <span className="text-primary-600 font-bold">{user.name}</span>
      </h3>
      
      <Select
        label="Department"
        placeholder="Unassigned"
        options={departmentOptions}
        error={errors.departmentId?.message as string | undefined}
        {...register("departmentId")}
      />

      <Select
        label="Designation"
        placeholder="Unassigned"
        options={designationOptions}
        error={errors.designationId?.message as string | undefined}
        {...register("designationId")}
      />

      <Select
        label="Team"
        placeholder="Unassigned"
        options={teamOptions}
        error={errors.teamId?.message as string | undefined}
        {...register("teamId")}
      />

      <Select
        label="Reporting Manager"
        placeholder="Unassigned (Top Level)"
        options={managerOptions}
        error={errors.managerId?.message as string | undefined}
        {...register("managerId")}
      />

      <div className="flex justify-end gap-3 mt-6">
        <Button variant="secondary" type="button" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="primary" type="submit" loading={isSubmitting}>
          Save Settings
        </Button>
      </div>
    </form>
  );
}
