export enum EActionTypes {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
}

export type TActionWithPayload<TActionPayload = undefined> = {
  type: EActionTypes;
  payload?: TActionPayload;
};

export const incrementAction = (): TActionWithPayload => ({
  type: EActionTypes.INCREMENT,
});
export const decrementAction = (): TActionWithPayload<string> => ({
  type: EActionTypes.DECREMENT,
});

export type TAction =
  | ReturnType<typeof incrementAction>
  | ReturnType<typeof decrementAction>;

type TExtracActionPayload<T extends TAction> = T extends TActionWithPayload<
  infer P
>
  ? P
  : never;

export type TActionPayload = TExtracActionPayload<TAction>;
