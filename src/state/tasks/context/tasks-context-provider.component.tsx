import { useReducer, useCallback, ReactNode, FC } from "react";
import { TasksContext } from "./use-tasks-context";
import { reducer, initialState } from "../tasks.reducer";
import { createTaskAction } from "../tasks.actions";

export type TTasksContextProviderProps = {
  children: ReactNode;
};

export const TasksContextProvider: FC<TTasksContextProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const createTask = useCallback(
    (text: string) => dispatch(createTaskAction(text)),
    [dispatch]
  );

  return (
    <TasksContext.Provider value={{ state, createTask }}>
      {children}
    </TasksContext.Provider>
  );
};
