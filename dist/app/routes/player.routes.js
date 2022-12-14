"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const { showPlayers, searchPlayers } = require("../api/player.api");
// routes.get("/", showPlayers);
router.route('/').get(showPlayers);
router.route('/search').get(searchPlayers);
module.exports = router;
