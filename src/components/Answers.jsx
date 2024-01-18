import { useEffect, useState } from "react";

const Answers = ({ answered, setAnswered, q, current, setCurrent, style }) => {
    const [show, setShow] = useState(false);
    const [result, setResult] = useState(null);
    const [shuffled, setShuffled] = useState([]);

    useEffect(() => {
        let arr = [];
        while (arr.length !== 4) {
            let index = Math.floor(Math.random() * 4);
            if (arr.includes(questions[index])) continue;
            arr.push(questions[index]);
        }
        setShuffled(arr);
    }, []);

    let questions = [q[current].correctAnswer].concat(q[current].incorrectAnswers);

    return (
        <div>
            {shuffled.map(x => (
                <button
                    onClick={() => {
                        setAnswered([...answered, q[current].id]);
                        setShow(true);
                        setResult(
                            x === q[current].correctAnswer
                                ? "Correct!"
                                : `Incorrect... The Answer is ${x} `
                        );
                    }}
                    key={x}
                    style={{
                        backgroundColor: !show
                            ? "F0F0F0"
                            : x === q[current].correctAnswer
                            ? "green"
                            : "red",
                    }}
                    disabled={show}
                >
                    {x}
                </button>
            ))}
            {show && <h1>{result}</h1>}
            <button onClick={() => setCurrent(null)}>Return</button>
        </div>
    );
};

export default Answers;
