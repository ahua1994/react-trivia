const Question = ({ x, answered, setAnswered }) => {
    console.log(x);
    const value = d => (d === "easy" ? 50 : d === "medium" ? 100 : 200);
    return (
        <button
            key={x.id}
            //  disabled={answered.includes(x.id)}
        >
            {x.category.replaceAll("_", " ").toUpperCase()} {value(x.difficulty)}
        </button>
    );
};

export default Question;
