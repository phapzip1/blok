import Footer from "@/components/ui/footer";
import NavBar from "@/components/ui/nav-bar";

const IndexLayout : React.FC<{children: React.ReactNode}> = ({children}) => {
    return (
        <div>
            <NavBar />
            <div className="my-12">
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default IndexLayout;