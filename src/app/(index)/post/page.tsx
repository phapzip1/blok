import { getBlogs } from "@/lib/blog-utils";
import Link from "next/link";

const PostPage: React.FC = async () => {
    const posts = await getBlogs();
    return (
        <div className="mt-20">
            <div className="flex flex-row justify-between mb-2">
                <h1 className="text-2xl font-semibold">General</h1>
                <h1 className="text-2xl font-semibold">1 Article</h1>
            </div>
            <ul className="grid grid-cols-2">
                {
                    posts.map((metadata) => (
                        <li key={metadata.slug} className="p-4 border-2 border-secondary-foreground">
                            <Link
                                className="hover:underline underline-offset-3 decoration-2 text-2xl font-semibold"
                                href={`/post/${metadata.slug}`}>{metadata.title}
                            </Link>
                            <h3 className="text-xl font-medium text-muted-foreground">{metadata.subtitle}</h3>
                            <p className="my-5">{metadata.createdAt}</p>
                            <Link
                                className="hover:underline underline-offset-3 decoration-2 font-semibold"
                                href={`/post/${metadata.slug}`}>
                                Read more
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default PostPage;