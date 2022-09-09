export{};
const axios = require('axios');
const eventModel = require('../../models/event.model');

const updateEventdata = async (req: Request, res: Response) => {
    const response = await axios.get(process.env.FPL_URL);
  
    for (let event of response.data.events) {
      let update = await eventModel.update(
        { generalId: event.id },
        {
          name: event.name,
          deadline_time: event.deadline_time,
          average_entry_score: event.average_entry_score,
          finished: event.finished,
          data_checked: event.data_checked,
          highest_scoring_entry: event.highest_scoring_entry,
          deadline_time_epoch: event.deadline_time_epoch,
          highest_score: event.highest_score,
          is_current: event.is_current,
        }
      );
  
      if (update.matchedCount == 0) {
        await eventModel.create({
          generalId: event.id,
          name: event.name,
          deadline_time: event.deadline_time,
          average_entry_score: event.average_entry_score,
          finished: event.finished,
          data_checked: event.data_checked,
          highest_scoring_entry: event.highest_scoring_entry,
          deadline_time_epoch: event.deadline_time_epoch,
          highest_score: event.highest_score,
          is_current: event.is_current,
        });
      }
    }
    console.log("event done");
    
  };

  module.exports = updateEventdata;