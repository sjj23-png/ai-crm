import { useCompany } from "../hooks/useCompany";
import { useOrganization } from "@/features/organization/hooks/useOrganization";
import { Spinner } from "@/design-system/components/feedback/Spinner";
import { Card, CardContent } from "@/design-system/components/data-display/Card";
import {
  Globe,
  Mail,
  Phone,
  MapPin,
  Building,
  Briefcase,
  Users,
  ShieldAlert,
  Calendar,
} from "lucide-react";

interface CompanyDetailProps {
  companyId: string;
  onClose: () => void;
}

export function CompanyDetail({ companyId, onClose }: CompanyDetailProps) {
  const { company, isCompanyLoading } = useCompany(companyId);
  const { users, teams } = useOrganization();

  // Resolve assigned user/team names
  const ownerName = users.find((u: any) => u.id === company?.ownerId)?.name || "Unassigned";
  const teamName = teams.find((t: any) => t.id === company?.teamId)?.name || "Unassigned";

  if (isCompanyLoading) {
    return (
      <div className="flex flex-col items-center justify-center p-12">
        <Spinner size="lg" />
        <p className="text-sm text-neutral-500 mt-2">Loading company details...</p>
      </div>
    );
  }

  if (!company) {
    return (
      <div className="p-6 text-center">
        <ShieldAlert size={40} className="mx-auto text-red-500 mb-2" />
        <h4 className="font-semibold text-neutral-900">Company Not Found</h4>
        <p className="text-sm text-neutral-500 mt-1">This record might have been deleted.</p>
      </div>
    );
  }

  const formatAddress = () => {
    const parts = [company.address, company.city, company.state, company.country, company.postalCode];
    return parts.filter(Boolean).join(", ") || "No address provided";
  };

  return (
    <div className="space-y-6 max-h-[75vh] overflow-y-auto pr-2">
      {/* Header */}
      <div className="border-b border-neutral-200 dark:border-neutral-800 pb-4 sticky top-0 bg-white dark:bg-neutral-900 z-10">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-50">
              {company.name}
            </h2>
            <span className="inline-flex mt-1 items-center px-2 py-0.5 rounded text-xs font-semibold bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300">
              {company.publicId}
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 font-bold"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Body Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">
            Contact Information
          </h3>

          <div className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
            <Globe size={16} className="text-neutral-400 shrink-0" />
            {company.website ? (
              <a
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:underline text-sm truncate"
              >
                {company.website}
              </a>
            ) : (
              <span className="text-sm text-neutral-400">No website</span>
            )}
          </div>

          <div className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
            <Mail size={16} className="text-neutral-400 shrink-0" />
            {company.email ? (
              <a href={`mailto:${company.email}`} className="text-sm text-neutral-600 hover:underline truncate">
                {company.email}
              </a>
            ) : (
              <span className="text-sm text-neutral-400">No email</span>
            )}
          </div>

          <div className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
            <Phone size={16} className="text-neutral-400 shrink-0" />
            {company.phone ? (
              <span className="text-sm">{company.phone}</span>
            ) : (
              <span className="text-sm text-neutral-400">No phone</span>
            )}
          </div>

          <div className="flex items-start gap-3 text-neutral-700 dark:text-neutral-300 pt-2 border-t border-neutral-100 dark:border-neutral-800">
            <MapPin size={16} className="text-neutral-400 shrink-0 mt-0.5" />
            <span className="text-sm">{formatAddress()}</span>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">
            Meta Parameters
          </h3>

          <div className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
            <Building size={16} className="text-neutral-400 shrink-0" />
            <span className="text-sm font-medium">Industry:</span>
            <span className="text-sm">{company.industry || "Unspecified"}</span>
          </div>

          <div className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
            <Briefcase size={16} className="text-neutral-400 shrink-0" />
            <span className="text-sm font-medium">Company Size:</span>
            <span className="text-sm">{company.companySize || "Unspecified"}</span>
          </div>

          <div className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
            <Users size={16} className="text-neutral-400 shrink-0" />
            <span className="text-sm font-medium">Owner:</span>
            <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
              {ownerName}
            </span>
          </div>

          <div className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
            <Briefcase size={16} className="text-neutral-400 shrink-0" />
            <span className="text-sm font-medium">Assigned Team:</span>
            <span className="text-sm">{teamName}</span>
          </div>

          <div className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300 pt-2 border-t border-neutral-100 dark:border-neutral-800">
            <Calendar size={16} className="text-neutral-400 shrink-0" />
            <span className="text-sm font-medium">Added on:</span>
            <span className="text-sm">
              {new Date(company.createdAt).toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
        </div>
      </div>

      {/* Description */}
      {company.description && (
        <Card className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 mt-4">
          <CardContent className="p-4">
            <h4 className="text-sm font-bold text-neutral-900 dark:text-neutral-100 mb-1">
              Description / Notes
            </h4>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed whitespace-pre-wrap">
              {company.description}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
