import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import { useTasksContext } from "~/state/tasks/context/use-tasks-context";
import { EFilters } from "~/state/tasks/tasks.types";

export const TasksFilters = () => {
  const { setTasksFilter, filter } = useTasksContext();

  const handleFilterChange = (
    ev: React.ChangeEvent<HTMLInputElement>,
    filter: string
  ) => {
    setTasksFilter(filter as EFilters);
  };

  return (
    <FormControl>
      <FormLabel id="tasks-filter-label">Tasks filter</FormLabel>
      <RadioGroup
        row
        aria-labelledby="tasks-filter-label"
        name="tasks-filter-radio-buttons-group"
        value={filter}
        onChange={handleFilterChange}
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
