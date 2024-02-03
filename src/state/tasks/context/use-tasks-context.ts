import { createContext, useContext } from "react";

import { TTasksState, initialState } from "../tasks.reducer";
import { createTaskAction } from "../tasks.actions";

export const TasksContext = createContext<{
  state: TTasksState;
  createTask: (...args: Parameters<typeof createTaskAction>) => void;
}>({
  state: initialState,
  createTask: () => undefined,
});

export const useTasksContext = () => {
  return useContext(TasksContext);
};
