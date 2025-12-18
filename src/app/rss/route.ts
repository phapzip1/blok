import { getAllPosts } from "@/lib/blogs";
import { baseURL } from "../sitemap";

const GET = async () => {
    const posts = await getAllPosts();

    const itemXML = posts.map((post) => `
        <item>
              <title>${post.metadata.title}</title>
              <link>${baseURL}/post/${post.slug}</link>
              <description>${post.metadata.description || ""}</description>
              <pubDate>${new Date(post.metadata.updatedAt).toUTCString()}</pubDate>
        </item>`
    ).join("/n");

    const rssFeed = `
    <rss version="2.0">
        <channel>
            <title>Yellow Banana</title>
            <link>${baseURL}</link>
            <description>This is my portfolio RSS feed</description>
            ${itemXML}
        </channel>
      </rss>
    `;

    return new Response(rssFeed, {
        headers: {
            "Content-Type": "text/xml",
        },
    })

}

export {
    GET,
}
