import { Box, Typography } from "@mui/material";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import {
  DragDropContext,
  Droppable,
  Draggable,
  OnDragEndResponder,
} from "react-beautiful-dnd";

import { useTasksContext } from "~/state/tasks/context/use-tasks-context";
import { TaskItem } from "./task-item.components";

export const TasksList = () => {
  const {
    tasks,
    updateTaskText,
    toggleTaskStatus,
    removeTask,
    changeTaskOrder,
  } = useTasksContext();

  const handleDragEnd: OnDragEndResponder = (result) => {
    if (!result.destination) {
      return;
    }

    changeTaskOrder(result.source.index, result.destination.index);
  };

  const emptyListElem = (
    <Box sx={{ px: 3 }}>
      <Typography
        variant="body1"
        fontWeight="bold"
        color="grey.600"
        fontSize="1.25rem"
      >
        No items to display
      </Typography>
      <Typography
        variant="body2"
        color="grey.700"
        sx={{ pl: 2 }}
        fontSize="1rem"
      >
        Try adding some items!
      </Typography>
    </Box>
  );

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <Box
            {...provided.droppableProps}
            ref={provided.innerRef}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              overflowY: "auto",
              flexGrow: 1,
            }}
          >
            {tasks.length === 0
              ? emptyListElem
              : tasks.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided) => (
                      <div ref={provided.innerRef} {...provided.draggableProps}>
                        <TaskItem
                          {...task}
                          onEditConfirm={(newText) => {
                            updateTaskText(task.id, newText);
                          }}
                          onToggle={() => toggleTaskStatus(task.id)}
                          onRemove={() => removeTask(task.id)}
                          dragElem={
                            <Box
                              {...provided.dragHandleProps}
                              sx={{
                                display: "flex",
                                alignItems: "end",
                                marginTop: "10px",
                                marginRight: "-6px",
                              }}
                            >
                              <DragIndicatorIcon />
                            </Box>
                          }
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
    </DragDropContext>
  );
};
