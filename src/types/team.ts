import type { BaseEntity } from "./common";
import type { User } from "./user";
import type { Department } from "./department";

export interface Team extends BaseEntity {
  tenantId: string;
  departmentId: string;
  department?: Department;
  code: string;
  name: string;
  description?: string;
  leadId?: string;
  lead?: User;
}
