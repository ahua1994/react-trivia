import { useState, createContext } from "react";

export const TriviaContext = createContext();
const TriviaContextProvider = props => {
    // types=text_choice,image_choice
    const [q, setQ] = useState([]);
    const [cat, setCat] = useState([]);
    const [done, setDone] = useState(false);
    const [diff, setDiff] = useState([]);
    const [limit, setLimit] = useState(10);
    const url = `https://the-trivia-api.com/v2/questions?limit=${limit}${
        cat.length ? "&categories=" + cat.join(",") : ""
    }${diff.length ? "&difficulties=" + diff.join(",") : ""}`;
    console.log(url);
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
                limit,
                done,
                setCat,
                setDiff,
                setQ,
                getQ,
                setLimit,
                setDone,
            }}
        >
            {props.children}
        </TriviaContext.Provider>
    );
};

export default TriviaContextProvider;
// https://the-trivia-api.com/v2/questions
// https://the-trivia-api.com/v2/questions/search
