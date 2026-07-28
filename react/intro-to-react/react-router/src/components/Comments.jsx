import { useParams } from "react-router";

const Comments = () => {
    let { id } = useParams();

    return (
        <div>
            <h2 className="text-dark">Comments for Blog Post</h2>
            <p>Comment 1 for post {id}</p>
            <p>Comment 2 for post {id}</p>
            {/* In a real application, you would fetch these comments from an API */}
        </div>
    );
};

export default Comments;
