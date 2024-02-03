import React from "react";
import { Box } from "@mui/material";

import { TaskItem } from "~/components/task-item/task-item.components";
import { useTasksContext } from "~/state/tasks/context/use-tasks-context";

export const TasksList = () => {
  const { tasks, updateTaskText, toggleTaskStatus } = useTasksContext();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        overflow: "auto",
      }}
    >
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          {...task}
          onEditConfirm={(newText) => {
            updateTaskText(task.id, newText);
          }}
          onToggle={() => toggleTaskStatus(task.id)}
        />
      ))}
    </Box>
  );
};
