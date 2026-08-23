import { forwardRef } from "react";


import { Flex, type FlexProps } from "../Flex";

export interface StackProps
  extends Omit<FlexProps, "direction"> {}

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  (props, ref) => {
    return (
      <Flex
        ref={ref}
        direction="column"
        {...props}
      />
    );
  }
);

Stack.displayName = "Stack";

export default Stack;