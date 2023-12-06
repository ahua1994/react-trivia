import { useState, createContext } from "react";

export const TriviaContext = createContext();
const TriviaContextProvider = () => {
    const [q, setQ] = useState([]);
    const getQuestions = async () => {
        fetch(`https://the-trivia-api.com/v2/questions`)
            .then(x => x.json())
            .then(x => setQ(x));
    };
    return (
        <TriviaContext.Provider value={{ q, setQ, getQuestions }}>
            {props.children}
        </TriviaContext.Provider>
    );
};

export default TriviaContextProvider;
// https://the-trivia-api.com/v2/questions
// https://the-trivia-api.com/v2/questions/search
