import express from "express";
const routes = express.Router();
const api = require("../api/player.api");

routes.get("/", api.showPlayers);

module.exports = routes;