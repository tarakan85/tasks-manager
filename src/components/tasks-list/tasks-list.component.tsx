import { Box, Typography } from "@mui/material";

import { TaskItem } from "~/components/task-item/task-item.components";
import { useTasksContext } from "~/state/tasks/context/use-tasks-context";

export const TasksList = () => {
  const { tasks, updateTaskText, toggleTaskStatus, removeTask } =
    useTasksContext();

  const emptyListElem = (
    <>
      <Typography variant="body1" fontWeight="bold" color="grey.600">
        No items to display
      </Typography>
      <Typography variant="body2" color="grey.700">
        Try adding some items!
      </Typography>
    </>
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        overflow: "auto",
      }}
    >
      {tasks.length === 0
        ? emptyListElem
        : tasks.map((task) => (
            <TaskItem
              key={task.id}
              {...task}
              onEditConfirm={(newText) => {
                updateTaskText(task.id, newText);
              }}
              onToggle={() => toggleTaskStatus(task.id)}
              onRemove={() => removeTask(task.id)}
            />
          ))}
    </Box>
  );
};
