import React from "react";
import Radio from "@mui/material/Radio";
import { RadioGroup, FormControlLabel, FormControl } from "@mui/material";

import { useTasksContext } from "~/state/tasks/context/use-tasks-context";
import { EFilters } from "~/state/tasks/tasks.types";

export const TasksFilters = () => {
  const { setTasksFilter, filter } = useTasksContext();

  const handleFilterChange = (
    _ev: React.ChangeEvent<HTMLInputElement>,
    filter: string
  ) => {
    setTasksFilter(filter as EFilters);
  };

  return (
    <FormControl sx={{ marginTop: "auto" }}>
      <RadioGroup
        row
        aria-labelledby="tasks-filter-label"
        name="tasks-filter-radio-buttons-group"
        value={filter}
        onChange={handleFilterChange}
        sx={{ justifyContent: "space-evenly" }}
      >
        <FormControlLabel
          value={EFilters.SHOW_ALL}
          control={<Radio />}
          label="All"
        />
        <FormControlLabel
          value={EFilters.SHOW_ACTIVE}
          control={<Radio />}
          label="Active"
        />
        <FormControlLabel
          value={EFilters.SHOW_COMPLETED}
          control={<Radio />}
          label="Completed"
        />
      </RadioGroup>
    </FormControl>
  );
};
