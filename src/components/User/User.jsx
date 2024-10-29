import { Link } from "react-router-dom";

const User = ({user}) => {
    const {id, name, email, phone} = user;
    return (
        <div className="border-2 border-black p-5 rounded-xl flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold">{name}</h2>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            <Link to={`/user/${id}`}>
                <button>Click Me</button>
            </Link>
        </div>
    );
};

export default User;