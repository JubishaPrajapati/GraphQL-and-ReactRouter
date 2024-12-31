//parent component

import { Route, Routes, Link } from 'react-router-dom';
import Settings from "./settings";
import Posts from "./posts";
import ProfileView from "./profileView";

const Profile = () => {
    <div>
        <h1>Profile pages</h1>
        <nav>
            <ul>
                <li><Link to="/profile/overview">Overview</Link></li>
                <li><Link to="/profile/settings">Settings</Link></li>
                <li><Link to="/profile/posts">Posts</Link></li>
            </ul>
        </nav>

        <Routes>
            <Route path="/overview" element={<ProfileView />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/posts" element={<Posts />} />
        </Routes>
    </div>
}
export default Profile;