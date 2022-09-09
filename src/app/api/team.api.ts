import { Request,Response } from "express";
const {getPlayerByGeneralId} = require('../database/players.repo');
const {getManagerById} = require('../database/manager.repo');

const addPlayerToTeam = async(req: Request, res: Response) => {
    const elementId:String = req.body.elementId;
    const managerId:String = req._id;
    const player:object = getPlayerByGeneralId(elementId);
    const manager:object = getManagerById(managerId);
    console.log(typeof(player));
    if(!player) {
        return res.status(404).json({msg:'player not found'});
    }
    if(!manager) {
        return res.status(404).json({msg:'manager not found'});
    }

    

};