export type UUID = string;

export type ID = string;

export type ISODate = string;

export type Status =
  | "ACTIVE"
  | "INACTIVE"
  | "DELETED";

export interface BaseEntity {
  id: ID;

  createdAt: ISODate;

  updatedAt: ISODate;

  status: Status;
}