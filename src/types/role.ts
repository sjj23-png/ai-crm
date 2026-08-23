import type { BaseEntity } from "./common";


export interface Role extends BaseEntity {
  name: string;

  code: string;

  description?: string;
}

export interface AssignPermissionRequest {
  roleId: string;

  permissionIds: string[];
}