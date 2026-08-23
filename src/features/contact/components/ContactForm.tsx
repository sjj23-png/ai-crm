import { useState, useEffect } from "react";
import { Button } from "@/design-system/components/buttons/Button";
import { Input } from "@/design-system/components/base/Input";
import { Select } from "@/design-system/components/base/Select/Select";
import type { ContactData } from "../api/contact.api";

interface ContactFormProps {
  initialData?: ContactData | null;
  companies: Array<{ id: string; name: string }>;
  onSubmit: (data: ContactData) => Promise<void>;
  onCancel: () => void;
  isSubmitting?: boolean;
}

export function ContactForm({
  initialData,
  companies,
  onSubmit,
  onCancel,
  isSubmitting,
}: ContactFormProps) {
  const [formData, setFormData] = useState<ContactData>({
    companyId: initialData?.companyId || "",
    firstName: initialData?.firstName || "",
    lastName: initialData?.lastName || "",
    email: initialData?.email || "",
    phone: initialData?.phone || "",
    designation: initialData?.designation || "",
    department: initialData?.department || "",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    if (initialData) {
      setFormData({
        companyId: initialData.companyId || "",
        firstName: initialData.firstName || "",
        lastName: initialData.lastName || "",
        email: initialData.email || "",
        phone: initialData.phone || "",
        designation: initialData.designation || "",
        department: initialData.department || "",
      });
    }
  }, [initialData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.companyId || !formData.firstName || !formData.email) {
      setError("Company, First Name, and Email are required.");
      return;
    }

    try {
      setError("");
      await onSubmit(formData);
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || "Failed to save contact.");
    }
  };

  const companyOptions = companies.map((c) => ({ value: c.id, label: c.name }));

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="p-3 text-sm text-red-600 bg-red-50 dark:bg-red-950/40 rounded-md">
          {error}
        </div>
      )}

      <Select
        label="Company *"
        options={companyOptions}
        value={formData.companyId}
        onChange={(val: any) => setFormData((prev) => ({ ...prev, companyId: typeof val === "string" ? val : val?.target?.value || "" }))}
      />

      <div className="grid grid-cols-2 gap-3">
        <Input
          label="First Name *"
          value={formData.firstName}
          onChange={(e) => setFormData((prev) => ({ ...prev, firstName: e.target.value }))}
        />
        <Input
          label="Last Name"
          value={formData.lastName || ""}
          onChange={(e) => setFormData((prev) => ({ ...prev, lastName: e.target.value }))}
        />
      </div>

      <Input
        label="Email Address *"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
      />

      <Input
        label="Phone Number"
        value={formData.phone || ""}
        onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
      />

      <div className="grid grid-cols-2 gap-3">
        <Input
          label="Job Title / Designation"
          value={formData.designation || ""}
          onChange={(e) => setFormData((prev) => ({ ...prev, designation: e.target.value }))}
        />
        <Input
          label="Department"
          value={formData.department || ""}
          onChange={(e) => setFormData((prev) => ({ ...prev, department: e.target.value }))}
        />
      </div>

      <div className="flex justify-end gap-3 pt-4 border-t border-neutral-200 dark:border-neutral-800">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" variant="primary" loading={isSubmitting}>
          {initialData ? "Update Contact" : "Create Contact"}
        </Button>
      </div>
    </form>
  );
}
