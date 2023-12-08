import React, { useContext, useEffect } from "react";
import { TriviaContext } from "../context/TriviaContext";
import { useNavigate } from "react-router-dom";

const Game = () => {
    let { q, getQ, done } = useContext(TriviaContext);
    const nav = useNavigate();
    useEffect(() => {
        !done && nav("/");
        getQ();
    }, []);
    console.log(q);
    return <div>Game</div>;
};

export default Game;
