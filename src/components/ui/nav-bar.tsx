"use client";

import ThemeToggleButton from "./theme-toggle-button";
import Logo from "./logo";
import DecoratedLink from "./decorated-link";
import Button from "./button";
import { Menu } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

const NavBar: React.FC = () => {
    return (
        <nav className="flex fixed top-0 left-1/2 -translate-x-1/2 flex-row px-4 md:px-0 justify-between py-1 w-full max-w-2xl backdrop-blur-sm z-10">
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
                {/* <Button className="block md:hidden aspect-square p-1"> */}
                {/*     <Menu className="size-4" /> */}
                {/* </Button> */}
                <Popover>
                    <PopoverTrigger>
                        <Menu className="size-4" />
                    </PopoverTrigger>
                    <PopoverContent>
                        Smart sea
                    </PopoverContent>
                </Popover>
                <ThemeToggleButton />
            </div>
        </nav >
    );
}

export default NavBar;
