export{};
const axios = require('axios');
const positionModel = require('../../models/position.model');
const updatePlayerPositionsData = async (req: Request, res: Response) => {
    const response = await axios.get(process.env.FPL_URL);
  
    for (let position of response.data.element_types) {
      let update = await positionModel.update(
        { generalId: position.id },
        {
          plural_name: position.plural_name,
          plural_name_short: position.plural_name_short,
          singular_name: position.singular_name,
          singular_name_short: position.singular_name_short,
          squad_count: position.squad_select,
          squad_min_play: position.squad_min_play,
          squad_max_play: position.squad_max_play,
          ui_shirt_specific: position.ui_shirt_specific,
          sub_positions_locked: position.sub_positions_locked,
          element_count: position.element_count,
        }
      );
  
      if (update.matchedCount == 0) {
        await positionModel.create({
          generalId: position.id,
          plural_name: position.plural_name,
          plural_name_short: position.plural_name_short,
          singular_name: position.singular_name,
          singular_name_short: position.singular_name_short,
          squad_count: position.squad_select,
          squad_min_play: position.squad_min_play,
          squad_max_play: position.squad_max_play,
          ui_shirt_specific: position.ui_shirt_specific,
          sub_positions_locked: position.sub_positions_locked,
          element_count: position.element_count,
        });
      }
    }
    console.log("position done");
    
};
  
module.exports = updatePlayerPositionsData;