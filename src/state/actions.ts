export enum EActionTypes {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
}

export const incrementAction = () => ({ type: EActionTypes.INCREMENT });
export const decrementAction = () => ({ type: EActionTypes.DECREMENT });

export type TAction =
  | ReturnType<typeof incrementAction>
  | ReturnType<typeof decrementAction>;
