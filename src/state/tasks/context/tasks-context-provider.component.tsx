import { useReducer, useCallback, ReactNode, FC } from "react";

import { TasksContext } from "./use-tasks-context";
import { reducer, initialState } from "../tasks.reducer";
import {
  createTaskAction,
  updateTaskTextAction,
  removeTaskAction,
  toggleTaskStatusAction,
  setTasksFilterAction,
} from "../tasks.actions";
import { EFilters } from "../tasks.types";

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

  const updateTaskText = useCallback(
    (taskId: string, newText: string) => {
      dispatch(updateTaskTextAction(taskId, newText));
    },
    [dispatch]
  );

  const removeTask = useCallback(
    (taskId: string) => {
      dispatch(removeTaskAction(taskId));
    },
    [dispatch]
  );

  const toggleTaskStatus = useCallback(
    (taskId: string) => {
      dispatch(toggleTaskStatusAction(taskId));
    },
    [dispatch]
  );

  const setTasksFilter = useCallback(
    (filter: EFilters) => {
      dispatch(setTasksFilterAction(filter));
    },
    [dispatch]
  );

  return (
    <TasksContext.Provider
      value={{
        state,
        createTask,
        updateTaskText,
        removeTask,
        toggleTaskStatus,
        setTasksFilter,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
