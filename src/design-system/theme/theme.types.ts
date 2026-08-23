import type { colors } from "../tokens/colors";
import type { spacing } from "../tokens/spacing";
import type { radius } from "../tokens/radius";
import type { shadow } from "../tokens/shadow";
import type { typography } from "../tokens/typography";
import type { motion } from "../tokens/motion";

export interface Theme {
  name: "light" | "dark";

  colors: Record<keyof typeof colors.light, string>;

  spacing: typeof spacing;

  radius: typeof radius;

  shadow: typeof shadow;

  typography: typeof typography;

  motion: typeof motion;
}