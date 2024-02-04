import { EFilters } from "./tasks.types";

export enum EActionTypes {
  CREATE_TASK = "CREATE_TASK",
  UPDATE_TASK_TEXT = "UPDATE_TASK_TEXT",
  REMOVE_TASK = "REMOVE_TASK",
  TOGGLE_TASK_STATUS = "TOGGLE_TASK_STATUS",
  SET_TASKS_FILTER = "SET_TASKS_FILTER",
  CHANGE_TASK_ORDER = "CHANGE_TASK_ORDER",
}

export const createTaskAction = (text: string) => ({
  type: EActionTypes.CREATE_TASK as const,
  payload: text,
});

export const updateTaskTextAction = (taskId: string, newText: string) => ({
  type: EActionTypes.UPDATE_TASK_TEXT as const,
  payload: {
    taskId,
    newText,
  },
});

export const removeTaskAction = (taskId: string) => ({
  type: EActionTypes.REMOVE_TASK as const,
  payload: taskId,
});

export const toggleTaskStatusAction = (taskId: string) => ({
  type: EActionTypes.TOGGLE_TASK_STATUS as const,
  payload: taskId,
});

export const setTasksFilterAction = (filter: EFilters) => ({
  type: EActionTypes.SET_TASKS_FILTER as const,
  payload: filter,
});

export const changeTaskOrderAction = (fromIndex: number, toIndex: number) => ({
  type: EActionTypes.CHANGE_TASK_ORDER as const,
  payload: {
    fromIndex,
    toIndex,
  },
});

export type TAction = ReturnType<
  | typeof createTaskAction
  | typeof updateTaskTextAction
  | typeof removeTaskAction
  | typeof toggleTaskStatusAction
  | typeof setTasksFilterAction
  | typeof changeTaskOrderAction
>;
