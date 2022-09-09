"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const players_repo_1 = require("../database/players.repo");
// type PlayerArray = {
//     docs:object,
//     total:Number,
//     limit:Number,
//     page:Number,
//     pages:Number
// };
const showPlayers = (req, res) => {
    const players = (0, players_repo_1.getPlayers)(req.query);
    console.log(typeof (players));
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
module.exports = showPlayers;
