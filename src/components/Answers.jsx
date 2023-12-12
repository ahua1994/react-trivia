import { useState } from "react";

const Answers = ({ answered, setAnswered, q, current, setCurrent }) => {
    const [show, setShow] = useState(false);
    let shuffled = [];
    while (shuffled.length !== 4) {
        let index = Math.floor(Math.random() * 4);
        if (shuffled.includes(index)) continue;
        shuffled.push(index);
    }
    console.log(answered);
    return (
        <div>
            {[q[current].correctAnswer].concat(q[current].incorrectAnswers).map(x => (
                <button
                    onClick={() => {
                        setAnswered([...answered, q[current].id]);
                        setShow(true);
                    }}
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
