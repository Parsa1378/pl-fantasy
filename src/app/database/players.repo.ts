import models = require('../models/path');

type Query = {
    filter:Number,
    page:Number,
    limit:Number
};

export const getPlayers = async(query:Query) => {
    const players = await models.playerModel.paginate(
        {
            positionId:
                query.filter === 0
                ? {$gt:0}
                : query.filter
                ? query.filter
                : { $gt:0 },
        },
        {
            page: query.page ? query.page : 0,
            limit: query.limit ? query.limit : 10,
            populate: [
                {path:"position", select: ["plural_name_short", "generalId"] },
                { path: "plTeam", select: "short_name" }
            ]
        }
    );
    return players;
};

module.exports = getPlayers;