import express from 'express';
import { addDoc, listDocsByPK } from './src/dao/documents.js';
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(bodyParser.json())
app.post("/uploads", async (req, res) => {
    // use modules such as express-fileupload, Multer, Busboy
    const response = await addDoc(req.body)
    if (response) {
        return res.status(200).json({ result: true, msg: 'file uploaded' });
    } else {
        return res.status(200).json({ result: false, msg: 'file upload failed' });
    }
});

app.get("/uploadsByPk/:key", async (req, res) => {
    // use modules such as express-fileupload, Multer, Busboy
    const response = await listDocsByPK(req.params.key)
    if (response) {
        return res.status(200).json({ result: true, msg: 'files retrieved', data: response });
    } else {
        return res.status(200).json({ result: false, msg: 'files retrieval failed' });
    }
});

app.delete("/uploads/:key", (req, res) => {
    console.log(`File deleted`)
    return res.status(200).json({ result: true, msg: 'file deleted' });
});

app.listen(5000, () => {
    console.log(`Server running on port 5000`)
});