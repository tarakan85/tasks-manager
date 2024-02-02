import { TAction, EActionTypes } from "./actions";
import { Task, EFilters } from "./types";

export type TAppState = {
  tasks: Task[];
  filter: EFilters;
};

export const initialState: TAppState = {
  tasks: [],
  filter: EFilters.SHOW_ALL,
};

export function reducer(state: TAppState, action: TAction): TAppState {
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
}
