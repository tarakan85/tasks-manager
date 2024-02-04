import {
  TTasksState,
  defaultState as defaultTasksState,
} from "~/state/tasks/tasks.reducer";

export const saveTasksState = (tasksState: TTasksState) => {
  localStorage.setItem("tasksState", JSON.stringify(tasksState));
};

export const getTasksState = () => {
  const stateJson = localStorage.getItem("tasksState");

  if (stateJson) {
    return JSON.parse(stateJson) as TTasksState;
  }

  return defaultTasksState;
};
