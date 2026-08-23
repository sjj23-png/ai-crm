import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/design-system/components/base/Input";
import { Button } from "@/design-system/components/buttons/Button";
import { Textarea } from "@/design-system/components/base/Textarea/Textarea";
import { Select } from "@/design-system/components/base/Select/Select";
import { useCompany } from "../hooks/useCompany";
import { useOrganization } from "@/features/organization/hooks/useOrganization";
import type { Company } from "../../../types";
import { AlertCircle } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Company name must be at least 2 characters").max(100),
  industry: z.string().optional().nullable().transform(v => v || null),
  website: z.string().optional().nullable().transform(v => v || null),
  email: z.string().optional().nullable().transform(v => v || null),
  phone: z.string().optional().nullable().transform(v => v || null),
  address: z.string().optional().nullable().transform(v => v || null),
  city: z.string().optional().nullable().transform(v => v || null),
  state: z.string().optional().nullable().transform(v => v || null),
  country: z.string().optional().nullable().transform(v => v || null),
  postalCode: z.string().optional().nullable().transform(v => v || null),
  companySize: z.string().optional().nullable().transform(v => v || null),
  description: z.string().optional().nullable().transform(v => v || null),
  teamId: z.string().optional().nullable().transform(v => v || null),
  ownerId: z.string().optional().nullable().transform(v => v || null),
});

type FormData = z.infer<typeof schema>;

interface CompanyFormProps {
  onClose: () => void;
  initialData?: Company | null;
}

export function CompanyForm({ onClose, initialData }: CompanyFormProps) {
  const { createCompany, updateCompany } = useCompany();
  const { teams, users } = useOrganization();
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<any>({
    resolver: zodResolver(schema) as any,
    defaultValues: {
      name: initialData?.name ?? "",
      industry: initialData?.industry ?? "",
      website: initialData?.website ?? "",
      email: initialData?.email ?? "",
      phone: initialData?.phone ?? "",
      address: initialData?.address ?? "",
      city: initialData?.city ?? "",
      state: initialData?.state ?? "",
      country: initialData?.country ?? "",
      postalCode: initialData?.postalCode ?? "",
      companySize: initialData?.companySize ?? "",
      description: initialData?.description ?? "",
      teamId: initialData?.teamId ?? "",
      ownerId: initialData?.ownerId ?? "",
    },
  });

  const onSubmit = async (data: any) => {
    setServerError(null);
    try {
      if (initialData) {
        await updateCompany({ id: initialData.id, data });
      } else {
        await createCompany(data);
      }
      onClose();
    } catch (error: any) {
      const msg = error.response?.data?.message || error.message || "Unable to save company details.";
      setServerError(typeof msg === "string" ? msg : JSON.stringify(msg));
    }
  };

  const companySizes = [
    { value: "1-10", label: "1-10 Employees" },
    { value: "11-50", label: "11-50 Employees" },
    { value: "51-200", label: "51-200 Employees" },
    { value: "201-500", label: "201-500 Employees" },
    { value: "501+", label: "501+ Employees" },
  ];

  const teamOptions = teams.map((t: any) => ({
    value: t.id,
    label: t.code ? `${t.name} (${t.code})` : t.name,
  }));

  const userOptions = users.map((u: any) => ({
    value: u.id,
    label: u.email ? `${u.name} (${u.email})` : u.name,
  }));

  return (
    <form onSubmit={handleSubmit(onSubmit as any)} className="space-y-4 max-h-[75vh] overflow-y-auto pr-2">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 sticky top-0 bg-white dark:bg-slate-900 pb-2 z-10">
        {initialData ? "Edit Company" : "Create Company"}
      </h3>
      
      {serverError && (
        <div className="flex items-center gap-3 p-3.5 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-sm text-red-600 dark:text-red-400">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <div className="flex-1 font-medium">{serverError}</div>
        </div>
      )}

      <Input
        label="Company Name"
        required
        error={errors.name?.message as string | undefined}
        placeholder="e.g. Acme Corp"
        {...register("name")}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Industry"
          error={errors.industry?.message as string | undefined}
          placeholder="e.g. Technology"
          {...register("industry")}
        />
        <Select
          label="Company Size"
          placeholder="Select company size"
          options={companySizes}
          error={errors.companySize?.message as string | undefined}
          {...register("companySize")}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Website"
          error={errors.website?.message as string | undefined}
          placeholder="https://example.com"
          {...register("website")}
        />
        <Input
          label="Email"
          error={errors.email?.message as string | undefined}
          placeholder="contact@company.com"
          {...register("email")}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Phone Number"
          error={errors.phone?.message as string | undefined}
          placeholder="e.g. +123456789"
          {...register("phone")}
        />
        <Input
          label="Postal Code"
          error={errors.postalCode?.message as string | undefined}
          placeholder="e.g. 10001"
          {...register("postalCode")}
        />
      </div>

      <Input
        label="Address"
        error={errors.address?.message as string | undefined}
        placeholder="e.g. 123 Main St"
        {...register("address")}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Input
          label="City"
          error={errors.city?.message as string | undefined}
          placeholder="City"
          {...register("city")}
        />
        <Input
          label="State"
          error={errors.state?.message as string | undefined}
          placeholder="State"
          {...register("state")}
        />
        <Input
          label="Country"
          error={errors.country?.message as string | undefined}
          placeholder="Country"
          {...register("country")}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Select
          label="Assigned Team"
          placeholder="Select team"
          options={teamOptions}
          error={errors.teamId?.message as string | undefined}
          {...register("teamId")}
        />
        <Select
          label="Company Owner"
          placeholder="Select owner"
          options={userOptions}
          error={errors.ownerId?.message as string | undefined}
          {...register("ownerId")}
        />
      </div>

      <Textarea
        label="Description"
        error={errors.description?.message as string | undefined}
        placeholder="Brief description about the company, its focus, etc..."
        {...register("description")}
      />

      <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 sticky bottom-0 bg-white dark:bg-slate-900">
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
