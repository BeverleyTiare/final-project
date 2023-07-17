const {Schema, model} = require('mongoose');
//const bcrypt = require('bcrypt');

//adapt to sleep survey!!
const sleepSchema = new Schema({
    sleepText: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    sleepDate: {
        type: Date,
        default: Date.now,
    },
    sleepAuthor: {
        type: String,
        required: true,
    },
    //see client folder: sleep.js questions
    //how to return respo
    questions: [
        {
        questionText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        questionAuthor: {
            type: String,
            required: true,
        },
        questionDate: {
            type: Date,
            default: Date.now,
        },
    },
    ],
});

const Sleep = model('Sleep', sleepSchema);

module.exports = Sleep;

