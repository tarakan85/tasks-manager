import { useState } from "react";
import { useAppContext } from "../state/useAppContext";

export const TaskManager = () => {
  const { state, createTask } = useAppContext();

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
      <code>{JSON.stringify(state.tasks, null, 2)}</code>
    </div>
  );
};
