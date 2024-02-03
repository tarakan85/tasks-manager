export enum EActionTypes {
  CREATE_TASK = "CREATE_TASK",
}

export const createTaskAction = (text: string) => ({
  type: EActionTypes.CREATE_TASK,
  payload: text,
});

export type TAction = ReturnType<typeof createTaskAction>;
