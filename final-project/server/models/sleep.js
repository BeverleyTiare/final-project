const {Schema, model} = require('mongoose');

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
    
    score: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    
    plan : {
        type: [String],
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

