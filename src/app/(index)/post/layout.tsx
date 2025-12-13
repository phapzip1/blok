const PostLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="max-w-2xl mx-auto">
            {children}
        </div>
    );
}

export default PostLayout;