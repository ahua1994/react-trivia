import { useContext, useEffect, useState } from "react";
import { TriviaContext } from "../context/TriviaContext";
import { useNavigate } from "react-router-dom";
import Question from "../components/Question";

const Game = () => {
    let { q, getQ, done, limit } = useContext(TriviaContext);
    const nav = useNavigate();
    const [current, setCurrent] = useState(0);
    // set current question, block others, dont let same question be answered
    useEffect(() => {
        !done && nav("/");
        getQ();
    }, []);
    return (
        <div>
            {q.map(x => (
                <Question x={x} />
            ))}
        </div>
    );
};

export default Game;
