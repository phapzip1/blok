import { getAllPosts } from "@/lib/blogs";
import DecoratedLink from "./decorated-link";

const BlogList: React.FC = async () => {
    const posts = await getAllPosts();
    
    return (
        <ul className="grid grid-cols-2 gap-x-2 gap-y-4">
            {posts.map(({ metadata, slug }) => {
                return (
                    <li key={slug} className="rounded-md p-4 bg-background">
                        <DecoratedLink
                            href={`/post/${slug}`}
                            className="block text-lg font-semibold w-fit"
                        >
                            {metadata.title}
                        </DecoratedLink>
                        <span className="block text-lg font-semibold text-muted mb-2">{metadata.subtitle}</span>
                        <span>{metadata.description}</span>
                    </li>
                );
            })}
        </ul>
    );
}

export default BlogList;
