import { useReducer, useCallback, ReactNode, FC } from "react";
import { AppContext } from "./useAppContext";
import { reducer, initialState } from "./reducer";
import { incrementAction, decrementAction } from "./actions";

export type TAppContextProviderProps = {
  children: ReactNode;
};

export const AppContextProvider: FC<TAppContextProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = useCallback(() => dispatch(incrementAction()), [dispatch]);
  const decrement = useCallback(() => dispatch(decrementAction()), [dispatch]);

  return (
    <AppContext.Provider value={{ state, increment, decrement }}>
      {children}
    </AppContext.Provider>
  );
};
