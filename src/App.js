import "./App.css";
import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Task from "./components/Task";
import { v4 as uuid } from "uuid";
import { Wrapper, Content, Title } from "./styled";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("vzletTasks"));
    if (storedTasks) setTasks([...storedTasks]);
  }, []);
  useEffect(() => {
    localStorage.setItem("vzletTasks", JSON.stringify(tasks));
  });

  const addTasks = (task) => {
    setTasks([...tasks, { id: uuid(), ...task }]);
  };
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const getSortedTasks = (tasks) => {
    if (!tasks.length) return;
    return tasks
      .sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      })
      .map((item) => (
        <Task key={item.id} task={item} removeTask={removeTask} />
      ));
  };

  return (
    <Wrapper>
      <Content>
        <Title>Create to-do</Title>
        <AddTask onSubmit={addTasks} />
        {getSortedTasks(tasks)}
      </Content>
    </Wrapper>
  );
}

export default App;
