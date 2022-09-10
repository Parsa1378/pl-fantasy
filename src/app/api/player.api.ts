import { Request,Response } from "express";
const {getPlayersByName} = require("../database/players.repo");

interface Players {
    docs:Array<object>,
    total: number,
    limit: string,
    page: string,
    pages: number
};

const searchPlayers = async(req:Request,res:Response) => {
    const web_name:string = req.body.web_name;
    const filter:string | object = req.query.filter == "0" ? {$gt:0} 
    : req.query.filter ? req.query.filter
    : {$gt:0};    
    const page:string | any = req.query.page ? req.query.page : 0;
    const limit:string | any = req.query.limit ? req.query.limit : 0;
    const players:Players = await getPlayersByName(web_name,filter,page,limit);
    
    if (players.docs.length===0) {
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

module.exports = searchPlayers;