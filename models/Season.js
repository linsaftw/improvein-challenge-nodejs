const mongoose = require("mongoose");
const Episode = require("./Episode").schema;

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    episodes: [{
        type: Episode,
        required: true
    }]
});

module.exports = mongoose.model("Season", schema);