const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const AutoIncrement = require('mongoose-sequence')(mongoose); // Import the auto-increment plugin

const JokesSchema = new Schema({

    content: {type: String , required: true , unique: true}
})


// Add the auto-incrementing jokeId field
JokesSchema.plugin(AutoIncrement, { inc_field: 'jokeNumber' });


//create models

const JokesModel = mongoose.model('jokes' , JokesSchema);

// Export the model
module.exports = {
    JokesModel: JokesModel
}