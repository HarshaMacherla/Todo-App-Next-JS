import { todoActions } from "@/store/todo-slice";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";

const AddTodoForm = ({ setShowAddTodo }) => {
  const todoRef = useRef();

  const dispatch = useDispatch();

  const handleAddTodo = async () => {
    const newTodo = todoRef.current.value;

    const response = await fetch("/api/new-todo", {
      method: "POST",
      body: JSON.stringify({ title: newTodo }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();

    dispatch(todoActions.addNewTodo({ ...data, title: newTodo }));

    setShowAddTodo(false);
  };

  return (
    <>
      <div className="form-floating border rounded p-3">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea"
          ref={todoRef}
          required
        ></textarea>
        <label htmlFor="floatingTextarea" className="mx-2 form-label">
          New Todo
        </label>
        <div className="text-end mt-3">
          <button
            className="btn btn-outline-info mx-2"
            onClick={() => setShowAddTodo(false)}
          >
            Cancel
          </button>
          <button className="btn btn-info" onClick={handleAddTodo}>
            Add Task
          </button>
        </div>
      </div>
    </>
  );
};

export default AddTodoForm;
