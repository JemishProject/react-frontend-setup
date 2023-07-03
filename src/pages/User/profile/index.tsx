import React from "react";
import { Helmet } from 'react-helmet';

const ProfileIndex: React.FC = () => {
    return (
    <div>
        <Helmet>
            <title>User Profile</title>
            <meta name="description" content={"user profile"} />
            {/* Add more meta tags or SEO-related elements as needed */}
        </Helmet>
        <div>
            Profile Index
        </div>
    </div>
    )
}

export default ProfileIndex;