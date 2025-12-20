import Image from "next/image";
import Link from "next/link";
import { buttonVariant } from "@/components/ui/button";

const NotFoundIndex: React.FC = () => {
    return (
        <div className="flex flex-col gap-6 justify-center md:items-center min-h-screen px-4 md:px-0">
            <div className="size-50 relative self-center-safe">
                <Image src="/notfound.png" alt="Not Found Image" fill className="object-contain" />
            </div>
            <h1 className="text-7xl font-bold">Page Not Found</h1>
            <h3 className="text-lg font-medium text-muted">The page you are looking for doesn't exist or has been moved</h3>
            <Link href="/" className={buttonVariant()}>Return Home</Link>
        </div>
    );
}

export default NotFoundIndex;
