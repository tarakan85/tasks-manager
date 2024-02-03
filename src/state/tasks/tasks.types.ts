export type Task = {
  id: string;
  text: string;
  isComplete: boolean;
};

export enum EFilters {
  SHOW_ALL = "SHOW_ALL",
  SHOW_ACTIVE = "SHOW_ACTIVE",
  SHOW_COMPLETED = "SHOW_COMPLETED",
}
