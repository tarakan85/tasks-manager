import React from "react";
import Box from "@mui/material/Box";

import { TaskItem } from "~/components/task-item/task-item.components";
import { useTasksContext } from "~/state/tasks/context/use-tasks-context";

export const TasksList = () => {
  const { tasks, updateTaskText, toggleTaskStatus } = useTasksContext();
  return (
    <Box>
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
