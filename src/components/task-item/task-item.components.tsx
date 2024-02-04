import React from "react";

import {
  Box,
  IconButton,
  Typography,
  Checkbox,
  Divider,
  TextField,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import { Task } from "~/state/tasks/tasks.types";

export type TTaskItemProps = Task & {
  onEditConfirm: (newText: string) => void;
  onToggle: () => void;
  onRemove: () => void;
  dragElem?: React.ReactNode;
};

export const TaskItem: React.FC<TTaskItemProps> = ({
  text,
  isCompleted,
  onEditConfirm,
  onToggle,
  onRemove,
  dragElem,
}) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [editValue, setEditValue] = React.useState(text);
  const editInputRef = React.useRef<HTMLInputElement>(null);

  const handleEditStart = () => {
    setIsEditing(true);
  };

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

  const handleInputEnterKey = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    if (ev.key === "Enter") {
      handleEditConfirm();
    }
  };

  React.useEffect(() => {
    if (isEditing) {
      editInputRef.current?.focus();
    }
  }, [isEditing]);

  const viewModeElem = (
    <>
      <Typography
        variant="body1"
        sx={[
          isCompleted && {
            textDecoration: "line-through",
          },
          { wordBreak: "break-word", marginTop: "10px" },
        ]}
      >
        {text}
      </Typography>
      <IconButton
        aria-label="edit-task"
        size="small"
        onClick={handleEditStart}
        sx={{ marginLeft: "auto" }}
      >
        <EditIcon />
      </IconButton>
      <IconButton
        aria-label="remove-task"
        size="small"
        onClick={onRemove}
        color="error"
      >
        <DeleteForeverIcon />
      </IconButton>
    </>
  );

  const editModeElem = (
    <>
      <TextField
        fullWidth
        placeholder="Task text"
        variant="standard"
        defaultValue={text}
        onChange={handleInputChange}
        InputProps={{
          disableUnderline: true,
        }}
        inputProps={{
          style: {
            padding: "0 0 1px",
            textDecoration: isCompleted ? "line-through" : "none",
          },
        }}
        sx={{ marginTop: "10px" }}
        inputRef={editInputRef}
        onKeyDown={handleInputEnterKey}
      />
      <IconButton
        aria-label="confirm-task-edit"
        size="small"
        onClick={handleEditConfirm}
        color="success"
      >
        <CheckIcon />
      </IconButton>
      <IconButton
        aria-label="close-task-edit"
        size="small"
        onClick={handleEditClose}
      >
        <CloseIcon />
      </IconButton>
    </>
  );

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "start",
          gap: "4px",
          minHeight: "37px",
        }}
      >
        {dragElem && dragElem}
        <Checkbox
          onChange={onToggle}
          checked={isCompleted}
          size="small"
          sx={{ padding: "4px", marginTop: "8px" }}
        />
        {isEditing ? editModeElem : viewModeElem}
      </Box>
      <Divider />
    </div>
  );
};
