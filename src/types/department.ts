import type { BaseEntity } from "./common";


export interface Department extends BaseEntity {
  companyId: string;

  name: string;

  code: string;
}