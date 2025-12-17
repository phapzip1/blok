import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";

type DecoratedLinkProps = {
    type?: "left" | "center" | "right";
} & LinkProps & React.ComponentProps<"a">;

const DecoratedLink: React.FC<DecoratedLinkProps> = ({ children, className, type = "left", ...props }) => {
    let position = "left-0";

    switch (type) {
        case "right":
            position = "right-0";
            break;
        case "center":
            position = "left-1/2 -translate-x-1/2";
            break;
        case "left":
        default:
            position = "left-0";
            break;
    }

    return (
        <Link
            className={cn("group relative", className)}
            {...props}
        >
            {children}
            <span className={`absolute group block -bottom-0.5 ${position} dark:bg-white bg-black transition-all h-0.5 w-0 group-hover:w-full`} />
        </Link>
    )
}

export default DecoratedLink;

