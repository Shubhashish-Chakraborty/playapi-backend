import express from "express";
import mongoose from "mongoose";

import { MONGO_URL } from "./config";
import { PORT } from "./config";

import { increaseReqCount , initializeRequestCount } from "./middlewares/requestCounter";
import { jokesRouter } from "./routes/jokes";

const app = express();

app.use(express.json());

app.use("/api/v1/jokes" , jokesRouter)

app.use(increaseReqCount);
app.get("/" , (req , res) => {
    res.status(200).json({
        message: "Backend is Up!!"
    })
})

async function main() {
    await mongoose.connect(MONGO_URL);
    app.listen(PORT , () => {
        console.log(`Backend Hosted: http://localhost:${PORT}`)
    })
    initializeRequestCount();
    console.log(`Backend Successfully connected to the database!`);
}
main();