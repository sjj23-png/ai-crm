import type { BaseEntity } from "./common";

export interface Designation extends BaseEntity {
  tenantId: string;
  name: string;
  code: string;
  description?: string;
}
