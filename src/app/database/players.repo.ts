import models = require('../models/path');

const getPlayers = async(filter:string|object,page:string,limit:string) => {
    
    const players = await models.playerModel.paginate(
        {
            positionId: filter
        },
        {
            page: page,
            limit: limit,
            populate: [
                {path:"position", select: ["plural_name_short", "generalId"] },
                { path: "plTeam", select: "short_name" }
            ]
        }
    );
    return players;
};

const getPlayersByName = async(web_name:string, filter:string|object, page:string, limit:string) => {
    const players = await models.playerModel.paginate(
        {
            positionId: filter,
            web_name: new RegExp("^" + web_name + "w*", "i")
        },
        {
            page: page,
            limit: limit,
            populate: [
                {path:"position", select: ["plural_name_short", "generalId"] },
                { path: "plTeam", select: "short_name" }
            ]
        }
    );
    return players;
};

module.exports = {
    getPlayers,
    getPlayersByName
};