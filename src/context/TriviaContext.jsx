import { useState, createContext } from "react";

export const TriviaContext = createContext();
const TriviaContextProvider = props => {
    // types=text_choice,image_choice
    const [q, setQ] = useState([]);
    const [cat, setCat] = useState([]);
    const [diff, setDiff] = useState([]);
    const [done, setDone] = useState(false);
    const [limit, setLimit] = useState(10);
    const [score, setScore] = useState(0);
    const [current, setCurrent] = useState(null);
    const url = `https://the-trivia-api.com/v2/questions?limit=${limit}${
        cat.length ? "&categories=" + cat.join(",") : ""
    }${diff.length ? "&difficulties=" + diff.join(",") : ""}`;
    console.log(q);
    console.log(current);
    const cats = [
        "music",
        "sport_and_leisure",
        "film_and_tv",
        "arts_and_literature",
        "history",
        "society_and_culture",
        "science",
        "geography",
        "food_and_drink",
        "general_knowledge",
    ];
    const getQ = async () => {
        fetch(url)
            .then(x => x.json())
            .then(x => setQ(x));
    };
    return (
        <TriviaContext.Provider
            value={{
                q,
                cat,
                cats,
                diff,
                done,
                limit,
                score,
                current,
                setCat,
                setDiff,
                setDone,
                setQ,
                getQ,
                setScore,
                setLimit,
                setCurrent,
            }}
        >
            {props.children}
        </TriviaContext.Provider>
    );
};

export default TriviaContextProvider;
// https://the-trivia-api.com/v2/questions
// https://the-trivia-api.com/v2/questions/search
