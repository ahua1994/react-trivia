import { useContext, useState } from "react";
import { TriviaContext } from "../context/TriviaContext";

const Question = () => {
    const { current, setCurrent } = useContext(TriviaContext);
    return (
        <button
        //  disabled={answered.includes(x.id)}
        >
            {x.category.replaceAll("_", " ").toUpperCase()} {value(x.difficulty)}
        </button>
    );
};

export default Question;
