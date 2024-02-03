import { nanoid } from "nanoid";

import { TAction, EActionTypes } from "./tasks.actions";
import { Task, EFilters } from "./tasks.types";

export type TTasksState = {
  tasks: Task[];
  filter: EFilters;
};

export const initialState: TTasksState = {
  tasks: [
    { text: "hello", id: nanoid(), isComplete: false },
    { text: "world", id: nanoid(), isComplete: false },
  ],
  filter: EFilters.SHOW_ALL,
};

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
            isComplete: false,
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
        tasks: state.tasks.filter((task) => task.id === action.payload),
      };

    case EActionTypes.TOGGLE_TASK_STATUS:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, isComplete: !task.isComplete }
            : task
        ),
      };

    case EActionTypes.SET_TASKS_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};
