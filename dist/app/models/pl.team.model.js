"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
;
const pl_teamsSchema = new mongoose_1.Schema({
    generalId: {
        type: Number
    },
    name: {
        type: String
    },
    short_name: {
        type: String
    },
    strength: {
        type: Number
    },
    points: {
        type: Number
    }
}, {
    versionKey: false
});
const PLTeam = (0, mongoose_1.model)('PLTeam', pl_teamsSchema);
module.exports = PLTeam;
