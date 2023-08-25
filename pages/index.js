import Head from "next/head";
import Todos from "@/components/Todos";
import { MongoClient } from "mongodb";
import { useDispatch } from "react-redux";
import { todoActions } from "@/store/todo-slice";

const Todo = ({ todos }) => {
  const dispatch = useDispatch();

  dispatch(todoActions.loadTodos(todos));
  return (
    <>
      <Head>
        <title>Todo App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Todos />
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

  console.log(todos);

  client.close();

  return {
    props: {
      todos: todos.map((todo) => ({
        title: todo.title,
        status: todo.status,
        id: todo._id.toString(),
      })),
    },
    revalidate: 1,
  };
};

export default Todo;
