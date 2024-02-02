import { useAppContext } from "../state/useAppContext";

export const Counter = () => {
  const { state, increment, decrement } = useAppContext();

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};
