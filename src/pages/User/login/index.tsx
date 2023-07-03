import React from "react";
import { Helmet } from "react-helmet";

const Login: React.FC = () => {
    return (
    <div>
        <Helmet>
            <title>Login</title>
            <meta name="description" content={"Login"} />
            {/* Add more meta tags or SEO-related elements as needed */}
        </Helmet>
        <div>
            Log In
        </div>
    </div>
    )
}

export default Login;