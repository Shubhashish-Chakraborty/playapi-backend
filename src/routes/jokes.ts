import express from 'express';
import { Router } from 'express';
import { z } from 'zod';

const app = express();
export const jokesRouter = Router();

import { JokesModel } from '../schemas/db';
import { increaseReqCount } from '../middlewares/requestCounter';

// GET ALL THE JOKES PRESENT IN THE DATABASE!
jokesRouter.get('/' , increaseReqCount , async (req , res) => {
    const allJokes = await JokesModel.find({}).select('jokeNumber content -_id');
    res.json(allJokes);
})

// ADD A NEW JOKE TO THE DATABASE!
jokesRouter.post('/add' , async (req , res) => {  

    // INput validation via zod!

    const requiredBody = z.object({
        content: z.string().min(5)
    })

    // parse req.body

    const parsedDataWithSuccess = requiredBody.safeParse(req.body);

    if (!parsedDataWithSuccess.success) {
        res.status(411).json({
            message: "Invalid Inputs, Re Enter",
            errors: parsedDataWithSuccess.error.issues
        })
        return
    }

    // UPTIL here input validation is done!!

        
    const { content } = parsedDataWithSuccess.data;

    let errorFound = false;
    try {
        await JokesModel.create({
            content: content
        });
    } catch(e) {
        res.status(401).json({
            message: "Something Went Wrong, Enter a Valid Joke!"
        });
        errorFound = true;
    }

    if (!errorFound) {
        res.status(200).json({
            message: `New Joke is Successfully added!`
        })
    }
})

// Fetch a random joke from the database, Users can get a surprise joke each time.
jokesRouter.get("/random" , increaseReqCount , async (req , res) => {
    // Count the total number of jokes
    const count = await JokesModel.countDocuments();

    // Generate a random index
    // const randomIndex = Math.floor(Math.random() * count);
    const randomIndex = Math.floor(Math.random() * count) + 1;
    
    try {
        const joke = await JokesModel.findOne({
            jokeNumber: randomIndex
        }).select("jokeNumber content -_id");

        // Check if the joke exists
        if (!joke) {
            res.status(404).json({ message: "Joke not found, Try Giving a Valid ID!" });
        }
        else {
            res.json(joke);
        }
    } catch(e) {
        res.status(401).json({
            message: "Something Went Wrong, give a valid id!"
        })
    }
})

// GET A JOKE BY ITS ID:
// you need to ensure that more specific routes (like /random) are defined before dynamic routes (like /:id). 
// Express matches routes in the order they are defined, so putting /random before /:id ensures it gets priority.

jokesRouter.get('/:id' , increaseReqCount , async (req , res) => {
    const { id } = req.params; // Extract the ID from the request parameters

    try {
        const joke = await JokesModel.findOne({
            jokeNumber: id
        }).select("jokeNumber content -_id");

        // Check if the joke exists
        if (!joke) {
            res.status(404).json({ message: "Joke not found, Try Giving a Valid ID!" });
        }
        else {
            res.json(joke);
        }
    } catch(e) {
        res.status(401).json({
            message: "Something Went Wrong, give a valid id!"
        })
    }
})