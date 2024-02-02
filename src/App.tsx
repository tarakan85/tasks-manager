import { TaskManager } from "./components/TaskManager";
import { AppContextProvider } from "./state/appContextProvider";

function App() {
  return (
    <AppContextProvider>
      <TaskManager />
    </AppContextProvider>
  );
}

export default App;
