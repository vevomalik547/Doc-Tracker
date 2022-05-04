import { client } from "./connection.js";
import { ObjectId } from "mongodb";
const dbName = "dev";

export const addDoc = async (doc) => {
    try {
        await client.connect()
        const db = client.db(dbName);
        const documents = db.collection("documents");
        doc.createdAt = new Date().toISOString();
        doc._id = new ObjectId().toHexString();
        const dbResponse = await documents.insertOne(doc);
        return dbResponse
    } catch (e) {
        console.log(e);
        return null
    }
}

export const listDocsByPK = async (pk) => {
    try {
        await client.connect()
        const db = client.db(dbName);
        const documents = db.collection("documents");
        const cursor = documents.find({ publicKey: pk });
        let result = await cursor.toArray();
        return result;
    } catch (e) {
        return []
    }
}
// export const editDoc = async (id, doc) => {
//     const schema = doc;
//     try {
//         if (!client.isConnected()) {
//             // Cold start or connection timed out. Create new connection.
//             try {
//                 await createConn();
//             } catch (e) {
//                 return {
//                     code: 500,
//                     message: e,
//                     data: null,
//                 };
//             }
//         }
//         const db = client.db(dbName);
//         const documents = db.collection("documents");
//         schema.updatedAt = new Date().toISOString();

//         const dbResponse = await documents.updateOne(
//             { _id: id },
//             {
//                 $set: schema,
//                 // $currentDate: { lastModified: true }
//             }
//         );
//         return {
//             code: 200,
//             message: "success",
//             data: dbResponse ? schema : null,
//         };
//         // }
//     } catch (e) {
//         //console.log(e);
//         return {
//             code: 400,
//             message: e.errmsg,
//             data: null,
//         };
//     }
// }
// export const getDocByReceiver = async (receiver) => {
//     try {
//         if (!client.isConnected()) {
//             // Cold start or connection timed out. Create new connection.
//             try {
//                 await createConn();
//             } catch (e) {
//                 return {
//                     code: 500,
//                     message: e,
//                     data: null,
//                 };
//             }
//         }
//         const db = client.db(dbName);
//         const documents = db.collection("documents");

//         const cursor = documents.aggregate([
//             {
//                 $match: {
//                     receiver: receiver,
//                 },
//             },
//         ]);

//         let result = await cursor.toArray();
//         return {
//             code: 200,
//             message: "",
//             data: result.length > 0 ? result[0] : null,
//         };
//     } catch (e) {
//         return {
//             code: 400,
//             message: "failed",
//             data: null,
//         };
//     }
// }
// export const getDocById = async (id) => {
//     try {
//         if (!client.isConnected()) {
//             // Cold start or connection timed out. Create new connection.
//             try {
//                 await createConn();
//             } catch (e) {
//                 return {
//                     code: 500,
//                     message: e,
//                     data: null,
//                 };
//             }
//         }
//         const db = client.db(dbName);
//         const documents = db.collection("documents");

//         const cursor = documents.aggregate([
//             {
//                 $match: {
//                     _id: id,
//                 },
//             },
//         ]);

//         let result = await cursor.toArray();
//         return {
//             code: 200,
//             message: "",
//             data: result.length > 0 ? result[0] : null,
//         };
//     } catch (e) {
//         return {
//             code: 400,
//             message: "failed",
//             data: null,
//         };
//     }
// }
// export const listDocs = async () => {
//     try {
//         if (!client.isConnected()) {
//             // Cold start or connection timed out. Create new connection.
//             try {
//                 await createConn();
//             } catch (e) {
//                 return {
//                     code: 500,
//                     message: e,
//                     data: null,
//                 };
//             }
//         }
//         const db = client.db(dbName);
//         const documents = db.collection("documents");

//         const cursor = documents.find({});
//         let result = await cursor.toArray();
//         return {
//             code: 200,
//             message: "",
//             data: result,
//         };
//     } catch (e) {
//         return {
//             code: 400,
//             message: "failed",
//             data: null,
//         };
//     }
// }
