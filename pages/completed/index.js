import { todoActions } from "@/store/todo-slice";
import { MongoClient } from "mongodb";
import { useDispatch } from "react-redux";

const { default: CompletedTodos } = require("@/components/CompletedTodos");

const CompletedTodosPage = ({ todos }) => {
  const dispatch = useDispatch();

  dispatch(todoActions.loadTodos(todos));

  return (
    <>
      <CompletedTodos />
    </>
  );
};

export const getStaticProps = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://harsha3997:9gUOjL42ggP7D2Tx@cluster0.spc5qyk.mongodb.net/?retryWrites=true&w=majority"
  );

  const db = client.db();

  const todosCollection = db.collection("todos");

  const todos = await todosCollection.find().toArray();

  client.close();

  return {
    props: {
      todos: todos.map((todo) => ({
        title: todo.title,
        status: todo.status,
        _id: todo._id.toString(),
      })),
    },
    revalidate: 1,
  };
};

export default CompletedTodosPage;
