"use client"

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggleButton: React.FC = () => {
    const { setTheme, theme } = useTheme();

    const toggleTheme = () => {
        if (theme) {
            if (theme === "light") {
                setTheme("dark");
            } else {
                setTheme("light");
            }
        }
    }

    return (
        <button onClick={toggleTheme} className="relative flex flex-row">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </button>
    );
}

export default ThemeToggleButton;