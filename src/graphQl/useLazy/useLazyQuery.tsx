import { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_USER } from "./queryForUselazy";
import { GetUserResponse } from "./queryForUselazy";

const UseLazyQuery: React.FC = () => {
    const [userId, setUserId] = useState('');
    const [getUser, { loading, error, data }] = useLazyQuery<GetUserResponse>(GET_USER);

    const handleUser = () => {
        getUser();
    }


    return (
        <div>
            <h3>Using useLazy Query</h3>
            <input type="text" placeholder="Enter user ID" value={userId} onChange={(e) => setUserId(e.target.value)} />
            <button onClick={handleUser} >Search</button>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}

            {data && (
                <div>
                    {data.getUserCap.map((user) => (
                        <li key={user.id}>
                            {user.user_id},{user.membership_charge}
                        </li>
                    ))}

                </div>
            )}
        </div>

    )

}
export default UseLazyQuery;