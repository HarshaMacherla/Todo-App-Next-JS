import { Container } from "react-bootstrap";
import AddTodoForm from "./AddTodoForm";
import { useState } from "react";
import TodoItems from "./TodoItems";

const Todos = () => {
  const [showAddTodo, setShowAddTodo] = useState(false);

  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();

  return (
    <>
      <Container className="m-5 mx-auto">
        <div>
          <h3 className="date">Today</h3>
          <p className="date">{`${day}-${month}-${year}`}</p>
        </div>

        {!showAddTodo && (
          <div>
            <button
              className=" btn btn-link text-decoration-none text-info"
              onClick={() => setShowAddTodo(true)}
            >
              + Add Task
            </button>
          </div>
        )}

        <div>
          <TodoItems />
        </div>

        {showAddTodo && <AddTodoForm setShowAddTodo={setShowAddTodo} />}
      </Container>
    </>
  );
};

export default Todos;
