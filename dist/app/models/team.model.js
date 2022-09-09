"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const teamSchema = new mongoose_1.Schema({
    picks: [
        {
            player: {
                type: mongoose_1.Types.ObjectId,
                ref: "Player",
                default: null,
            },
            multiplier: {
                type: Number,
                default: 1,
            },
            is_captain: {
                type: Boolean,
                default: false,
            },
            is_vice_captain: {
                type: Boolean,
                default: false,
            },
        },
    ],
}, {
    versionKey: false,
});
const Team = (0, mongoose_1.model)("Team", teamSchema);
module.exports = Team;
