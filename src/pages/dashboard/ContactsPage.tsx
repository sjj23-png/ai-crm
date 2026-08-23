import { useState } from "react";
import { useContact } from "@/features/contact/hooks/useContact";
import { useCompany } from "@/features/company/hooks/useCompany";
import { ContactForm } from "@/features/contact/components/ContactForm";
import { Button } from "@/design-system/components/buttons/Button";
import { Card, CardContent } from "@/design-system/components/data-display/Card";
import { Input } from "@/design-system/components/base/Input";
import { Plus, Edit2, Trash2, Mail, Phone, Building } from "lucide-react";
import type { ContactData } from "@/features/contact/api/contact.api";

export default function ContactsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState<ContactData | null>(null);
  const [search, setSearch] = useState("");

  const { contacts, isContactsLoading, createContact, updateContact, deleteContact, isSubmitting } =
    useContact();
  const { companies } = useCompany();

  const handleCreate = () => {
    setSelectedContact(null);
    setModalOpen(true);
  };

  const handleEdit = (contact: ContactData) => {
    setSelectedContact(contact);
    setModalOpen(true);
  };

  const handleDelete = async (id?: string) => {
    if (!id) return;
    if (!window.confirm("Are you sure you want to delete this contact?")) return;
    try {
      await deleteContact(id);
    } catch (error: any) {
      alert(error.response?.data?.message || error.message || "Deletion failed.");
    }
  };

  const handleFormSubmit = async (data: ContactData) => {
    if (selectedContact?.id) {
      await updateContact({ id: selectedContact.id, data });
    } else {
      await createContact(data);
    }
    setModalOpen(false);
    setSelectedContact(null);
  };

  const filteredContacts = contacts.filter((c: any) => {
    const fullName = `${c.firstName} ${c.lastName || ""}`.toLowerCase();
    const searchLower = search.toLowerCase();
    return (
      fullName.includes(searchLower) ||
      c.email.toLowerCase().includes(searchLower) ||
      (c.phone && c.phone.includes(searchLower))
    );
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between border-b border-neutral-200 dark:border-neutral-800 pb-5">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
            Contacts
          </h1>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Manage individual client contacts, emails, phone numbers, and associated companies.
          </p>
        </div>

        <Button variant="primary" onClick={handleCreate} className="flex items-center gap-2">
          <Plus size={16} /> Add Contact
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <Input
          placeholder="Search contacts by name, email, or phone..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-md"
        />
      </div>

      {isContactsLoading ? (
        <div className="p-8 text-center text-neutral-500">Loading contacts...</div>
      ) : filteredContacts.length === 0 ? (
        <Card>
          <CardContent className="p-8 text-center text-neutral-500">
            No contacts found. Click "Add Contact" to create your first client contact.
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredContacts.map((contact: any) => (
            <Card key={contact.id} className="hover:border-neutral-400 transition-colors">
              <CardContent className="p-5 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg text-neutral-900 dark:text-neutral-100">
                      {contact.firstName} {contact.lastName}
                    </h3>
                    {contact.designation && (
                      <p className="text-xs text-neutral-500">{contact.designation}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => handleEdit(contact)}
                      className="p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded"
                    >
                      <Edit2 size={15} className="text-neutral-600 dark:text-neutral-400" />
                    </button>
                    <button
                      onClick={() => handleDelete(contact.id)}
                      className="p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded"
                    >
                      <Trash2 size={15} className="text-red-500" />
                    </button>
                  </div>
                </div>

                <div className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                  <div className="flex items-center gap-2">
                    <Mail size={14} className="text-neutral-400" />
                    <span>{contact.email}</span>
                  </div>
                  {contact.phone && (
                    <div className="flex items-center gap-2">
                      <Phone size={14} className="text-neutral-400" />
                      <span>{contact.phone}</span>
                    </div>
                  )}
                  {contact.company && (
                    <div className="flex items-center gap-2">
                      <Building size={14} className="text-neutral-400" />
                      <span>{contact.company.name}</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-lg bg-white dark:bg-neutral-900 rounded-xl p-6 shadow-xl border border-neutral-200 dark:border-neutral-800">
            <h2 className="text-xl font-bold mb-4">
              {selectedContact ? "Edit Contact" : "Create New Contact"}
            </h2>
            <ContactForm
              initialData={selectedContact}
              companies={companies}
              onSubmit={handleFormSubmit}
              onCancel={() => setModalOpen(false)}
              isSubmitting={isSubmitting}
            />
          </div>
        </div>
      )}
    </div>
  );
}
