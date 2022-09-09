"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const getPlayers = require("../database/players.repo");
;
const showPlayers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filter = req.query.filter == "0" ? { $gt: 0 }
        : req.query.filter ? req.query.filter
            : { $gt: 0 };
    const page = req.query.page ? req.query.page : 0;
    const limit = req.query.limit ? req.query.limit : 0;
    const players = yield getPlayers(filter, page, limit);
    console.log(players.docs.length);
    if (players.docs.length === 0) {
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
});
module.exports = showPlayers;
