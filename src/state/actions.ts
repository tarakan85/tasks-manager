export enum EAction {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
}

export const incrementAction = () => ({ type: EAction.INCREMENT });
export const decrementAction = () => ({ type: EAction.DECREMENT });

export type TAction =
  | ReturnType<typeof incrementAction>
  | ReturnType<typeof decrementAction>;
