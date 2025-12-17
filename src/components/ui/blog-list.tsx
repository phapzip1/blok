import { files } from "@/lib/blogs";
import DecoratedLink from "./decorated-link";

const BlogList: React.FC = async () => {
    const f = await files;
    const mdxes = await Promise.all(f.map(name => import(`@/content/${name}.mdx`)));

    return (
        <ul className="grid grid-cols-2 gap-x-2 gap-y-4">
            {mdxes.map(({ frontmatter }, index) => {
                const { title, subtitle, description } = frontmatter;

                return (
                    <li key={index} className="rounded-md p-4 bg-background">
                        <DecoratedLink
                            href={`/post/${f[index]}`}
                            className="block text-lg font-semibold w-fit"
                        >
                            {title}
                        </DecoratedLink>
                        <span className="block text-lg font-semibold text-muted mb-2">{subtitle}</span>
                        <span>{description}</span>
                    </li>
                );
            })}
        </ul>
    );
}

export default BlogList;
