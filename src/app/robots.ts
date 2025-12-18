import { baseURL } from "./sitemap";

const robots = async () => {
    return {
        rules: [
            {
                "userAgent": "*",
            },
        ],
        sitemap: `${baseURL}/sitemap.xml`,
    };
}

export default robots;
