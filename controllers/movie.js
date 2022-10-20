const Movie = require("../models/Movie");

const postMovie = (req, res) => {
    const movie = new Movie(req.body);

    movie.save().then(() => {
        res.send(movie);
        res.end();
    });
};

const getMovieByQuery = (req, res) => {
    Movie.findOne(req.query).exec().then((movie) => {
        res.send(movie);
        res.end();
    });
};

const getMovieByName = (req, res) => {
    const { movie } = req.params;

    Movie.findOne({ name: movie }).exec().then((movieObj) => {
        res.send(movieObj);
        res.end();
    });
};

module.exports = { postMovie, getMovieByQuery, getMovieByName };