import { useState, createContext } from "react";

export const TriviaContext = createContext();
const TriviaContextProvider = props => {
    // "music" "sport_and_leisure" "film_and_tv" "arts_and_literature" "history"
    // "society_and_culture" "science" "geography" "food_and_drink" "general_knowledge"
    // types=text_choice,image_choice
    const [q, setQ] = useState([]);
    const [cat, setCat] = useState();
    const [diff, setDiff] = useState();
    const [limit, setLimit] = useState(10);
    console.log(q);
    const getQ = async () => {
        fetch(
            `https://the-trivia-api.com/v2/questions?limit=${limit}${
                cat && "&categories=" + cat.join(",")
            }${diff && "&difficulties=" + diff.join(",")}`
        )
            .then(x => x.json())
            .then(x => setQ(x));
    };
    return (
        <TriviaContext.Provider value={{ q, cat, diff, setCat, setDiff, setQ, getQ, setLimit }}>
            {props.children}
        </TriviaContext.Provider>
    );
};

export default TriviaContextProvider;
// https://the-trivia-api.com/v2/questions
// https://the-trivia-api.com/v2/questions/search
