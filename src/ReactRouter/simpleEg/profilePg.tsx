import React from "react";
import { useParams } from "react-router-dom";

const ProfilePg: React.FC = () => {
    const { username } = useParams<{ username: string }>();
    return <h1>This is the profile of {username}</h1>
}
export default ProfilePg;