import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface Props {
    params: Promise<{ slug: string }>;
}

const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const { slug } = await params;
    const Content = await import(`@/content/${slug}.mdx`);

    return {
        ...Content.frontmatter,
    };
}

const BlogDetailPage: React.FC<Props> = async ({ params }) => {
    try {
        const { slug } = await params;

        const { frontmatter, default: DefaultMDX } = await import(`@/content/${slug}.mdx`);

        const { title, subtitle, updatedAt } = frontmatter;

        return (
            <main>
                <div className="text-center">
                    <h1 className="text-3xl mb-5">
                        <span className="block">{title}</span>
                        <span className="block text-2xl">{subtitle}</span>
                    </h1>
                    <p>{updatedAt}</p>
                </div>
                <article>
                    <DefaultMDX />
                </article>
            </main>
        );
    } catch (error) {
        throw notFound();
    }
}

export default BlogDetailPage;

export {
    generateMetadata
}
