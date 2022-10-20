const express = require("express");
const jwtValidator = require("../jwt/jwt-validator");
const validateAccessToken = jwtValidator.validateAccessToken;
const router = express.Router();
const { getMovieByQuery, getMovieByName, postMovie } = require("../controllers/movie");

router.get("/", validateAccessToken, getMovieByQuery);

router.get("/:movie", validateAccessToken, getMovieByName);

router.post("/", validateAccessToken, postMovie);

module.exports = router;