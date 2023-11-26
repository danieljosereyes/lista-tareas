import { createContext, useState, useEffect } from "react";
import { tareas as data } from "../data/tareas";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(taskObjet) {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        tarea: taskObjet.title,
        parrafo: taskObjet.descripction,
      },
    ]);
  }

  function deleteTask(id) {
    const eliminar = tasks.filter((t) => t.id !== id);
    setTasks(eliminar);
  }
  return (
    <TaskContext.Provider value={{ tasks, createTask, deleteTask, MySwal }}>
      {props.children}
    </TaskContext.Provider>
  );
}
