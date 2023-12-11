import { useContext } from "react";
import { TriviaContext } from "../context/TriviaContext";

const Answers = () => {
    let { q, current, setCurrent } = useContext(TriviaContext);
    // let shuffled = [];
    // while (shuffled.length !== 4) {
    //     let index = Math.floor(Math.random() * 4);
    //     if (shuffled.includes(index)) continue;
    //     shuffled.push(index);
    // }
    // console.log(shuffled);
    return (
        <div>
            <button>{q[current].correctAnswer}</button>
            {q[current].incorrectAnswers.map((x, i) => (
                <button key={i}>{x}</button>
            ))}
        </div>
    );
};

export default Answers;
