import {model, Schema, Types, ObjectId} from 'mongoose';

interface PLTeam {
    generalId:Number,
    name:String,
    short_name:String,
    strength:Number,
    points:Number
};

const pl_teamsSchema = new Schema<PLTeam>({
    generalId:{
        type:Number
    },
    name:{
        type:String
    },
    short_name:{
        type:String
    },
    strength:{
        type:Number
    },
    points:{
        type:Number
    }
},{
    versionKey:false
});

const PLTeam = model('PLTeam',pl_teamsSchema);

module.exports = PLTeam;