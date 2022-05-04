import { MongoClient, ServerApiVersion } from "mongodb";

const uri = "mongodb+srv://admin:abcd1234@doc.ldlvm.mongodb.net/dev?retryWrites=true&w=majority";
export const client = new MongoClient(uri, { useNewUrlParser: false, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });