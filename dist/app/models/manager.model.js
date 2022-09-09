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
const mongoose_1 = require("mongoose");
const bcrypt_1 = __importDefault(require("bcrypt"));
;
const managerSchema = new mongoose_1.Schema({
    first_name: {
        type: String,
        default: null,
        required: true,
        maxlength: 20,
    },
    last_name: {
        type: String,
        required: true,
        default: null,
        maxlength: 20,
    },
    is_active: {
        type: Boolean,
        default: false
    },
    username: {
        type: String,
        default: null,
        unique: true,
        required: true,
    },
    country: {
        type: String,
        default: null,
        required: true,
    },
    password: {
        type: String,
        select: false,
        default: null,
        required: true,
    },
    email: {
        type: String,
        default: null,
        unique: true,
        required: true,
    },
    budget: {
        type: Number,
        default: 100,
    },
    teamId: {
        type: mongoose_1.Types.ObjectId,
        ref: "Team",
    },
    summary_overall_points: {
        type: Number,
        default: 0,
    },
    summary_overall_rank: {
        type: Number,
        default: null,
    },
    summary_event_points: {
        type: Number,
        default: 0,
    },
    summary_event_rank: {
        type: Number,
        default: null,
    },
}, { versionKey: false });
managerSchema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!this.isModified("password"))
            return next();
        try {
            const salt = yield bcrypt_1.default.genSalt(10);
            this.password = yield bcrypt_1.default.hash(this.password.toString(), salt);
            return next();
        }
        catch (error) {
            return next(error);
        }
    });
});
const Manager = (0, mongoose_1.model)("Manager", managerSchema);
module.exports = Manager;
