import { forwardRef } from "react";


import { Button, type ButtonProps } from "../Button";

export interface IconButtonProps
  extends Omit<ButtonProps, "size"> {}

export const IconButton = forwardRef<
  HTMLButtonElement,
  IconButtonProps
>((props, ref) => {
  return (
    <Button
      ref={ref}
      size="icon"
      {...props}
    />
  );
});

IconButton.displayName = "IconButton";

export default IconButton;