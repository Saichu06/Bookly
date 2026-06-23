import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { PORT, mongoURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  return res.status(200).send("Welcome to Bookly!");
});

app.use("/books", booksRoute);
console.log("ENV:", process.env.MONGODB_URL);
mongoose
  .connect(mongoURL)
  .then(() => {
    console.log("MongoDB Connected!");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });