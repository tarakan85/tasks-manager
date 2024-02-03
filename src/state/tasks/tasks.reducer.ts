import { TAction, EActionTypes } from "./tasks.actions";
import { Task, EFilters } from "./tasks.types";

export type TTasksState = {
  tasks: Task[];
  filter: EFilters;
};

export const initialState: TTasksState = {
  tasks: [],
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
            id: Math.random().toString(),
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
    default:
      return state;
  }
};
