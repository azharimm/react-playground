import React, { useState, useEffect } from "react";

const UseEffectPage = (props) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [resourceType, setResourceType] = useState("posts");
    const [items, setItems] = useState([]);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        console.log("resource changed");
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then((response) => response.json())
            .then((json) => setItems(json));

        //call when component unmount
        return () => {
            console.log("return from resource changed");
        };
    }, [resourceType]);

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <div className="text-center">
                <p>{windowWidth}</p>
                <button onClick={() => setResourceType("posts")}>Posts</button>
                <button onClick={() => setResourceType("users")}>Users</button>
                <button onClick={() => setResourceType("comments")}>
                    Comments
                </button>
            </div>
            <h1>{resourceType}</h1>
            {items.map((item, index) => {
                return <pre key={index}>{JSON.stringify(item)}</pre>;
            })}
        </>
    );
};

export default UseEffectPage;
