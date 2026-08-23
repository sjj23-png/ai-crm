import type {
  HTMLAttributes,
  Ref,
} from "react";

export interface ProgressProps
  extends HTMLAttributes<HTMLDivElement> {
  value: number;

  max?: number;

  showValue?: boolean;

  animated?: boolean;

  ref?: Ref<HTMLDivElement>;
}