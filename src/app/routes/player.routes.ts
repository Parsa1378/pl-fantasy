import express from "express";
const router = express.Router();
const {showPlayers,searchPlayers} = require("../api/player.api");

// routes.get("/", showPlayers);
router.route('/').get(showPlayers);
router.route('/search').get(searchPlayers);

module.exports = router;