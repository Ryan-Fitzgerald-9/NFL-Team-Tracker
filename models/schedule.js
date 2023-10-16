const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const scheduleSchema = new Schema(
    {
        team: { type: Schema.Types.ObjectId, ref: 'Team'},
        games: [
            {
              week: { type: Number, required: true },
              date: { type: String, required: true },
              opponent: { type: String, required: true },
              location: { type: String, required: true },
              result: { type: String, required: true },
              score: { type: String, required: true }
            }
        ]
    },
    { timestamps: true },
)

module.exports = mongoose.model('Schedule', scheduleSchema)