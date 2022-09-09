import express from "express";
const router = express.Router();
const showPlayers = require("../api/player.api");

// routes.get("/", showPlayers);
router.route("/").get(showPlayers);

module.exports = router;