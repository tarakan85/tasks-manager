import { createContext, useContext } from "react";

import { TTasksState, initialState } from "../tasks.reducer";
import {
  createTaskAction,
  updateTaskTextAction,
  removeTaskAction,
  toggleTaskStatusAction,
} from "../tasks.actions";

export const TasksContext = createContext<{
  state: TTasksState;
  createTask: (...args: Parameters<typeof createTaskAction>) => void;
  updateTaskText: (...args: Parameters<typeof updateTaskTextAction>) => void;
  removeTask: (...args: Parameters<typeof removeTaskAction>) => void;
  toggleTaskStatus: (
    ...args: Parameters<typeof toggleTaskStatusAction>
  ) => void;
}>({
  state: initialState,
  createTask: () => undefined,
  updateTaskText: () => undefined,
  removeTask: () => undefined,
  toggleTaskStatus: () => undefined,
});

export const useTasksContext = () => {
  return useContext(TasksContext);
};
