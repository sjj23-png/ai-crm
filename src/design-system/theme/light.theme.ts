import { colors } from "../tokens/colors";
import { spacing } from "../tokens/spacing";
import { radius } from "../tokens/radius";
import { shadow } from "../tokens/shadow";
import { typography } from "../tokens/typography";
import { motion } from "../tokens/motion";

import type { Theme } from "./theme.types";

export const lightTheme: Theme = {
  name: "light",

  colors: colors.light,

  spacing,

  radius,

  shadow,

  typography,

  motion,
};