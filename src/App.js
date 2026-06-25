import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="app">
      <h1>React Custom Hook - Counter App</h1>

      <div className="counter-container">
        <Counter
          title="Counter 1"
          initialValue={0}
        />

        <Counter
          title="Counter 2"
          initialValue={10}
        />

        <Counter
          title="Counter 3"
          initialValue={100}
          step={5}
        />
      </div>
    </div>
  );
}

export default App;
