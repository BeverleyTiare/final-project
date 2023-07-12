const {Schema, model} = require('mongoose');
//const bcrypt = require('bcrypt');

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
    comments: [
        {
        commentText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        commentAuthor: {
            type: String,
            required: true,
        },
        commentDate: {
            type: Date,
            default: Date.now,
        },
    },
    ],
});

const Sleep = model('Sleep', sleepSchema);

module.exports = Sleep;

