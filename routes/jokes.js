const express = require('express');
const { Router } = require('express');
const app = express();
const jokesRouter = Router();

const { JokesModel } = require('../schemas/db');

const { increaseReqCount } = require("../middlewares/requestCounter");

jokesRouter.get('/' , increaseReqCount , (req , res) => {
    res.json({
        message: "jokes router backend up!!"
    })
})

jokesRouter.post('/add' , async (req , res) => {  
    const content = req.body.content;

    await JokesModel.create({
        content: content
    })
    
    res.status(200).json({
        msg: 'DONE!'
    })

})

module.exports = {
    jokesRouter: jokesRouter
}