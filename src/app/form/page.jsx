"use client";
import { useState } from "react";
import formaction from "./action";

function Form() {
  const [task, setTask] = useState([
    {
      id: Date.now(),
      task: "Task 1",
      priority: "High",
      status: "on",
    },
  ]);

  async function handleSubmit(e) {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const result = await formaction(formdata);
    const newTask = {
      id: Date.now(),
      task: formdata.get("task"),
      priority: formdata.get("priority"),
      status: formdata.get("status"),
    };
    setTask((prev) => [...prev, newTask]);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="task" type="text" placeholder="Task" value={task.task} />
        <input
          name="priority"
          value={task.priority}
          type="text"
          placeholder="Priority"
        />
        <select name="status" value={task.status}>
          <option value="on">Completed</option>
          <option value="of">Pending</option>
        </select>

        <button type="submit">Submit</button>
      </form>
      <ul>
        {task.map((task) => (
          <li key={task.id}>
            {task.task} | {task.priority} | {task.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Form;
