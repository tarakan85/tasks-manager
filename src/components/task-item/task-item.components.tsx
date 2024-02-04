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

export type TTaskItemprops = Task & {
  onEditConfirm: (newText: string) => void;
  onToggle: () => void;
  onRemove: () => void;
};

export const TaskItem: React.FC<TTaskItemprops> = ({
  text,
  isCompleted,
  onEditConfirm,
  onToggle,
  onRemove,
}) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [editValue, setEditValue] = React.useState(text);
  const inputRef = React.useRef<HTMLInputElement>(null);

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
      inputRef.current?.focus();
    }
  }, [isEditing]);

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
        <Checkbox
          onChange={onToggle}
          checked={isCompleted}
          size="small"
          sx={{ padding: "4px", marginTop: "8px" }}
        />
        {isEditing ? (
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
              inputRef={inputRef}
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
        ) : (
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
        )}
      </Box>
      <Divider />
    </div>
  );
};
