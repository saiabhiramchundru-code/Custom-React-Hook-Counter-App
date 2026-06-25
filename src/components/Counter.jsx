import useCounter from "../hooks/useCounter";

function Counter({ title, initialValue, step }) {
  const { count, increment, decrement, reset } =
    useCounter(initialValue, step);

  return (
    <div className="counter-card">
      <h2>{title}</h2>

      <h3 className="count">{count}</h3>

      <div className="buttons">
        <button className="btn increment" onClick={increment}>
          +{step}
        </button>

        <button className="btn decrement" onClick={decrement}>
          -{step}
        </button>

        <button className="btn reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;