require("dotenv").config();
const express = require("express");
const app = express();
const port:Number = parseInt(<string>process.env.PORT);

const startServer = async()=>{
    app.listen(port, () => {
        console.log(`server running on port: ${port}`);     
    })
};

module.exports = startServer;