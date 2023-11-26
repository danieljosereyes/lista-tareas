import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function TaskForm() {
  const [title, settitle] = useState("");

  const [descripction, setDescripction] = useState("");

  const { createTask, MySwal } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title === "" ?? descripction == "") {
      MySwal.fire({
        position: "top-end",
        icon: "warning",
        title: "Los Campos no pueden estar vacios",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      createTask({ title, descripction });
      settitle("");
      setDescripction("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FloatingLabel
        controlId="floatingTextarea"
        label="Titulo"
        className="mb-3"
      >
        <Form.Control
          as="textarea"
          placeholder="titulo"
          autoFocus
          onChange={(e) => settitle(e.target.value)}
          value={title || ""}
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingTextarea2"
        label="Agrege una descripcion"
      >
        <Form.Control
          as="textarea"
          placeholder="Agrege cun comentario"
          style={{ height: "100px" }}
          onChange={(e) => setDescripction(e.target.value)}
          value={descripction || ""}
        />
      </FloatingLabel>
      <Button variant="dark" type="submit">
        Guardar
      </Button>
    </form>
  );
}

export default TaskForm;
