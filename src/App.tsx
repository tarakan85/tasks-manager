import CssBaseline from "@mui/material/CssBaseline";

import { TaskManager } from "./components/task-manager/task-manager.component";
import { TasksContextProvider } from "./state/tasks/context/tasks-context-provider.component";

const App = () => {
  return (
    <>
      <CssBaseline />
      <TasksContextProvider>
        <TaskManager />
      </TasksContextProvider>
    </>
  );
};

export default App;
