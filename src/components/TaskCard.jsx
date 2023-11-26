import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export function TaskCard({ tarea }) {
  const { deleteTask, MySwal } = useContext(TaskContext);
  // console.log(tasks)
  const handleClick = () => {
    MySwal.fire({
      title: 'Estas seguro que deseas eliminar?',
      text: "Este proceso no se puede revertir!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar esto!'
    }).then((result) => {
      
      if (result.isConfirmed) {
        deleteTask(tarea.id);
        MySwal.fire(
          'Eliminado!',
          'Su tarea a sido eliminada',
          'success'
        )
      }
    })
  };
  return (
    // <div>
    //   <h1>{tarea.tarea}</h1>
    //   <p>{tarea.parrafo}</p>

    //   <button onClick={handleClick}>eliminar</button>
    // </div>
    <Card>
      <Card.Body>
        <Card.Title>{tarea.tarea}</Card.Title>
        <Card.Text>
        {tarea.parrafo}
        </Card.Text>
        <Button variant="danger" onClick={handleClick}>Eliminar</Button>
      </Card.Body>
    </Card>
  );
}

export default TaskCard;
