import { useContext, useState } from "react";
import { TriviaContext } from "../context/TriviaContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
    let { diff, cat, cats, limit, setLimit, setCat, setDiff, setDone } = useContext(TriviaContext);
    let [stage, setStage] = useState(0);
    const nav = useNavigate();
    return (
        <div>
            {stage === 0 ? (
                <button onClick={() => setStage(stage + 1)}>Let's Trivia</button>
            ) : stage === 1 ? (
                <>
                    <h1>How Many Questions? {limit}</h1>
                    {[5, 10, 15, 20].map(x => (
                        <button key={x} onClick={() => setLimit(x)}>
                            {x}
                        </button>
                    ))}
                    <button onClick={() => setStage(stage + 1)}>NEXT</button>
                </>
            ) : stage === 3 ? (
                <>
                    <h1>Select Your Difficulty</h1>
                    {["easy", "medium", "hard"].map(x => (
                        <button
                            key={x}
                            onClick={() =>
                                diff.includes(x)
                                    ? setDiff(diff.filter(y => y !== x))
                                    : setDiff([...diff, x])
                            }
                        >
                            {x.toUpperCase()}
                        </button>
                    ))}
                    <button
                        onClick={() => {
                            setDiff([]);
                            setStage(stage + 1);
                        }}
                    >
                        ALL
                    </button>
                    <button onClick={() => setStage(stage + 1)}>NEXT</button>
                </>
            ) : stage === 2 ? (
                <>
                    <h1>Select Categories</h1>
                    {cats.map(x => (
                        <button
                            key={x}
                            onClick={() => {
                                cat.includes(x)
                                    ? setCat(cat.filter(y => y !== x))
                                    : setCat([...cat, x]);
                            }}
                        >
                            {x.replaceAll("_", " ").toUpperCase()}
                        </button>
                    ))}
                    <button onClick={() => setCat([])}>ALL</button>
                    <button onClick={() => setStage(stage + 1)}>NEXT</button>
                </>
            ) : (
                <>
                    <button onClick={() => setStage(0)}>CHANGE SETTINGS</button>
                    <button
                        onClick={() => {
                            setStage(0);
                            setDone(true);
                            nav("/game");
                        }}
                    >
                        START GAME
                    </button>
                </>
            )}
        </div>
    );
};

export default Home;
