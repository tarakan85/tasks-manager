import { useState } from "react";

import { useTasksContext } from "~/state/tasks/context/use-tasks-context";

export const TaskManager = () => {
  const { tasks, createTask } = useTasksContext();

  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <input
        value={inputValue}
        onChange={(ev) => setInputValue(ev.target.value)}
      />
      <button
        onClick={() => {
          createTask(inputValue);
          setInputValue("");
        }}
      >
        create task
      </button>
      <code>{JSON.stringify(tasks, null, 2)}</code>
    </div>
  );
};
