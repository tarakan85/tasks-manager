import { Box, Paper, Typography } from "@mui/material";

import { CreateTaskInput } from "~/components/create-task-input/create-task-input.component";
import { TasksList } from "~/components/tasks-list/tasks-list.component";
import { TasksFilters } from "~/components/tasks-filters/tasks-filters.component";

export const TasksManager = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        padding: [3, 10],
        alignItems: "start",
      }}
    >
      <Paper
        sx={{
          width: 480,
          height: ["calc(100vh - 48px)", 680],
          display: "flex",
          flexDirection: "column",
          padding: 3,
          gap: 3,
        }}
        elevation={4}
      >
        <Typography variant="h5" textAlign="center" mb={-3}>
          Tasks manager
        </Typography>
        <CreateTaskInput />
        <TasksList />
        <TasksFilters />
      </Paper>
    </Box>
  );
};
