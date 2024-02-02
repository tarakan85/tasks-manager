import { Counter } from "./components/Counter";
import { AppContextProvider } from "./state/appContextProvider";

function App() {
  return (
    <AppContextProvider>
      <Counter />
    </AppContextProvider>
  );
}

export default App;
