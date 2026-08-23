import { useState } from "react";
import { useCompany } from "@/features/company/hooks/useCompany";
import { useOrganization } from "@/features/organization/hooks/useOrganization";
import { CompanyForm } from "@/features/company/components/CompanyForm";
import { CompanyDetail } from "@/features/company/components/CompanyDetail";
import { Button } from "@/design-system/components/buttons/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/design-system/components/data-display/Card";
import { Input } from "@/design-system/components/base/Input";
import { Select } from "@/design-system/components/base/Select/Select";
import { Plus, Edit2, Trash2, Eye, Globe } from "lucide-react";
import type { Company } from "../../types";

export default function CompaniesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"form" | "detail" | null>(null);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [search, setSearch] = useState("");
  const [industryFilter, setIndustryFilter] = useState("");
  const [sizeFilter, setSizeFilter] = useState("");

  const {
    companies,
    isCompaniesLoading,
    deleteCompany,
  } = useCompany();

  const { users } = useOrganization();

  const handleEdit = (company: Company) => {
    setSelectedCompany(company);
    setModalType("form");
    setModalOpen(true);
  };

  const handleDetail = (company: Company) => {
    setSelectedCompany(company);
    setModalType("detail");
    setModalOpen(true);
  };

  const handleCreate = () => {
    setSelectedCompany(null);
    setModalType("form");
    setModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this company?")) return;
    try {
      await deleteCompany(id);
    } catch (error: any) {
      alert(error.response?.data?.message || error.message || "Deletion failed.");
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalType(null);
    setSelectedCompany(null);
  };

  const getUserName = (id?: string | null) => {
    if (!id) return "Unassigned";
    return users.find((u) => u.id === id)?.name || "Unassigned";
  };

  // Get distinct industries and sizes for filters
  const industries = Array.from(new Set(companies.map((c) => c.industry).filter(Boolean))) as string[];
  const sizes = Array.from(new Set(companies.map((c) => c.companySize).filter(Boolean))) as string[];

  const industryOptions = industries.map((ind) => ({ value: ind, label: ind }));
  const sizeOptions = sizes.map((sz) => ({ value: sz, label: sz }));

  // Filter companies based on search input and filter choices
  const filteredCompanies = companies.filter((c) => {
    const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase()) || 
                          c.publicId.toLowerCase().includes(search.toLowerCase()) ||
                          (c.email && c.email.toLowerCase().includes(search.toLowerCase()));
    
    const matchesIndustry = !industryFilter || c.industry === industryFilter;
    const matchesSize = !sizeFilter || c.companySize === sizeFilter;

    return matchesSearch && matchesIndustry && matchesSize;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between border-b border-neutral-200 dark:border-neutral-800 pb-5">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
            Companies
          </h1>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Manage your client accounts, view details, industry mapping, sizes, and record owners.
          </p>
        </div>
        
        <Button
          variant="primary"
          onClick={handleCreate}
        >
          <Plus size={16} className="mr-1.5 inline-block" /> Create Company
        </Button>
      </div>

      {/* Filters Section */}
      <Card className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
        <CardContent className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input
            placeholder="Search by name, ID, or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Select
            placeholder="Filter by Industry"
            options={industryOptions}
            value={industryFilter}
            onChange={(e) => setIndustryFilter(e.target.value)}
          />
          <Select
            placeholder="Filter by Size"
            options={sizeOptions}
            value={sizeFilter}
            onChange={(e) => setSizeFilter(e.target.value)}
          />
        </CardContent>
      </Card>

      {/* Companies Table */}
      <Card>
        <CardHeader className="p-4 border-b border-neutral-200 dark:border-neutral-800">
          <CardTitle className="text-base font-semibold">Client List ({filteredCompanies.length})</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {isCompaniesLoading ? (
            <div className="flex items-center justify-center p-8">Loading companies...</div>
          ) : filteredCompanies.length === 0 ? (
            <div className="p-8 text-center text-sm text-neutral-500">No companies match the filters.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
                    <th className="p-4 font-semibold text-neutral-600 dark:text-neutral-300">Name</th>
                    <th className="p-4 font-semibold text-neutral-600 dark:text-neutral-300">Industry</th>
                    <th className="p-4 font-semibold text-neutral-600 dark:text-neutral-300">Website</th>
                    <th className="p-4 font-semibold text-neutral-600 dark:text-neutral-300">Size</th>
                    <th className="p-4 font-semibold text-neutral-600 dark:text-neutral-300">Owner</th>
                    <th className="p-4 font-semibold text-neutral-600 dark:text-neutral-300 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                  {filteredCompanies.map((company) => (
                    <tr key={company.id} className="hover:bg-neutral-50/55 dark:hover:bg-neutral-900/30">
                      <td className="p-4">
                        <div className="font-medium text-neutral-900 dark:text-neutral-100">{company.name}</div>
                        <div className="text-xs text-neutral-400 font-semibold">{company.publicId}</div>
                      </td>
                      <td className="p-4 text-neutral-700 dark:text-neutral-300">{company.industry || "-"}</td>
                      <td className="p-4">
                        {company.website ? (
                          <a
                            href={company.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-primary-600 hover:underline"
                          >
                            <Globe size={14} />
                            Link
                          </a>
                        ) : (
                          "-"
                        )}
                      </td>
                      <td className="p-4 text-neutral-700 dark:text-neutral-300">
                        {company.companySize ? (
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
                            {company.companySize}
                          </span>
                        ) : (
                          "-"
                        )}
                      </td>
                      <td className="p-4 font-medium text-primary-600 dark:text-primary-400">{getUserName(company.ownerId)}</td>
                      <td className="p-4 text-right">
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => handleDetail(company)}
                            className="p-1 text-neutral-500 hover:text-primary-600 dark:hover:text-primary-400"
                            title="Inspect Details"
                          >
                            <Eye size={16} />
                          </button>
                          <button
                            onClick={() => handleEdit(company)}
                            className="p-1 text-neutral-500 hover:text-primary-600 dark:hover:text-primary-400"
                            title="Edit"
                          >
                            <Edit2 size={16} />
                          </button>
                          <button
                            onClick={() => handleDelete(company.id)}
                            className="p-1 text-neutral-500 hover:text-red-600 dark:hover:text-red-400"
                            title="Delete"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Modal Dialog */}
      {modalOpen && modalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 w-full max-w-lg shadow-xl relative animate-in fade-in zoom-in-95 duration-200">
            {modalType === "form" && (
              <CompanyForm onClose={closeModal} initialData={selectedCompany} />
            )}
            {modalType === "detail" && selectedCompany && (
              <CompanyDetail companyId={selectedCompany.id} onClose={closeModal} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
