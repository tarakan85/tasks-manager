import { TAction, EActionTypes } from "./actions";

export type TAppState = {
  count: number;
};

export const initialState: TAppState = {
  count: 0,
};

export function reducer(state: TAppState, action: TAction): TAppState {
  switch (action.type) {
    case EActionTypes.INCREMENT:
      return { ...state, count: state.count + 1 };
    case EActionTypes.DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}
