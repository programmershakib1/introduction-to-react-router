import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post;

    const navigate = useNavigate();

    const handleShowDetail = () => {
        navigate(`/post/${id}`)
    }

    return (
        <div className="border-2 rounded-xl p-5 border-black">
            <h4>Post ot Id: {id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`} className="bg-gray-400 rounded-xl p-2">Post Detail</Link>
            <Link to={`/post/${id}`}><button className="bg-yellow-200 p-2 rounded-xl">Show Details</button></Link>
            <button onClick={handleShowDetail} className="bg-green-400 rounded-xl p-2">Click to see Details</button>
        </div>
    );
};

export default Post;