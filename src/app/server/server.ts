require("dotenv").config();
import express ,{ Express } from "express";
const db = require("../database/db.connection");
const app:Express = express();
const port:Number = parseInt(<string>process.env.PORT);

const startServer = async()=>{
    await db();
    app.listen(port, () => {
        console.log(`server running on port: ${port}`);     
    })
};

module.exports = startServer;