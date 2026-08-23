import { forwardRef } from "react";


import { Heading } from "../../Typography/Heading";

export interface CardTitleProps
    extends React.ComponentProps<typeof Heading> {}

export const CardTitle = forwardRef<
    HTMLHeadingElement,
    CardTitleProps
>((props, ref) => (
    <Heading
        ref={ref}
        as="h3"
        level="h5"
        {...props}
    />
));

CardTitle.displayName = "CardTitle";

export default CardTitle;