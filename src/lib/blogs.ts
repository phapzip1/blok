import { globby, convertPathToPattern } from "globby";
import path from "path";
import React from "react";

type PostMetadata = {
    title: string;
    subtitle?: string;
    description?: string;
    updatedAt: Date;
}

const base = convertPathToPattern(path.join(process.cwd(), "src", "content"))

const getAllPosts = async () => {
    const filenames = await globby("*.mdx", { cwd: base }).then((namesWithExt) => {
        return namesWithExt.map(nameWithExt => path.basename(nameWithExt, ".mdx"));
    });

    const posts = await Promise.all(filenames.map(filename => import(`@/content/${filename}.mdx`)));

    return posts.map((post, index) => {
        const timeInMillis = Date.parse(post.frontmatter.updatedAt);

        return {
            metadata: {
                title: post.frontmatter.title || "Untitled",
                subtitle: post.frontmatter.subtitle,
                description: post.frontmatter.description,
                updatedAt: Number.isNaN(timeInMillis) ? new Date() : new Date(timeInMillis),
            } as PostMetadata,
            slug: filenames[index],
            Content: post.default as React.ReactElement,
        };
    });
}

export {
    getAllPosts,
};
