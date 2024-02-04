export type Task = {
  id: string;
  text: string;
  isCompleted: boolean;
};

export enum EFilters {
  SHOW_ALL = "SHOW_ALL",
  SHOW_ACTIVE = "SHOW_ACTIVE",
  SHOW_COMPLETED = "SHOW_COMPLETED",
}
