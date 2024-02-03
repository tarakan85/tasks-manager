import { useReducer, useCallback, ReactNode, FC, useMemo } from "react";

import { TasksContext } from "./use-tasks-context";
import { reducer, initialState } from "../tasks.reducer";
import {
  createTaskAction,
  updateTaskTextAction,
  removeTaskAction,
  toggleTaskStatusAction,
  setTasksFilterAction,
} from "../tasks.actions";
import { EFilters, Task } from "../tasks.types";

type TFilterFn = (task: Task) => boolean;

const filterFnMap: Partial<Record<EFilters, TFilterFn>> = {
  [EFilters.SHOW_ACTIVE]: (task: Task) => !task.isComplete,
  [EFilters.SHOW_COMPLETED]: (task: Task) => task.isComplete,
};

const applyTasksFilter = (tasks: Task[], filter: EFilters) => {
  if (filter in filterFnMap) {
    const filterFn = filterFnMap[filter]!;
    return tasks.filter(filterFn);
  }

  return tasks;
};

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

  const { tasks, filter } = state;

  const filteredTasks = useMemo(() => {
    return applyTasksFilter(tasks, filter);
  }, [tasks, filter]);

  return (
    <TasksContext.Provider
      value={{
        tasks: filteredTasks,
        filter,
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
