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
const models = require("../models/path");
const getPlayers = (filter, page, limit) => __awaiter(void 0, void 0, void 0, function* () {
    const players = yield models.playerModel.paginate({
        positionId: filter
    }, {
        page: page,
        limit: limit,
        populate: [
            { path: "position", select: ["plural_name_short", "generalId"] },
            { path: "plTeam", select: "short_name" }
        ]
    });
    return players;
});
module.exports = getPlayers;
