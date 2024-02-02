import { useReducer } from "react";
import { AppContext } from "./state/useAppContext";
import { reducer, initialState } from "./state/reducer";

import { Counter } from "./components/Counter";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Counter />
    </AppContext.Provider>
  );
}

export default App;
