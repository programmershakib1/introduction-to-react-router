import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
    const users = useLoaderData();
    // state --> data
    // state --> loader
    // use effect
    // fetch --> state set--> set state\
    return (
        <div>
            <h2>Our Users: {users.length}</h2>
            <p>Fantastic Users</p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 m-10">
                {
                    users.map((user, idx) => <User key={idx} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;