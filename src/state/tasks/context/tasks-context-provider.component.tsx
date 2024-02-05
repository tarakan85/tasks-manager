import React from "react";
import { TasksContext } from "./use-tasks-context";
import { reducer, initialState } from "../tasks.reducer";
import {
  createTaskAction,
  updateTaskTextAction,
  removeTaskAction,
  toggleTaskStatusAction,
  setTasksFilterAction,
  changeTaskOrderAction,
} from "../tasks.actions";
import { EFilters, Task } from "../tasks.types";
import * as storage from "~/services/storage.service";

type TFilterFn = (task: Task) => boolean;

const filterFnMap: Partial<Record<EFilters, TFilterFn>> = {
  [EFilters.SHOW_ACTIVE]: (task: Task) => !task.isCompleted,
  [EFilters.SHOW_COMPLETED]: (task: Task) => task.isCompleted,
};

const applyTasksFilter = (tasks: Task[], filter: EFilters) => {
  if (filter in filterFnMap) {
    const filterFn = filterFnMap[filter]!;
    return tasks.filter(filterFn);
  }

  return tasks;
};

export type TTasksContextProviderProps = {
  children: React.ReactNode;
};

export const TasksContextProvider: React.FC<TTasksContextProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const createTask = React.useCallback(
    (text: string) => dispatch(createTaskAction(text)),
    [dispatch]
  );

  const updateTaskText = React.useCallback(
    (taskId: string, newText: string) => {
      dispatch(updateTaskTextAction(taskId, newText));
    },
    [dispatch]
  );

  const removeTask = React.useCallback(
    (taskId: string) => {
      dispatch(removeTaskAction(taskId));
    },
    [dispatch]
  );

  const toggleTaskStatus = React.useCallback(
    (taskId: string) => {
      dispatch(toggleTaskStatusAction(taskId));
    },
    [dispatch]
  );

  const setTasksFilter = React.useCallback(
    (filter: EFilters) => {
      dispatch(setTasksFilterAction(filter));
    },
    [dispatch]
  );

  const changeTaskOrder = React.useCallback(
    (fromIndex: number, toIndex: number) => {
      dispatch(changeTaskOrderAction(fromIndex, toIndex));
    },
    [dispatch]
  );

  const { tasks, filter } = state;

  const filteredTasks = React.useMemo(() => {
    return applyTasksFilter(tasks, filter);
  }, [tasks, filter]);

  React.useEffect(() => {
    storage.saveTasksState(state);
  }, [state]);

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
        changeTaskOrder,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
