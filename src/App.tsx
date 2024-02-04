import CssBaseline from "@mui/material/CssBaseline";

import { TasksManager } from "./components/tasks-manager.component";
import { TasksContextProvider } from "./state/tasks/context/tasks-context-provider.component";

const App = () => {
  return (
    <>
      <CssBaseline />
      <TasksContextProvider>
        <TasksManager />
      </TasksContextProvider>
    </>
  );
};

export default App;
