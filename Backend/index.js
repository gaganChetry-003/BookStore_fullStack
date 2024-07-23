import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";


import bookRoute from './route/book_route.js'


const app = express();

dotenv.config();




const PORT = process.env.PORT || 4000;
const URI = process.env.MONGODBURI;

//connect to MongoDB
try {
    mongoose.connect(URI)
    console.log("Connected to MongoDB");
} catch (error) {
    console.log("Error", error);

}


//defining routes

app.use("/book", bookRoute);

app.listen(PORT, () => {
    console.log(`Server is  listening on port ${PORT}`)
})