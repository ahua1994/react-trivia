import { useEffect, useState } from "react";

const Answers = ({ answered, setAnswered, q, current, setCurrent }) => {
    const [show, setShow] = useState(false);
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
            {show && <h1>{}</h1>}
            {shuffled.map(x => (
                <button
                    onClick={() => {
                        setAnswered([...answered, q[current].id]);
                        setShow(true);
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
            <button onClick={() => setCurrent(null)}>Return</button>
        </div>
    );
};

export default Answers;
