import { forwardRef } from "react";


import { Surface, type SurfaceProps } from "@/design-system/components/layout/Surface";

export interface CardProps extends SurfaceProps {}

export const Card = forwardRef<HTMLDivElement, CardProps>(
    (props, ref) => {
        return (
            <Surface
                ref={ref}
                variant="elevated"
                rounded="xl"
                padding="none"
                {...props}
            />
        );
    }
);

Card.displayName = "Card";

export default Card;