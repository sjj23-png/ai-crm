import type { BaseEntity } from "./common";


export interface User extends BaseEntity {
  name: string;

  email: string;

  role: any;

  roleId?: string;

  departmentId?: string | null;

  designationId?: string | null;

  teamId?: string | null;

  managerId?: string | null;
}