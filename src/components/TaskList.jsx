import TaskCard from "./TaskCard";
import { useContext } from "react";
import Col from "react-bootstrap/Col";

import { TaskContext } from "../context/TaskContext";
function TaskList() {
  const { tasks, deleteTask } = useContext(TaskContext);
  return (
    <>
      {tasks.map((tarea) => {
        return (
          <Col key={tarea.id}>
            <TaskCard  tarea={tarea} deleteTask={deleteTask} />
          </Col>
        );
      })}
    </>
  );
}

export default TaskList;
