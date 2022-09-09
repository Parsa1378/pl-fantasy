import { Request,Response } from "express";
import {getPlayers} from "../database/players.repo.getPlayers";

const showPlayers = (req:Request,res:Response) => {
    const players = getPlayers(req.query);

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