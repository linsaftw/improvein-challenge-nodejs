const jwtValidator = require("../jwt/jwt-validator");
const generateAccessToken = jwtValidator.generateAccessToken;

const authenticate = (req, res) => {
    const accessToken = generateAccessToken({});
    res.header("authorization", accessToken)
    res.json({ "token": accessToken });
    res.end();
}

module.exports = { authenticate };