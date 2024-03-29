import { nanoid } from "nanoid";

import { TAction, EActionTypes } from "./tasks.actions";
import { Task, EFilters } from "./tasks.types";
import * as storage from "~/services/storage.service";
import { cutAndInsertAfter } from "~/utils/array.utils";

export type TTasksState = {
  tasks: Task[];
  filter: EFilters;
};

export const defaultState: TTasksState = {
  tasks: [],
  filter: EFilters.SHOW_ALL,
};

export const initialState = storage.getTasksState();

export const reducer = (state: TTasksState, action: TAction): TTasksState => {
  switch (action.type) {
    case EActionTypes.CREATE_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: nanoid(),
            text: action.payload,
            isCompleted: false,
          },
        ],
      };

    case EActionTypes.UPDATE_TASK_TEXT:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.taskId
            ? { ...task, text: action.payload.newText }
            : task
        ),
      };

    case EActionTypes.REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case EActionTypes.TOGGLE_TASK_STATUS:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, isCompleted: !task.isCompleted }
            : task
        ),
      };

    case EActionTypes.SET_TASKS_FILTER:
      return {
        ...state,
        filter: action.payload,
      };

    case EActionTypes.CHANGE_TASK_ORDER:
      return {
        ...state,
        tasks: cutAndInsertAfter(
          state.tasks,
          action.payload.fromIndex,
          action.payload.toIndex
        ),
      };

    default:
      return state;
  }
};
