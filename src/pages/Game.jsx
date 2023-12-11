import { useContext, useEffect, useState } from "react";
import { TriviaContext } from "../context/TriviaContext";
import { useNavigate } from "react-router-dom";
import Grid from "../components/Grid";

const Game = () => {
    let { q, getQ, done, limit, current, setCurrent } = useContext(TriviaContext);
    const nav = useNavigate();
    // set current question, block others, dont let same question be answered
    const [answered, setAnswered] = useState([]);
    useEffect(() => {
        !done && nav("/");
        getQ();
    }, []);
    return (
        <div>
            {!current ? (
                q.map((x, i) => (
                    // <Grid x={x} answered={answered} setAnswered={setAnswered} q={q} current={current} />
                    <Grid {...{ x, answered, setAnswered, q, current, setCurrent, i }} />
                ))
            ) : (
                <>
                    <h1>{q[current].question.text}</h1>
                </>
            )}
        </div>
    );
};

export default Game;
