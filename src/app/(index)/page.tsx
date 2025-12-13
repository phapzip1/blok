import Banana from "@/components/three-dimensions/banana";
import ModelDisplay from "@/components/three-dimensions/model-display";
import { buttonVariants } from "@/components/ui/button";
import { getBlogs } from "@/lib/blog-utils";
import { SiFacebook, SiGithub } from "@icons-pack/react-simple-icons";
import Link from "next/link";

const HomePage: React.FC = async () => {
    const posts = await getBlogs();

    return (
        <div className="max-w-2xl mx-auto">
            <ModelDisplay />
            {/* TIMELINE */}
            <h1 className="relative text-2xl w-fit my-5">
                Brief
                <span className="absolute w-full -z-1 h-1.5 bg-secondary-foreground left-0 -bottom-1" />
            </h1>
            <p className="block w-full py-2 text-left">
                I am Phap — a full-stack developer who builds fast, scalable, and pixel-perfect web applications from the ground up.
                From database architecture to responsive frontends, I turn ideas into products that work flawlessly and feel great to use.
                I'd like to hang out with my friend and play a lot video games when not online. I'm taking master of AI degree at Universiy of Waikato,
                New Zealand to broaden my horizon only for academic purposes, but also to expose myself to different cultures.
            </p>
            {/* TIMELINE */}
            <h1 className="relative text-2xl w-fit my-5">
                Bio
                <span className="absolute w-full -z-1 h-1.5 bg-secondary-foreground left-0 -bottom-1" />
            </h1>
            <ul className="flex flex-col gap-2">
                <li><span className="font-medium">2002:</span> Born in Dong Thap, Vietnam.</li>
                <li><span className="font-medium">2024:</span> Completed Bachelor degree in Software Engineering at University of Infomation Technology, Vietnam.</li>
                <li> <span className="font-medium">2025 to the present:</span> Studying at University of Waikato, New Zealand.</li>
            </ul>
            {/* CONTACT */}
            <h1 className="relative text-2xl w-fit my-5">
                Contact me
                <span className="absolute w-full -z-1 h-1.5 bg-secondary-foreground left-0 -bottom-1" />
            </h1>
            <ul className="flex flex-col gap-2">
                <Link href="https://github.com/phapzip1" target="_blank" className={buttonVariants({ variant: "ghost", size: "xl", className: "flex flex-row justify-start w-fit" })}>
                    <SiGithub />
                    <p>@phapzip1</p>
                </Link>
                <Link href="https://www.facebook.com/phackogay/" target="_blank" className={buttonVariants({ variant: "ghost", size: "xl", className: "flex flex-row justify-start w-fit" })}>
                    <SiFacebook />
                    <p>Phap Nguyen</p>
                </Link>
            </ul>
            {/* POSTS */}
            <h1 className="relative text-2xl w-fit my-5">
                Post
                <span className="absolute w-full -z-1 h-1.5 bg-secondary-foreground left-0 -bottom-1" />
            </h1>
            <ul className="grid grid-cols-2">
                {
                    posts.map((metadata) => (
                        <li key={metadata.slug} className="p-4 border-2 border-secondary-foreground">
                            <Link
                                className="hover:underline underline-offset-3 decoration-2 text-2xl font-semibold"
                                href={`/post/${metadata.slug}`}>{metadata.title}
                            </Link>
                            <h3 className="text-xl font-medium text-muted-foreground">{metadata.subtitle}</h3>
                            <p className="my-5">{metadata.createdAt}</p>
                            <Link
                                className="hover:underline underline-offset-3 decoration-2 font-semibold"
                                href={`/post/${metadata.slug}`}>
                                    Read more
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default HomePage;