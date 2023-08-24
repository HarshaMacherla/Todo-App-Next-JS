import { todoActions } from "@/store/todo-slice";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const TodoItems = () => {
  const todos = useSelector((state) => state.todo.pending);

  const dispatch = useDispatch();

  const handleDeleteTodo = (todo) => {
    dispatch(todoActions.removeTodo(todo));
  };

  const handleCompletedTodo = (todo) => {
    dispatch(todoActions.completedTodo(todo));
  };

  const todoItems = todos.map((todo) => {
    console.log(todo);

    return (
      <tr key={todo.id}>
        <td>{todo.title}</td>
        <td>
          <button
            className="btn btn-success"
            onClick={() => handleCompletedTodo(todo)}
          >
            ✓
          </button>
        </td>
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

export default TodoItems;
