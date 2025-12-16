import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariant = cva(
    "inline-flex items-center justify-center gap-2 w-fit",
    {
        variants: {
            variant: {
                primary: "bg-background-dark dark:bg-background-light",
                secondary: "",
            },
            size: {
                sm: "h-8 rounded-md gap-1.5 py-1 px-3",
                md: "h-9 rounded-md gap-1.5 py-2 px-4",
                lg: "h-10 rounded-md gap-1.5 py-3 px-5",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
        }
    }
);

const Button: React.FC<
    React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariant>
> = ({
    className,
    variant = "primary",
    size = "md",
    ...props
}) => {
        return (
            <button
                data-slot="button"
                data-variant={variant}
                data-size={size}
                className={cn(buttonVariant({ variant, size, className }))}
                {...props}
            />
        );
    }

export default Button;
export {
    buttonVariant,
}
