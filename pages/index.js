import Head from "next/head";
import Todos from "@/components/Todos";

const Todo = () => {
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

export default Todo;
