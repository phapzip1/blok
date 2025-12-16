import { files } from "@/lib/blogs";

const BlogList: React.FC = async () => {
    const f = await files;
    const mdxes = await Promise.all(f.map(name => import(`@/content/${name}`)));

    return (
        <ul className="grid grid-cols-2">
            {mdxes.map(({ frontmatter }, index) => {
                const { title, subtitle, description } = frontmatter;

                return (
                    <li key={index}>
                        <span>{title}</span>
                        <span>{subtitle}</span>
                        <span>{description}</span>
                    </li>
                );
            })}
        </ul>
    );
}

export default BlogList;