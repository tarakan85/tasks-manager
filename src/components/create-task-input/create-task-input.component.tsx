import React from "react";
import { Box, IconButton, Input } from "@mui/material";
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
    <Box>
      <Input
        value={inputValue}
        onChange={(ev) => setInputValue(ev.target.value)}
        onKeyDown={handleInputEnterKey}
      />
      <IconButton onClick={handleCreateTask}>
        <AddIcon aria-label="create task" />
      </IconButton>
    </Box>
  );
};
