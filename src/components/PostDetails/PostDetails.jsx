import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {postId} = useParams();
    const navigate = useNavigate();
    const {id, title, body} = post;
    console.log(postId);
    const handleGoBack = () => {
        navigate(-1);
    }
    return (
        <div>
            <h3>Post Detail About {id}</h3>
            <p>Title: {title}</p>
            <p><small>{body}</small></p>
            <button onClick={handleGoBack} className="bg-red-400 rounded-xl p-2">Go Back</button>
        </div>
    );
};

export default PostDetails;