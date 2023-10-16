const Player = require('../models/player')

module.exports = {
    getAllPlayers,
    getOnePlayer,
    createPlayer,
    updatePlayer,
    deletePlayer
}

async function deletePlayer(req, res) {
    try {
        const id = req.params.id
        let player = await Player.findByIdAndDelete(id)
        if (player) {
            return res.status(200).json(player)
        }
        throw new Error("Player not found")
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

async function updatePlayer(req, res) {
    try {
        const id = req.params.id
        let player = await Player.findByIdAndUpdate(id, req.body, { new: true })
        if (player) {
            return res.status(200).json(player)
        }
        throw new Error("Player not found")
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

async function getAllPlayers(req, res) {
    try {
        const players = await Player.find()
        res.json(players)
    } catch (e) {
        return res.status(500).send(e.message);
    }
}

async function getOnePlayer(req, res) {
    try {
        const id = req.params.id
        const player = await Player.findById(id)
        if (player) {
            return res.json(player)
        }
        return res.status(404).send('Player with specified ID does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createPlayer(req, res) {
    try {
        const player = await new Player(req.body)
        await player.save()
        return res.status(201).json({
            player
        })
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}