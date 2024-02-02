import { createContext, useContext } from "react";
import { TAppState, initialState } from "./reducer";
import { incrementAction, decrementAction } from "./actions";

export const AppContext = createContext<{
  state: TAppState;
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
