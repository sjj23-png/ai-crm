import type {
  HTMLAttributes,
  Ref,
} from "react";

export type AvatarSize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl";

export type AvatarStatus =
  | "online"
  | "offline"
  | "busy"
  | "away"
  | "none";

export interface AvatarProps
  extends HTMLAttributes<HTMLDivElement> {
  src?: string;

  alt?: string;

  name?: string;

  size?: AvatarSize;

  rounded?: boolean;

  status?: AvatarStatus;

  ref?: Ref<HTMLDivElement>;
}