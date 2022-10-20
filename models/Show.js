const mongoose = require("mongoose");
const Season = require("./Season").schema;

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    actors: [{
        type: String,
        required: true
    }],
    seasons: [{
        type: Season,
        required: true
    }]
});

module.exports = mongoose.model("Show", schema);