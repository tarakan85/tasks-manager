import { createContext, useContext } from "react";

import { TTasksState, initialState } from "../tasks.reducer";
import {
  createTaskAction,
  updateTaskTextAction,
  removeTaskAction,
  toggleTaskStatusAction,
  setTasksFilterAction,
} from "../tasks.actions";

export const TasksContext = createContext<{
  state: TTasksState;
  createTask: (...args: Parameters<typeof createTaskAction>) => void;
  updateTaskText: (...args: Parameters<typeof updateTaskTextAction>) => void;
  removeTask: (...args: Parameters<typeof removeTaskAction>) => void;
  toggleTaskStatus: (
    ...args: Parameters<typeof toggleTaskStatusAction>
  ) => void;
  setTasksFilter: (...args: Parameters<typeof setTasksFilterAction>) => void;
}>({
  state: initialState,
  createTask: () => undefined,
  updateTaskText: () => undefined,
  removeTask: () => undefined,
  toggleTaskStatus: () => undefined,
  setTasksFilter: () => undefined,
});

export const useTasksContext = () => {
  return useContext(TasksContext);
};
