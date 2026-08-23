


import type {
    TypographyProps,
} from "./Typography.types";
import { cn } from "@/lib/utils/cn";

import {
    baseClasses,
    variantClasses,
    weightClasses,
} from "./Typography.styles";

export function Typography({
    as,

    variant = "body",

    weight = "regular",

    truncate = false,

    className = "",

    children,

    ref,

    ...props
}: TypographyProps) {

    const defaultTagMap = {
        display: "h1",
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        h5: "h5",
        h6: "h6",
        "body-lg": "p",
        body: "p",
        "body-sm": "p",
        caption: "span",
        label: "label",
    } as const;

    const Component =
        as ??
        defaultTagMap[variant];

    return (
        <Component
            ref={ref}
            className={cn(
                baseClasses,

                variantClasses[variant],

                weightClasses[weight],

                truncate && "truncate",

                className,
            )}
            {...props}
        >
            {children}
        </Component>
    );
}