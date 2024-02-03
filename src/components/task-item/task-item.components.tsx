import React from "react";
import Input from "@mui/material/Input";

import { Box, IconButton, Typography, Checkbox } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";

import { Task } from "~/state/tasks/tasks.types";

export type TTaskItemprops = Task & {
  onEditConfirm: (newText: string) => void;
  onToggle: () => void;
};

export const TaskItem: React.FC<TTaskItemprops> = ({
  text,
  isComplete,
  onEditConfirm,
  onToggle,
}) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [editValue, setEditValue] = React.useState("");

  const handleEditStart = () => setIsEditing(true);

  const handleEditConfirm = () => {
    setIsEditing(false);
    onEditConfirm(editValue);
  };

  const handleEditClose = () => {
    setIsEditing(false);
  };

  const handleInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setEditValue(ev.target.value);
  };

  return (
    <Box sx={{ display: "flex" }}>
      {isEditing ? (
        <>
          <Input defaultValue={text} onChange={handleInputChange} />
          <IconButton
            aria-label="confirm-task-edit"
            onClick={handleEditConfirm}
          >
            <CheckIcon />
          </IconButton>
          <IconButton aria-label="close-task-edit" onClick={handleEditClose}>
            <CloseIcon />
          </IconButton>
        </>
      ) : (
        <>
          <Checkbox onChange={onToggle} checked={isComplete} />
          <Typography
            variant="body2"
            sx={[isComplete && { textDecoration: "line-through" }]}
          >
            {text}
          </Typography>
          <IconButton aria-label="edit-task" onClick={handleEditStart}>
            <EditIcon />
          </IconButton>
        </>
      )}
    </Box>
  );
};
