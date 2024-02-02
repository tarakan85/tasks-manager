import { Action, ActionType } from "./actions";

export interface AppState {
  count: number;
}

export const initialState: AppState = {
  count: 0,
};

export function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case ActionType.INCREMENT:
      return { ...state, count: state.count + 1 };
    case ActionType.DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}
