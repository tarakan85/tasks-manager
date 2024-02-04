import React from "react";
import { Box, IconButton, TextField, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { useTasksContext } from "~/state/tasks/context/use-tasks-context";

export const CreateTaskInput = () => {
  const { createTask } = useTasksContext();

  const [inputValue, setInputValue] = React.useState("");
  const [showTooltip, setShowTooltip] = React.useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout>();

  const handleCreateTask = () => {
    const inputIsEmpty = !inputValue.trim();

    if (inputIsEmpty) {
      setShowTooltip(true);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => setShowTooltip(false), 3000);
    } else {
      setShowTooltip(false);
      createTask(inputValue);
      setInputValue("");
    }
  };

  const handleInputEnterKey = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    if (ev.key === "Enter") {
      handleCreateTask();
    }
  };

  return (
    <Box sx={{ display: "flex", alignItems: "end", pl: 3 }}>
      <Tooltip
        open={showTooltip}
        title="Please fill out this field"
        placement="bottom"
        arrow
        slotProps={{
          popper: {
            modifiers: [
              {
                name: "offset",
                options: {
                  offset: [0, -4],
                },
              },
            ],
          },
        }}
      >
        <TextField
          placeholder="Enter text"
          label="Create a task"
          variant="standard"
          value={inputValue}
          onChange={(ev) => setInputValue(ev.target.value)}
          onKeyDown={handleInputEnterKey}
          fullWidth
        />
      </Tooltip>
      <IconButton size="small" color="primary" onClick={handleCreateTask}>
        <AddIcon fontSize="large" aria-label="create task" />
      </IconButton>
    </Box>
  );
};
