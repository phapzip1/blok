import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ThemeProvider from "@/components/provider/theme-provider";
import "./globals.css";

const metadata: Metadata = {
    title: "Phap N. Van",
    description: "This is where I write everything about my life!",
};

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <>
            <html lang="en" suppressHydrationWarning >
                <body className="antialiased bg-background-light dark:bg-background-dark">
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        // enableSystem
                        disableTransitionOnChange
                    >
                        {children}
                        <SpeedInsights />
                        <div id="portal"></div>
                    </ThemeProvider>
                </body>
            </html>
        </>
    );
}

export default RootLayout;
export {
    metadata
};
