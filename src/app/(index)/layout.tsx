import Footer from "@/components/footer";
import NavBar from "@/components/nav-bar";

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