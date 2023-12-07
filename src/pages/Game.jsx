import React, { useContext, useEffect } from "react";
import { TriviaContext } from "../context/TriviaContext";

const Game = () => {
    let { setQ, q, getQ } = useContext(TriviaContext);
    // useEffect(() => {
    //     getQ();
    // }, []);
    return <div>Game</div>;
};

export default Game;
