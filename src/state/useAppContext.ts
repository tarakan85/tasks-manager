import { createContext, useContext, useCallback } from "react";
import { TAppState, initialState } from "./reducer";
import { incrementAction, decrementAction, TAction } from "./actions";

export const AppContext = createContext<{
  state: TAppState;
  dispatch: (action: TAction) => void;
}>({
  state: initialState,
  dispatch: () => undefined,
});

export function useAppContext() {
  const { state, dispatch } = useContext(AppContext);

  const increment = useCallback(() => dispatch(incrementAction()), [dispatch]);
  const decrement = useCallback(() => dispatch(decrementAction()), [dispatch]);

  return {
    state,
    increment,
    decrement,
  };
}
