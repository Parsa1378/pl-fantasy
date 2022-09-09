export{};
require("dotenv").config();
const {createPlayers} = require("./app/utils/resources/player.populate");
const server = require("./app/server/server");

const populate = async() => {
    await createPlayers();
};

populate();
server();