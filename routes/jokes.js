const { Router } = require('express');

const jokesRouter = Router();

jokesRouter.get('/' , (req , res) => {
    res.json({
        message: "jokes router backend up!!"
    })
})

module.exports = {
    jokesRouter: jokesRouter
}