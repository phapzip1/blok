import { readFile } from "fs/promises";
import { convertPathToPattern, globby } from "globby";
import matter from "gray-matter";
import path from "path";

type Metadata = {
    title: string;
    subtitle: string;
    createdAt: string;
    slug: string;
}

const getBlogs = async (): Promise<Metadata[]> => {
    const p = path.join(process.cwd(), "src", "content");

    const files = await globby(convertPathToPattern(p), {
        expandDirectories: {
            extensions: ["mdx"]
        }
    });

    const fileMetas = await Promise.all(files.map((file) => readFile(file, "utf-8").then(bytes => matter(bytes))));

    return fileMetas.map((meta, index) => {
        return {
            title: meta.data["title"],
            subtitle: meta.data["subtitle"],
            createdAt: meta.data["createdAt"],
            slug: path.parse(files[index]).name
        };
    });
}

export {
    getBlogs,
}