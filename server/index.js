
import cors from "cors";
import { MongoClient } from "mongodb";
import bcrypt from 'bcrypt';
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
import express from "express";
import userRoutes from './routes/users.js'



const app = express();
app.use('/user', userRoutes)
app.use(cors())
app.use(express.json())

const PORT = 4000;

const MONGO_URL = "mongodb+srv://Yogadharshni:omsai123@cluster0.ypavcjb.mongodb.net";
const client = new MongoClient(MONGO_URL); // dial
// Top level await
await client.connect(); // call
console.log("Mongo is connected !!!  ");


app.get("/", function (request, response) {
    response.send("Hello, This is a Stack overflow Clone !!");
});


app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));