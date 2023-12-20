import { useState } from "react";

const Answers = ({ answered, setAnswered, q, current, setCurrent }) => {
    const [show, setShow] = useState(false);
    let shuffled = [];
    while (shuffled.length !== 4) {
        let index = Math.floor(Math.random() * 4);
        if (shuffled.includes(index)) continue;
        shuffled.push(index);
    }
    return (
        <div>
            {show && <h1>{}</h1>}
            {[q[current].correctAnswer].concat(q[current].incorrectAnswers).map(x => (
                <button
                    onClick={() => {
                        setAnswered([...answered, q[current].id]);
                        setShow(true);
                        console.log(x);
                        console.log(q[current].correctAnswer);
                    }}
                    // color={x === q[current].correctAnswer ? "green" : "red"}
                    key={x}
                    disabled={show}
                >
                    {x}
                </button>
            ))}
            <button onClick={() => setCurrent(null)}>Return</button>
        </div>
    );
};

export default Answers;
