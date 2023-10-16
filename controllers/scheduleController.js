const Schedule = require('../models/schedule')

module.exports = {
    getAllSchedules,
    getOneSchedule,
    createSchedule,
    updateSchedule,
    deleteSchedule
}

async function deleteSchedule(req, res) {
    try {
        const id = req.params.id
        let schedule = await Schedule.findByIdAndDelete(id)
        if (schedule) {
            return res.status(200).json(schedule)
        }
        throw new Error("Schedule not found")
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

async function updateSchedule(req, res) {
    try {
        const id = req.params.id
        let schedule = await Schedule.findByIdAndUpdate(id, req.body, { new: true })
        if (schedule) {
            return res.status(200).json(schedule)
        }
        throw new Error("Schedule not found")
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

async function getAllSchedules(req, res) {
    try {
        const schedules = await Schedule.find()
        res.json(schedules)
    } catch (e) {
        return res.status(500).send(e.message);
    }
}

async function getOneSchedule(req, res) {
    try {
        const id = req.params.id
        const schedule = await Schedule.findById(id)
        if (schedule) {
            return res.json(schedule)
        }
        return res.status(404).send('Schedule with specified ID does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createSchedule(req, res) {
    try {
        const schedule = await new Schedule(req.body)
        await schedule.save()
        return res.status(201).json({
            schedule
        })
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}