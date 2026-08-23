import type { BaseEntity } from "./common";

export interface Company extends BaseEntity {
  publicId: string;
  tenantId: string;
  name: string;
  industry?: string | null;
  website?: string | null;
  email?: string | null;
  phone?: string | null;
  address?: string | null;
  city?: string | null;
  state?: string | null;
  country?: string | null;
  postalCode?: string | null;
  companySize?: string | null;
  description?: string | null;
  teamId?: string | null;
  ownerId?: string | null;
}