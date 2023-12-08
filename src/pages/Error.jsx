import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
    const nav = useNavigate();
    return (
        <div>
            <h1>Something Went Wrong!</h1>
            <button onClick={() => nav("/")}>Go Home</button>
        </div>
    );
};

export default Error;
