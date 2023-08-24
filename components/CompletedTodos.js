import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const CompletedTodos = () => {
  const completedTodos = useSelector((state) => state.todo.completed);

  const todoItems = completedTodos.map((todo) => {
    console.log(todo);

    return (
      <tr key={todo.id}>
        <td>{todo.title}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => handleDeleteTodo(todo)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <Table>
        <tbody>{todoItems}</tbody>
      </Table>
    </>
  );
};

export default CompletedTodos;
