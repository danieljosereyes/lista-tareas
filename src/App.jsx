import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <Container>
      <Row>
        <TaskForm></TaskForm>
      </Row>
      <Row>
        <TaskList></TaskList>
      </Row>
    </Container>
  );
}

export default App;
