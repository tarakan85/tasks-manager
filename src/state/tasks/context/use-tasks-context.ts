import React from "react";

import { TTasksState, initialState } from "../tasks.reducer";
import { EFilters } from "../tasks.types";
import {
  createTaskAction,
  updateTaskTextAction,
  removeTaskAction,
  toggleTaskStatusAction,
  setTasksFilterAction,
  changeTaskOrderAction,
} from "../tasks.actions";

export const TasksContext = React.createContext<{
  tasks: TTasksState["tasks"];
  filter: EFilters;
  createTask: (...args: Parameters<typeof createTaskAction>) => void;
  updateTaskText: (...args: Parameters<typeof updateTaskTextAction>) => void;
  removeTask: (...args: Parameters<typeof removeTaskAction>) => void;
  toggleTaskStatus: (
    ...args: Parameters<typeof toggleTaskStatusAction>
  ) => void;
  setTasksFilter: (...args: Parameters<typeof setTasksFilterAction>) => void;
  changeTaskOrder: (...args: Parameters<typeof changeTaskOrderAction>) => void;
}>({
  tasks: initialState.tasks,
  filter: initialState.filter,
  createTask: () => undefined,
  updateTaskText: () => undefined,
  removeTask: () => undefined,
  toggleTaskStatus: () => undefined,
  setTasksFilter: () => undefined,
  changeTaskOrder: () => undefined,
});

export const useTasksContext = () => {
  return React.useContext(TasksContext);
};
