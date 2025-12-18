import { getAllPosts } from "@/lib/blogs";

const baseURL = process.env.BASE_URL as string || "http://localhost:3000";

const sitemap = async () => {
    const posts = await getAllPosts();

    const postRoutes = posts.map(post => ({
        url: `${baseURL}/post/${post.slug}`,
        lastModified: post.metadata.updatedAt,
    }));

    const appRoutes = ["", "/post", "/work"].map((route) => ({
        url: `${baseURL}${route}`,
        lastModified: new Date().toISOString().split("T")[0],
    }))

    return [
        ...postRoutes,
        ...appRoutes,
    ];
}

export default sitemap;
export {
    baseURL,
}
