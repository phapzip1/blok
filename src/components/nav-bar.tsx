"use client";

import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { Popover, PopoverPopup, PopoverTrigger } from "./ui/popover";
import ThemeToggleButton from "./theme-toggle-button";
import Logo from "./logo";

const NavBar: React.FC = () => {
    return (
        <nav className="flex fixed top-0 left-1/2 -translate-x-1/2 flex-row justify-between py-1 w-full max-w-2xl backdrop-blur-sm z-10">
            <div className="flex flex-row gap-4 items-center">
                <Logo />
                <span className="hidden md:flex flex-row items-center">
                    <Link href="/post" className={buttonVariants({ variant: "ghost", className: "text-[1rem]"})}>Post</Link>
                    <Link href="/work" className={buttonVariants({ variant: "ghost", className: "text-[1rem]" })}>Work</Link>
                </span>
            </div>
            <div className="flex flex-row items-center gap-2">
                <ThemeToggleButton />
                <Popover>
                    <PopoverTrigger render={<Button size="icon-lg" className="md:hidden" />}>
                        <MenuIcon />
                    </PopoverTrigger>
                    <PopoverPopup align="end" className="w-60 md:hidden" >
                        <p className="text-xs font-medium">Navigation</p>
                        <div className="flex flex-col gap-2 pl-2 mt-2">
                            <Link href="/work" className="block p-1 font-medium bg-amber-400">Work</Link>
                            <Link href="/post" className="block p-1 font-medium">Post</Link>
                        </div>
                    </PopoverPopup>
                </Popover>
            </div>
        </nav >
    );
}

export default NavBar;