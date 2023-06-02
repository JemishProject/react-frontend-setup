import React from "react";
import { Helmet } from 'react-helmet';

const Index = () => {
    return (
    <div>
        <Helmet>
            <title>E-commerce</title>
            <meta name="description" content={"E-commerce"} />
            {/* Add more meta tags or SEO-related elements as needed */}
        </Helmet>
        <div>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
        </div>
    </div>
    )
}

export default Index;