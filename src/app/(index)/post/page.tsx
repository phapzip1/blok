import BlogList from "@/components/ui/blog-list";
import Link from "next/link";

const PostPage: React.FC = async () => {
    return (
        <div className="mt-20">
            <div className="flex flex-row justify-between mb-2">
                <h1 className="text-2xl font-semibold">General</h1>
                <h1 className="text-2xl font-semibold">1 Article</h1>
            </div>
            <BlogList />
        </div>
    );
}

export default PostPage;