import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Image from "next/image";

const Logo: React.FC = () => {
    return (
        <Link href="/" className={buttonVariants({ variant: "secondary", className: "flex flex-row items-center gap-2" })}>
            <p className="text-xl">Yellow Banana</p>
            <Image src="/banana.svg" alt="logo" width={32} height={32} />
        </Link>
    );
}

export default Logo;