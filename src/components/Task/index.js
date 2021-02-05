import React from "react";
import { TaskCard, Title, Desc, TaskArea } from "./styled";
import { Button } from "../../styled";

function Task({ task, removeTask }) {
  const { name, desc, id } = task;
  return (
    <TaskCard>
      <TaskArea>
        <Title>{name}</Title>
        <Desc>{desc}</Desc>
      </TaskArea>
      <Button
        delete
        onClick={() => {
          removeTask(id);
        }}
      >
        delete
      </Button>
    </TaskCard>
  );
}

export default Task;
