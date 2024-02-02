import { createContext, useContext } from "react";
import { TAppState, initialState } from "./reducer";
import { createTaskAction } from "./actions";

export const AppContext = createContext<{
  state: TAppState;
  createTask: (...args: Parameters<typeof createTaskAction>) => void;
}>({
  state: initialState,
  createTask: () => undefined,
});

export function useAppContext() {
  return useContext(AppContext);
}
