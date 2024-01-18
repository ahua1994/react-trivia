import { useContext, useEffect, useState } from "react";
import { TriviaContext } from "../context/TriviaContext";
import { useNavigate } from "react-router-dom";
import Answers from "../components/Answers";
import Grid from "../components/Grid";

const Game = () => {
    let { q, done, limit, current, setCurrent, style } = useContext(TriviaContext);
    const nav = useNavigate();
    // set current question, block others, dont let same question be answered
    const [answered, setAnswered] = useState([]);
    useEffect(() => {
        !done && nav("/");
    }, []);
    return (
        <div>
            {!current & (current !== 0) ? (
                q.map((x, i) => (
                    // <Grid x={x} answered={answered} setAnswered={setAnswered} q={q} current={current} />
                    <Grid
                        key={i}
                        {...{ x, answered, setAnswered, q, current, setCurrent, i, style }}
                    />
                ))
            ) : (
                <>
                    <h1>{q[current].question.text}</h1>
                    <Answers {...{ q, current, setCurrent, answered, setAnswered, style }} />
                </>
            )}
        </div>
    );
};

export default Game;
