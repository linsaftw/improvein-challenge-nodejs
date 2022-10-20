const jwt = require("jsonwebtoken");

const generateAccessToken = (user) => {
    return jwt.sign(user, process.env.SECRET, { expiresIn: "15m" });
}

const validateAccessToken = (req, res, next) => {
    const accessToken = req.headers["authentication"];
    if (!accessToken) {
        res.send("No access token received");
    }
    else {
        jwt.verify(accessToken, process.env.SECRET, (err, user) => {
            if (err) {
                res.send("Access token is invalid");
            } else {
                req.user = user;
                if (next) {
                    next();
                }
            }
        });
    }
}

module.exports = { generateAccessToken, validateAccessToken };