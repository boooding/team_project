const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const blogSchema = new Schema({
    author: {
        type: String,
        required: true,
        select: true
    },
    title: {
        type: String,
        required: true,
    },
    introduction: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true
    }
},{
        timestamps: true
    }
);


module.exports = model(
    'Blog',
    blogSchema
);