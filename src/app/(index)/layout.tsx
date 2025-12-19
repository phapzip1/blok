import Footer from "@/components/ui/footer";
import NavBar from "@/components/ui/nav-bar";

const IndexLayout : React.FC<{children: React.ReactNode}> = ({children}) => {
    return (
        <div id="root">
            <NavBar />
            <div className="my-12 px-4 md:px-0">
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default IndexLayout;
