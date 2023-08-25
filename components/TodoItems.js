import { todoActions } from "@/store/todo-slice";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const TodoItems = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todo.todos);

  const handleDeleteTodo = async (todo) => {
    const response = await fetch("/api/new-todo", {
      method: "DELETE",
      body: JSON.stringify(todo),
      headers: {
        "Content-type": "application/json",
      },
    });

    dispatch(todoActions.removeTodo(todo));
  };

  const handleCompletedTodo = async (todo) => {
    const response = await fetch("/api/new-todo", {
      method: "PUT",
      body: JSON.stringify({
        title: todo.title,
        _id: todo._id,
        status: "complete",
      }),
      headers: {
        "Content-type": "application/json",
      },
    });

    dispatch(
      todoActions.editTodo({
        title: todo.title,
        _id: todo._id,
        state: "complete",
      })
    );
  };

  const todoItems = todos
    .filter((todo) => todo.status === "incomplete")
    .map((todo) => (
      <tr key={todo._id}>
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
    ));

  return (
    <>
      <Table>
        <tbody>{todoItems}</tbody>
      </Table>
    </>
  );
};

export default TodoItems;
