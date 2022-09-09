"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const players_repo_getPlayers_1 = require("../database/players.repo.getPlayers");
const showPlayers = (req, res) => {
    const players = (0, players_repo_getPlayers_1.getPlayers)(req.query);
    if (Object.keys(players).length === 0) {
        return res.status(404).json({ msg: "no player found" });
    }
    return res
        .status(200)
        .json({
        data: players.docs,
        total: players.total,
        limit: players.limit,
        page: players.page,
        pages: players.pages,
    });
};
