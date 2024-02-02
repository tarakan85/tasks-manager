import { useReducer, useCallback, ReactNode, FC } from "react";
import { AppContext } from "./useAppContext";
import { reducer, initialState } from "./reducer";
import { createTaskAction } from "./actions";

export type TAppContextProviderProps = {
  children: ReactNode;
};

export const AppContextProvider: FC<TAppContextProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const createTask = useCallback(
    (text: string) => dispatch(createTaskAction(text)),
    [dispatch]
  );

  return (
    <AppContext.Provider value={{ state, createTask }}>
      {children}
    </AppContext.Provider>
  );
};
