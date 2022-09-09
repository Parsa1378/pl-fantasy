import models = require('../models/path');

const getPlayers = async(filter:string|object,page:string,limit:string) => {
        
    const players:object = await models.playerModel.paginate(
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
    const players:Array<object> = await models.playerModel.paginate(
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

const getPlayerByGeneralId = async(elementId:number) => {
    const player:object|undefined|null = await models.playerModel.findOne({generalId:elementId});
    console.log(typeof(player));
    
    return player;
};

module.exports = {
    getPlayers,
    getPlayersByName,
    getPlayerByGeneralId
};