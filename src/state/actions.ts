export enum ActionType {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
}

export const incrementAction = () => ({ type: ActionType.INCREMENT });
export const decrementAction = () => ({ type: ActionType.DECREMENT });

export type Action =
  | ReturnType<typeof incrementAction>
  | ReturnType<typeof decrementAction>;
