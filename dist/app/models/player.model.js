"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const playerSchema = new mongoose_1.Schema({
    generalId: {
        type: Number,
        // required: true,
    },
    positionId: {
        type: Number,
        // required: true,
    },
    news: {
        type: String,
    },
    in_dreamteam: {
        type: Boolean,
        default: false,
    },
    event_points: {
        type: Number,
        default: 0,
    },
    first_name: {
        type: String,
        // required: true,
    },
    second_name: {
        type: String,
        // required: true,
    },
    form: {
        type: Number,
        default: 0,
    },
    now_cost: {
        type: Number,
        required: true,
    },
    points_per_game: {
        type: Number,
        default: 0,
    },
    special: {
        type: Boolean,
        default: false,
    },
    status: {
        type: String,
    },
    teamId: {
        type: Number,
    },
    value_form: {
        type: Number,
        default: 0,
    },
    value_season: {
        type: Number,
        default: 0,
    },
    web_name: {
        type: String,
        required: true,
    },
    minutes: {
        type: Number,
        default: 0,
    },
    goals_scored: {
        type: Number,
        default: 0,
    },
    assists: {
        type: Number,
        default: 0,
    },
    clean_sheets: {
        type: Number,
        default: 0,
    },
    goals_conceded: {
        type: Number,
    },
    own_goals: {
        type: Number,
        default: 0,
    },
    penalties_saved: {
        type: Number,
        default: 0,
    },
    penalties_missed: {
        type: Number,
        default: 0,
    },
    yellow_cards: {
        type: Number,
        default: 0,
    },
    red_cards: {
        type: Number,
        default: 0,
    },
    saves: {
        type: Number,
        default: 0,
    },
    bonus: {
        type: Number,
    },
}, { versionKey: false });
playerSchema.virtual("position", {
    ref: "Position",
    localField: "positionId",
    foreignField: "generalId",
    justOne: true,
});
playerSchema.virtual("plTeam", {
    ref: "PLTeam",
    localField: "teamId",
    foreignField: "generalId",
    justOne: true,
});
playerSchema.set("toObject", { virtuals: true });
playerSchema.set("toJSON", { virtuals: true });
playerSchema.plugin(mongoosePaginate);
const Player = (0, mongoose_1.model)("Player", playerSchema);
module.exports = Player;
