import { notFound } from "next/navigation";

const BlogDetailPage: React.FC<{ params: Promise<{ slug: string }> }> = async ({ params }) => {
    try {
        const { slug } = await params;
            
        const Content = await import(`@/content/${slug}.mdx`);

        return <Content.default />;
    } catch (error) {
        throw notFound();
    }
}

export default BlogDetailPage;