import { useContext } from "react";
import { TriviaContext } from "../context/TriviaContext";

const Answer = () => {
    let { q } = useContext(TriviaContext);
    return <div>Answer</div>;
};

export default Answer;
