import { files } from "@/lib/blogs";
import Link from "next/link";

const BlogList: React.FC = async () => {
    const f = await files;
    const mdxes = await Promise.all(f.map(name => import(`@/content/${name}.mdx`)));

    return (
        <ul className="grid grid-cols-2">
            {mdxes.map(({ frontmatter }, index) => {
                const { title, subtitle, description } = frontmatter;

                return (
                    <li key={index} className="rounded-md p-4 bg-background">
                        <Link
                            href={`/post/${f[index]}`}
                            className="block text-lg font-semibold hover:underline decoration-4 underline-offset-4"
                        >
                            {title}
                        </Link>
                        <span className="block text-lg font-semibold text-text-muted mb-2">{subtitle}</span>
                        <span>{description}</span>
                    </li>
                );
            })}
        </ul>
    );
}

export default BlogList;
