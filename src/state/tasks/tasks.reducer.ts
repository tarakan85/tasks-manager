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
    default:
      return state;
  }
};
