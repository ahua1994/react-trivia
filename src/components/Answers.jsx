import { useState } from "react";

const Answers = ({ answered, setAnswered, q, current, setCurrent }) => {
    const [show, setShow] = useState(false);
    const [color, setColor] = useState("unset");
    let shuffled = [];
    while (shuffled.length !== 4) {
        let index = Math.floor(Math.random() * 4);
        if (shuffled.includes(index)) continue;
        shuffled.push(index);
    }
    console.log(color);
    const changeColor = ans => setColor(ans === q[current].correctAnswer ? "green" : "red");
    return (
        <div>
            {show && <h1>{}</h1>}
            {[q[current].correctAnswer].concat(q[current].incorrectAnswers).map(x => (
                <button
                    onClick={() => {
                        setAnswered([...answered, q[current].id]);
                        setShow(true);
                        changeColor(x);
                        console.log(x);
                    }}
                    key={x}
                    style={{ backgroundColor: color }}
                    // disabled={show}
                >
                    {x}
                </button>
            ))}
            <button onClick={() => setCurrent(null)}>Return</button>
        </div>
    );
};

export default Answers;
