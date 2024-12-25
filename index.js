require('dotenv').config();

const express = require('express');

const { jokesRouter } = require('./routes/jokes');

const PORT = process.env.PORT;
const app = express();


app.use("/api/v1/jokes" , jokesRouter)

app.get("/" , (req , res) => {
    res.status(200).json({
        message: "Backend is Up!!"
    })
})

app.listen(PORT , () => {
    console.log(`Backend Hosted: http://localhost:${PORT}`)
})