import { createContext, useContext } from "react";

import { TTasksState, initialState } from "../tasks.reducer";
import { EFilters } from "../tasks.types";
import {
  createTaskAction,
  updateTaskTextAction,
  removeTaskAction,
  toggleTaskStatusAction,
  setTasksFilterAction,
} from "../tasks.actions";

export const TasksContext = createContext<{
  tasks: TTasksState["tasks"];
  filter: EFilters;
  createTask: (...args: Parameters<typeof createTaskAction>) => void;
  updateTaskText: (...args: Parameters<typeof updateTaskTextAction>) => void;
  removeTask: (...args: Parameters<typeof removeTaskAction>) => void;
  toggleTaskStatus: (
    ...args: Parameters<typeof toggleTaskStatusAction>
  ) => void;
  setTasksFilter: (...args: Parameters<typeof setTasksFilterAction>) => void;
}>({
  tasks: initialState.tasks,
  filter: initialState.filter,
  createTask: () => undefined,
  updateTaskText: () => undefined,
  removeTask: () => undefined,
  toggleTaskStatus: () => undefined,
  setTasksFilter: () => undefined,
});

export const useTasksContext = () => {
  return useContext(TasksContext);
};
