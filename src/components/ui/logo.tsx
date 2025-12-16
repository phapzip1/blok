import Link from "next/link";
import Image from "next/image";

const Logo: React.FC = () => {
    return (
        <Link href="/" className="flex flex-row rounded-md items-center-safe justify-center min-w-50 gap-3 py-1 bg-background-light">
            <p className="text-xl font-bold">Yellow Banana</p>
            <Image src="/banana.svg" alt="logo" width={32} height={32} />
        </Link>
    );
}

export default Logo;