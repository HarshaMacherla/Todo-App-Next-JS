import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://harsha3997:9gUOjL42ggP7D2Tx@cluster0.spc5qyk.mongodb.net/?retryWrites=true&w=majority"
    );

    const db = client.db();

    const todosCollection = db.collection("todos");

    const result = await todosCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ _id: result.insertedId });
  }
};

export default handler;
