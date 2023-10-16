const Team = require('../models/team')

module.exports = {
    getAllTeams,
    getOneTeam,
    createTeam,
    updateTeam,
    deleteTeam
}

async function deleteTeam(req, res) {
    try {
        const id = req.params.id
        let team = await Team.findByIdAndDelete(id)
        if (team) {
            return res.status(200).json(team)
        }
        throw new Error("Team not found")
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

async function updateTeam(req, res) {
    try {
        const id = req.params.id
        let team = await Team.findByIdAndUpdate(id, req.body, { new: true })
        if (team) {
            return res.status(200).json(team)
        }
        throw new Error("Team not found")
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

async function getAllTeams(req, res) {
    try {
        const teams = await Team.find()
        res.json(teams)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function getOneTeam(req, res) {
    try {
        const id = req.params.id
        const team = await Team.findById(id)
        if (team) {
            return res.json(team)
        }
        return res.status(404).send('Team with specified ID does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createTeam(req, res) {
    try {
        const team = await new Team(req.body)
        await team.save()
        return res.status(201).json({
            team
        })
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}
