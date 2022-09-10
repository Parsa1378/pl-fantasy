const models = require('../models/manager.model');


const getManagerById = async(id:string) => {
    const manager:object|undefined = await models.manager.findById(id)
    .populate("teamId.picks")
    .exec();
    return manager;
};

