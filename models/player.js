const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const playerSchema = new Schema(
    {
        image: { type: String, required: true },
        name: { type: String, required: true },
        position: { type: String, required: true },
        depth_chart_pos: { type: Number, required: true },
        number: { type: Number, required: true },
        age: { type: Number, required: true },
        height: { type: String, required: true },
        weight: { type: Number, required: true },
        able_to_play: { type: Boolean, required: true },
        team: { type: Schema.Types.ObjectId, ref: 'Team'},
        college: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('Player', playerSchema)