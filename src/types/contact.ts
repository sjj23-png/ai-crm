import type { BaseEntity } from "./common";

export interface Contact extends Omit<BaseEntity, "status"> {
  publicId: string;
  tenantId: string;
  companyId: string;
  firstName: string;
  lastName?: string | null;
  email: string;
  phone?: string | null;
  designation?: string | null;
  department?: string | null;
  source?: string | null;
  address?: string | null;
  city?: string | null;
  state?: string | null;
  country?: string | null;
  postalCode?: string | null;
  notes?: string | null;
  ownerId?: string | null;
  teamId?: string | null;
  status: string;
}
