showIndex = (req, res) => {
    res.json({ "message" : "Welcome" });
    res.end();
}

module.exports = { showIndex };