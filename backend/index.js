import express from "express";
import { PORT , mongoURL} from "./config.js";
import mongoose from "mongoose";
const app = express();

app.get('/', (req,res) =>{
    return res.status(200).send("Welcome to book store!");
});

console.log(mongoURL)
mongoose.connect(mongoURL)
.then(() =>{
    console.log("MongoDB Connected!");
    app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

})
.catch((err)=>{
    console.log(err);
})