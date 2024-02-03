import { Box } from "@mui/material";

import { CreateTaskInput } from "~/components/create-task-input/create-task-input.component";
import { TasksList } from "~/components/tasks-list/tasks-list.component";
import { TasksFilters } from "~/components/tasks-filters/tasks-filters.component";

export const TaskManager = () => {
  return (
    <Box>
      <CreateTaskInput />
      <TasksList />
      <TasksFilters />
    </Box>
  );
};
