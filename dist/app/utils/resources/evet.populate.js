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
const axios = require('axios');
const eventModel = require('../../models/event.model');
const updateEventdata = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios.get(process.env.FPL_URL);
    for (let event of response.data.events) {
        let update = yield eventModel.update({ generalId: event.id }, {
            name: event.name,
            deadline_time: event.deadline_time,
            average_entry_score: event.average_entry_score,
            finished: event.finished,
            data_checked: event.data_checked,
            highest_scoring_entry: event.highest_scoring_entry,
            deadline_time_epoch: event.deadline_time_epoch,
            highest_score: event.highest_score,
            is_current: event.is_current,
        });
        if (update.matchedCount == 0) {
            yield eventModel.create({
                generalId: event.id,
                name: event.name,
                deadline_time: event.deadline_time,
                average_entry_score: event.average_entry_score,
                finished: event.finished,
                data_checked: event.data_checked,
                highest_scoring_entry: event.highest_scoring_entry,
                deadline_time_epoch: event.deadline_time_epoch,
                highest_score: event.highest_score,
                is_current: event.is_current,
            });
        }
    }
    console.log("event done");
});
module.exports = updateEventdata;
