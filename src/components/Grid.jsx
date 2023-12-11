const Grid = ({ x, answered, setAnswered, q, current, setCurrent, i }) => {
    console.log(x, answered, q, current);
    const value = d => (d === "easy" ? 50 : d === "medium" ? 100 : 200);
    return (
        <button
            key={x.id}
            onClick={() => setCurrent(i)}
            //  disabled={answered.includes(x.id)}
        >
            {x.category.replaceAll("_", " ").toUpperCase()} {value(x.difficulty)}
        </button>
    );
};

export default Grid;
