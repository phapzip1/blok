"use client";

import ThemeToggleButton from "./theme-toggle-button";
import Logo from "./logo";
import DecoratedLink from "./decorated-link";

const NavBar: React.FC = () => {
    return (
        <nav className="flex fixed top-0 left-1/2 -translate-x-1/2 flex-row justify-between py-1 w-full max-w-2xl backdrop-blur-sm z-10">
            <div className="flex flex-row gap-8 items-center">
                <Logo />
                <div className="hidden md:flex flex-row items-center gap-8 ">
                    <DecoratedLink href="/post" className="font-medium">
                        Post
                    </DecoratedLink>
                    <DecoratedLink href="/work" className="font-medium">
                        Work
                    </DecoratedLink>
                </div>
            </div>
            <div className="flex flex-row items-center gap-2">
                <ThemeToggleButton />
            </div>
        </nav >
    );
}

export default NavBar;
