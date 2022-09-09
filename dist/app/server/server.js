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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const db = require("../database/db.connection");
const app = (0, express_1.default)();
const port = parseInt(process.env.PORT);
const playerRoute = require('../routes/path');
const createTeam = require('../utils/resources/team.populate');
const createPlayers = require('../utils/resources/player.populate');
const updateEventdata = require('../utils/resources/evet.populate');
const updatePlayerPositionsData = require('../utils/resources/position.populate');
app.use(express_1.default.json());
app.use("/api/v1/players", playerRoute);
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    yield db();
    yield createPlayers();
    app.listen(port, () => {
        console.log(`server running on port: ${port}`);
    });
});
module.exports = startServer;
