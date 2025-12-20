"use client";

import ThemeToggleButton from "./theme-toggle-button";
import Logo from "./logo";
import DecoratedLink from "./decorated-link";
import Button, { buttonVariant } from "./button";
import { Menu } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { cn } from "@/lib/utils";

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
            <div className="flex flex-row items-center gap-4">
                {/* <Button className="block md:hidden aspect-square p-1"> */}
                {/*     <Menu className="size-4" /> */}
                {/* </Button> */}
                <Popover>
                    <PopoverTrigger className={cn(buttonVariant(), "md:hidden aspect-square p-0")}>
                        <Menu className="size-4" />
                    </PopoverTrigger>
                    <PopoverContent className="px-2 py-4 min-w-55 flex flex-col bg-background rounded-md drop-shadow-md">
                        <h3 className="text-sm font-medium text-muted">Navigation</h3>
                        <div className="flex flex-col pl-2 gap-1 mt-1">
                            <DecoratedLink href="/post" className="font-medium">
                                Post
                            </DecoratedLink>
                            <DecoratedLink href="/work" className="font-medium">
                                Work
                            </DecoratedLink>
                        </div>
                    </PopoverContent>
                </Popover>
                <ThemeToggleButton />
            </div>
        </nav >
    );
}

export default NavBar;
