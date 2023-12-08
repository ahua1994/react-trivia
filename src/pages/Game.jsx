import React, { useContext, useEffect } from "react";
import { TriviaContext } from "../context/TriviaContext";

const Game = () => {
    let { q, getQ } = useContext(TriviaContext);
    useEffect(() => {
        getQ();
    }, []);
    console.log(q);
    return <div>Game</div>;
};

export default Game;
