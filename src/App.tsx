import { useReducer, useCallback } from "react";
import { AppContext } from "./state/useAppContext";
import { reducer, initialState } from "./state/reducer";
import { incrementAction, decrementAction } from "./state/actions";
import { Counter } from "./components/Counter";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = useCallback(() => dispatch(incrementAction()), [dispatch]);
  const decrement = useCallback(() => dispatch(decrementAction()), [dispatch]);

  return (
    <AppContext.Provider value={{ state, increment, decrement }}>
      <Counter />
    </AppContext.Provider>
  );
}

export default App;
