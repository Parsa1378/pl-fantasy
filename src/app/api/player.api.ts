import { Request,Response } from "express";
import {getPlayers} from "../database/players.repo";

// type PlayerArray = {
//     docs:object,
//     total:Number,
//     limit:Number,
//     page:Number,
//     pages:Number
// };


const showPlayers = (req:Request,res:Response) => {
    const players:any = getPlayers(req.query);
    console.log(typeof(players));
    

    if (Object.keys(players).length === 0) {
        return res.status(404).json({ msg: "no player found" });
      }
    
    return res
    .status(200)
    .json({
        data: players.docs,
        total: players.total,
        limit: players.limit,
        page: players.page,
        pages: players.pages,
    });
};

module.exports = showPlayers;