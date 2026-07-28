import { Link } from "react-router";

const Blog = () => {
    const posts = [
        { id: 1, title: "First Post" },
        { id: 2, title: "Second Post" },
        { id: 3, title: "Third Post" },
    ];

    return (
        <div>
            <h1 className="text-dark">Blog Page</h1>
            {posts.map((post) => (
                <p key={post.id}>
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </p>
            ))}
        </div>
    );
};

export default Blog;
