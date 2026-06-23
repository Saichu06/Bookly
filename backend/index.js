import express from "express";
import { PORT, mongoURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js"
import booksRoute from "./routes/booksRoute.js"
import cors from "cors";


const app = express();

app.use(express.json())
app.use(cors()) 

app.get('/', (req, res) => {
    return res.status(200).send("Welcome to book store!");
});

app.use("/books",booksRoute);


mongoose.connect(mongoURL)
    .then(() => {
        console.log("MongoDB Connected!");
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });

    })
    .catch((err) => {
        console.log(err);
    })