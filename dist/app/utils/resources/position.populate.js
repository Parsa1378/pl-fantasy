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
const positionModel = require('../../models/position.model');
const updatePlayerPositionsData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios.get(process.env.FPL_URL);
    for (let position of response.data.element_types) {
        let update = yield positionModel.update({ generalId: position.id }, {
            plural_name: position.plural_name,
            plural_name_short: position.plural_name_short,
            singular_name: position.singular_name,
            singular_name_short: position.singular_name_short,
            squad_count: position.squad_select,
            squad_min_play: position.squad_min_play,
            squad_max_play: position.squad_max_play,
            ui_shirt_specific: position.ui_shirt_specific,
            sub_positions_locked: position.sub_positions_locked,
            element_count: position.element_count,
        });
        if (update.matchedCount == 0) {
            yield positionModel.create({
                generalId: position.id,
                plural_name: position.plural_name,
                plural_name_short: position.plural_name_short,
                singular_name: position.singular_name,
                singular_name_short: position.singular_name_short,
                squad_count: position.squad_select,
                squad_min_play: position.squad_min_play,
                squad_max_play: position.squad_max_play,
                ui_shirt_specific: position.ui_shirt_specific,
                sub_positions_locked: position.sub_positions_locked,
                element_count: position.element_count,
            });
        }
    }
    console.log("position done");
});
module.exports = updatePlayerPositionsData;
