import { colors } from "../tokens/colors";
import { spacing } from "../tokens/spacing";
import { radius } from "../tokens/radius";
import { shadow } from "../tokens/shadow";
import { typography } from "../tokens/typography";
import { motion } from "../tokens/motion";

import type { Theme } from "./theme.types";

export const darkTheme: Theme = {
  name: "dark",

  colors: colors.dark,

  spacing,

  radius,

  shadow,

  typography,

  motion,
};