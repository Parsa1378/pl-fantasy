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

module.exports = getPlayers;