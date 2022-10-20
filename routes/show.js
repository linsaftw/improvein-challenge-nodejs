const express = require("express");
const jwtValidator = require("../jwt/jwt-validator");
const router = express.Router();
const validateAccessToken = jwtValidator.validateAccessToken;
const { postShow, getShowByQuery, getEpisodeByName, getShowByName, getSeasonByName } = require("../controllers/show");

router.get("/", validateAccessToken, getShowByQuery);

router.get("/:show", validateAccessToken, getShowByName);

router.get("/:show/:season", validateAccessToken, getSeasonByName);

router.get("/:show/:season/:episode", validateAccessToken, getEpisodeByName);

router.post("/", validateAccessToken, postShow);

module.exports = router;