import { Container, Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const CompletedTodos = () => {
  const completedTodos = useSelector((state) => state.todo.todos);

  const todoItems = completedTodos
    .filter((todo) => todo.status === "complete")
    .map((todo) => {
      return (
        <tr key={todo._id} className="text-center">
          <td>{todo.title}</td>
        </tr>
      );
    });

  return (
    <>
      <Container className="m-5 mx-auto">
        <h3 className="text-center">Completed Todos</h3>
        <Table>
          <tbody>{todoItems}</tbody>
        </Table>
      </Container>
    </>
  );
};

export default CompletedTodos;
