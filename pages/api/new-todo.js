import { MongoClient, ObjectId } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://harsha3997:9gUOjL42ggP7D2Tx@cluster0.spc5qyk.mongodb.net/?retryWrites=true&w=majority"
    );

    const db = client.db();

    const todosCollection = db.collection("todos");

    const result = await todosCollection.insertOne(data);

    client.close();

    res.status(201).json({ _id: result.insertedId });
  } else if (req.method === "PUT") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://harsha3997:9gUOjL42ggP7D2Tx@cluster0.spc5qyk.mongodb.net/?retryWrites=true&w=majority"
    );

    const db = client.db();

    const todosCollection = db.collection("todos");

    const result = await todosCollection.updateOne(
      { _id: new ObjectId(data._id) },
      { $set: { status: data.status } }
    );

    client.close();

    res.status(201).json({ updateStats: "Updated Successfully" });
  } else if (req.method === "DELETE") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://harsha3997:9gUOjL42ggP7D2Tx@cluster0.spc5qyk.mongodb.net/?retryWrites=true&w=majority"
    );

    const db = client.db();

    const todosCollection = db.collection("todos");

    const result = await todosCollection.deleteOne({
      _id: new ObjectId(data._id),
    });

    client.close();

    if (result.deletedCount === 1) {
      res.status(200).json({ message: "Deleted Successfully" });
    } else {
      res.status(404).json({ message: "Todo not found" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
};

export default handler;
