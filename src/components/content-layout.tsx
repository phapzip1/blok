type Metadata = {
    title?: string;
    subtitle?: string;
    description?: string;
    updatedAt?: string
}

const PostBodyLayout: React.FC<{ children: React.ReactNode, metadata: Metadata }> = ({ children, metadata }) => {
    return (
        <main className="relative">
            <div className="my-12">
                <h1 className="text-center text-3xl font-semibold">{metadata.title}</h1>
                <h2 className="text-center text-2xl font-medium mt-2">{metadata.subtitle}</h2>
                <p className="text-center text-sm mt-2">
                    <strong>Updated at: </strong>
                    {metadata.updatedAt}
                </p>
            </div>
            <article className="relative">
                {children}
            </article>
        </main>
    );
}

export default PostBodyLayout;