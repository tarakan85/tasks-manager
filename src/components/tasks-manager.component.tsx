import { Box, Paper, Typography } from "@mui/material";

import { CreateTaskInput } from "./create-task-input.component";
import { TasksList } from "./tasks-list.component";
import { TasksFilters } from "./tasks-filters.component";

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
          width: 500,
          height: ["calc(100vh - 48px)", 720],
          display: "flex",
          flexDirection: "column",
          padding: 3,
          gap: 3,
        }}
        elevation={4}
      >
        <Typography variant="h4" textAlign="center" mb={-2}>
          Tasks manager
        </Typography>
        <CreateTaskInput />
        <TasksList />
        <TasksFilters />
      </Paper>
    </Box>
  );
};
