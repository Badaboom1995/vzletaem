import React, { useState } from "react";
import { Wrapper, Input } from "./styled";
import { Button } from "../../styled";

function AddTask({ onSubmit }) {
  const initialTask = { name: "", desc: "" };
  const [task, setTask] = useState(initialTask);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(task);
    setTask(initialTask);
  };

  return (
    <Wrapper>
      <Input
        placeholder="Title"
        name="name"
        value={task.name}
        onChange={handleChange}
      />
      <Input
        placeholder="Description"
        name="desc"
        value={task.desc}
        onChange={handleChange}
      />
      <Button onClick={handleSubmit}>Add</Button>
    </Wrapper>
  );
}

export default AddTask;
