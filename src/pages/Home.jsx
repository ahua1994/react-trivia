import { useContext, useState } from "react";
import { TriviaContext } from "../context/TriviaContext";

const Home = () => {
    let { setLimit, setCat, setDiff, setQ } = useContext(TriviaContext);
    let [stage, setStage] = useState(0);
    return (
        <div>
            {stage == 0 ? (
                <button onClick={() => setStage(stage + 1)}>Let's Trivia</button>
            ) : stage == 1 ? (
                <>
                    <h1>How Many Questions?</h1>
                </>
            ) : stage == 3 ? (
                <>
                    <h1>Select Your Difficulty</h1>
                    {["easy", "medium", "hard"].map(x => (
                        <button onClick={() => {}} value={x}>
                            {x}
                        </button>
                    ))}
                    <button onClick={() => setStage(stage + 1)}>Submit</button>
                </>
            ) : stage == 2 ? (
                <h1>Select Categories</h1>
            ) : (
                <button>Begin</button>
            )}
        </div>
    );
};

export default Home;
