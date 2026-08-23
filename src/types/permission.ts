import type { BaseEntity } from "./common";


export interface Permission extends BaseEntity {
  name: string;

  code: string;

  module: string;

  description?: string;
}