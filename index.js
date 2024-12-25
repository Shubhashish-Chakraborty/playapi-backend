require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const { jokesRouter } = require('./routes/jokes');

const PORT = process.env.PORT;
const app = express();

app.use(express.json());

app.use("/api/v1/jokes" , jokesRouter)

app.get("/" , (req , res) => {
    res.status(200).json({
        message: "Backend is Up!!"
    })
})

async function main() {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(PORT , () => {
        console.log(`Backend Hosted: http://localhost:${PORT}`)
    })
    console.log(`Backend Successfully connected to the database!`);
}
main();