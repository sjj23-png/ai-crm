import { forwardRef } from "react";


import { Text } from "../../Typography/Text";

export interface CardDescriptionProps
    extends React.ComponentProps<typeof Text> {}

export const CardDescription = forwardRef<
    HTMLParagraphElement,
    CardDescriptionProps
>((props, ref) => (
    <Text
        ref={ref}
        tone="secondary"
        size="sm"
        {...props}
    />
));

CardDescription.displayName = "CardDescription";

export default CardDescription;