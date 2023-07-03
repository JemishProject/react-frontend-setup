import React, { useCallback, useEffect, useState } from "react";
import { Helmet } from 'react-helmet';
import { useDispatch } from "react-redux";
import { getUsers } from "../../store/slices/UserSlices";

const Index: React.FC = () => {
    const dispatch: any = useDispatch();

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log("initial counter", counter);
    }, [counter])

    const handleIncrement = useCallback(() => {
        setCounter(counter + 1);
    }, [counter]);

    const handleClick = () => {
        console.log("Hello World...!!");
        handleIncrement();
        console.log("counter", counter);
    }

    return (
    <div>
        <Helmet>
            <title>E-commerce</title>
            <meta name="description" content={"E-commerce"} />
            {/* Add more meta tags or SEO-related elements as needed */}
        </Helmet>
        <div>
            <h1 className="text-3xl font-bold underline" onClick={(e) => handleClick()}>
                Hello world!
            </h1>
        </div>
    </div>
    )
}

export default Index;