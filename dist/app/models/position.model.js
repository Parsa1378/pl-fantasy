"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const positionSchema = new mongoose_1.default.Schema({
    generalId: {
        type: Number,
        trim: true,
        required: true,
        unique: true,
        default: null,
    },
    plural_name: { type: String, trim: true, default: null },
    plural_name_short: { type: String, trim: true, default: null },
    singular_name: { type: String, trim: true, default: null },
    singular_name_short: { type: String, trim: true, default: null },
    squad_count: { type: Number, trim: true, default: null },
    squad_min_play: { type: Number, trim: true, default: null },
    squad_max_play: { type: Number, trim: true, default: null },
    element_count: { type: Number, trim: true, default: null },
}, { versionKey: false });
module.exports = mongoose_1.default.model("Position", positionSchema);
