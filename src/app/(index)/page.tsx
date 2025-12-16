import Link from "next/link";
import { SiGithub, SiFacebook } from "@icons-pack/react-simple-icons";
import BlogList from "@/components/ui/blog-list";

const HomePage: React.FC = async () => {
    return (
        <div className="max-w-2xl mx-auto">
            {/* TIMELINE */}
            <h1 className="relative font-semibold text-lg w-fit mb-1">
                Brief
                <span className="absolute w-full -z-1 h-1.5 left-0 -bottom-1" />
            </h1>
            <p className="block w-full text-left">
                I am Phap — a full-stack developer who builds fast, scalable, and pixel-perfect web applications from the ground up.
                From database architecture to responsive frontends, I turn ideas into products that work flawlessly and feel great to use.
                I'd like to hang out with my friend and play a lot video games when not online. I'm taking master of AI degree at Universiy of Waikato,
                New Zealand to broaden my horizon only for academic purposes, but also to expose myself to different cultures.
            </p>
            {/* TIMELINE */}
            <h1 className="relative font-semibold text-lg w-fit mt-5 mb-1">
                Bio
                <span className="absolute w-full -z-1 h-1.5 left-0 -bottom-1" />
            </h1>
            <ul className="flex flex-col gap-2">
                <li><span className="font-medium">2002:</span> Born in Dong Thap, Vietnam.</li>
                <li><span className="font-medium">2024:</span> Completed Bachelor degree in Software Engineering at University of Infomation Technology, Vietnam.</li>
                <li> <span className="font-medium">2025 to the present:</span> Studying at University of Waikato, New Zealand.</li>
            </ul>
            {/* CONTACT */}
            <h1 className="relative font-semibold text-lg w-fit mt-5 mb-1">
                Contact me
                <span className="absolute w-full -z-1 h-1.5 left-0 -bottom-1" />
            </h1>
            <ul className="flex flex-col gap-2.5">
                <Link href="https://github.com/phapzip1" className="flex flex-row items-center-safe justify-center w-fit py-1.5 px-5 gap-2 rounded-md bg-background">
                    <SiGithub />
                    <span className="font-medium">@Phapzip1</span>
                </Link>
                <Link href="https://facebook.com/phapkogay" className="flex flex-row items-center-safe justify-center w-fit py-1.5 px-5 gap-2 rounded-md bg-background">
                    <SiFacebook />
                    <span className="font-medium">Phap Nguyen</span>
                </Link>
            </ul>
            {/* POSTS */}
            <h1 className="relative font-semibold text-lg w-fit mt-5">
                Post
                <span className="absolute w-full -z-1 h-1.5 left-0 -bottom-1" />
            </h1>
            <BlogList />
        </div>
    );
}

export default HomePage;