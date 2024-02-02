import { TAction, EActionTypes, TActionPayload } from "./actions";

export type TAppState = {
  count: number;
};

export const initialState: TAppState = {
  count: 0,
};

type TReducerMap = Record<
  EActionTypes,
  (state: TAppState, payload?: TActionPayload) => TAppState
>;

const reducerMap: TReducerMap = {
  [EActionTypes.INCREMENT]: (state: TAppState) => ({
    ...state,
    count: state.count + 1,
  }),
  [EActionTypes.DECREMENT]: (state: TAppState) => ({
    ...state,
    count: state.count - 1,
  }),
};

export function reducer(state: TAppState, action: TAction): TAppState {
  if (action.type in reducerMap) {
    return reducerMap[action.type](state, action.payload);
  }

  return state;
}
