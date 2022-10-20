const Show = require("../models/Show");

const postShow = (req, res) => {
    const show = new Show(req.body);

    show.save().then(() => {
        res.send(show);
        res.end();
    });
};

const getShowByQuery = (req, res) => {
    Show.find(req.query).exec().then((show) => {
        res.send(show);
        res.end();
    });
};

const getShowByName = (req, res) => {
    const { show } = req.params;

    Show.findOne({ name: show }).exec().then((showObj) => {
        res.send(showObj);
        res.end();
    });
};

const getSeasonByName = (req, res) => {
    const { show, season } = req.params;

    Show.findOne({ name: show }).exec().then((showObj) => {
        res.send(showObj.seasons.find(s => { return s.name === season }));
        res.end();
    });
};

const getEpisodeByName = (req, res) => {
    const { show, season, episode } = req.params;

    Show.findOne({ name: show }).exec().then((showObj) => {
        res.send(showObj.seasons.find(s => { return s.name === season }).episodes.find(e => { return e.name === episode }));
        res.end();
    });
};

module.exports = { postShow, getShowByQuery, getShowByName, getSeasonByName, getEpisodeByName };