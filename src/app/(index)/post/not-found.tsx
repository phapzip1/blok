import { buttonVariant } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const PostNotFound: React.FC = () => {
    return (
        <div className="flex flex-col gap-6 justify-center md:items-center min-h-screen px-4 md:px-0">
            <div className="size-50 relative self-center-safe">
                <Image src="/notfound-post.jpg" alt="Not Found Image" fill className="object-contain" />
            </div>
            <h1 className="text-7xl font-bold">Post Not Found</h1>
            <h3 className="text-lg font-medium text-muted">You are trying to reach non-existing post</h3>
            <Link href="/post" className={buttonVariant()}>See my available posts</Link>
        </div>
    );
}

export default PostNotFound;
