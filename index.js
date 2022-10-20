// Modules
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");

// Routes
const indexRoutes = require("./routes/index");
const loginRoutes = require("./routes/login");
const movieRoutes = require("./routes/movie");
const showRoutes = require("./routes/show");

// Create the express application
const app = express();

mongoose.connect("mongodb://localhost");

// Load the .env file
dotenv.config();

// Parse urlencoded payloads
app.use(express.urlencoded({ extended: false }));

// Translate the body into a json
app.use(express.json());

// Use the routes defined in the routes files
app.use("/", indexRoutes);
app.use("/login", loginRoutes);
app.use("/movie", movieRoutes);
app.use("/show", showRoutes);

app.listen(80)