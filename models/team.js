const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const teamSchema = new Schema(
    {
        team_name: { type: String, required: true },
        logo: { type: String, required: true },
        location: { type: String, required: true },
        stadium: { type: String, required: true },
        capacity: { type: Number, required: true },
        players_salary: { type: String, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('Team', teamSchema)