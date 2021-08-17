import { useState } from "react";
import Input from "../Input/Input";

const TaskList = () => {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState("");

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const onSaveTask = () => {
    setTaskList([...taskList, task]);
    setTask("");
  };

  return (
    <>
      <section>
        <label>Digite a tarefa:</label>
        <Input
          ariaLabel="Salvar Tarefa"
          id="tarefa"
          name="tarefas"
          type="text"
          handleChange={handleChange}
          addTask={onSaveTask}
          value={task}
        />
        <ul>
          {taskList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default TaskList;
