export{};
const axios = require('axios');
const plTeamModel = require('../../models/pl.team.model');

const createTeam = async() => {
    const response = await axios.get(process.env.FPL_URL);
    
    for(let team of response.data.teams) {
        plTeamModel.create(
            {
                generalId:team.id,
                name:team.name,
                short_name:team.short_name,
                strength:team.strength,
                points:team.points,
            }
        );
    }
    console.log('done');    
};

module.exports = createTeam;