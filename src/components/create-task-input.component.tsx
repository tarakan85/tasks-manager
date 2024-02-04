import React from "react";
import { Box, IconButton, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { useTasksContext } from "~/state/tasks/context/use-tasks-context";

export const CreateTaskInput = () => {
  const { createTask } = useTasksContext();

  const [inputValue, setInputValue] = React.useState("");

  const handleCreateTask = () => {
    createTask(inputValue);
    setInputValue("");
  };

  const handleInputEnterKey = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    if (ev.key === "Enter") {
      handleCreateTask();
    }
  };

  return (
    <Box sx={{ display: "flex", alignItems: "end", px: 3 }}>
      <TextField
        placeholder="Enter text"
        label="Create a task"
        variant="standard"
        value={inputValue}
        onChange={(ev) => setInputValue(ev.target.value)}
        onKeyDown={handleInputEnterKey}
        fullWidth
      />
      <IconButton size="small" color="primary" onClick={handleCreateTask}>
        <AddIcon fontSize="large" aria-label="create task" />
      </IconButton>
    </Box>
  );
};
