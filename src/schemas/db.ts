import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const AutoIncrement = require('mongoose-sequence')(mongoose); // Import the auto-increment plugin

const ServerSchema = new Schema({
    id: { type: String, required: true, unique: true }, // Unique identifier for the document
    request: { type: Number, default: 0 } // Default value for request count
})

const JokesSchema = new Schema({

    content: {type: String , required: true , unique: true}
})


// Add the auto-incrementing jokeId field
JokesSchema.plugin(AutoIncrement, { inc_field: 'jokeNumber' });


//create models

export const JokesModel = mongoose.model('jokes' , JokesSchema);
export const ServerModel = mongoose.model('serverdata' , ServerSchema);