export enum EActionTypes {
  CREATE_TASK = "CREATE_TASK",
  UPDATE_TASK_TEXT = "UPDATE_TASK_TEXT",
  REMOVE_TASK = "REMOVE_TASK",
  TOGGLE_TASK_STATUS = "TOGGLE_TASK_STATUS",
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

export type TAction = ReturnType<
  | typeof createTaskAction
  | typeof updateTaskTextAction
  | typeof removeTaskAction
  | typeof toggleTaskStatusAction
>;
