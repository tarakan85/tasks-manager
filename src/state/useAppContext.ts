import { createContext, useContext } from "react";
import { AppState, initialState } from "./reducer";
import { incrementAction, decrementAction } from "./actions";

export const AppContext = createContext<{
  state: AppState;
  increment: (...args: Parameters<typeof incrementAction>) => void;
  decrement: (...args: Parameters<typeof decrementAction>) => void;
}>({
  state: initialState,
  increment: () => undefined,
  decrement: () => undefined,
});

export function useAppContext() {
  return useContext(AppContext);
}
