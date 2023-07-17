const {Schema, model} = require('mongoose');
//const bcrypt = require('bcrypt');


const sleepSchema = new Schema({
    date: {
        type: Date,
        default: Date.now,
    },
    author: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    plan : {
        type: String,
        required: true,
    },

    //how to return response
    responses: [
        {
        name: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        value: {
            type: String,
            required: true,
        },
    },
    ],
});

const Sleep = model('Sleep', sleepSchema);

module.exports = Sleep;

