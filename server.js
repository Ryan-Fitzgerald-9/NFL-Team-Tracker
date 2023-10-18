const express = require('express');
const db = require('./db/index');
const logger = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

const playerController = require('./controllers/playerController')
const scheduleController = require('./controllers/scheduleController');
const teamController = require('./controllers/teamController')


const PORT = process.env.PORT || 3001;

const app = express();
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())


//cRud - Read
app.get('/player', playerController.getAllPlayers)
app.get('/player/:id', playerController.getOnePlayer)
app.get('/schedule', scheduleController.getAllSchedules)
app.get('/schedule/:id', scheduleController.getOneSchedule)
app.get('/team', teamController.getAllTeams)
app.get('/team/:id', teamController.getOneTeam)

//Crud - Create
app.post('/player', playerController.createPlayer)
app.post('/schedule/', scheduleController.createSchedule)
app.post('/team/', teamController.createTeam)

//crUd - Update
app.put('/player/:id', playerController.updatePlayer)
app.put('/schedule/:id', scheduleController.updateSchedule)
app.put('/team/:id', teamController.updateTeam)

//cruD - Delete
app.delete('/player/:id', playerController.deletePlayer)
app.delete('/schedule/:id', scheduleController.deleteSchedule)
app.delete('/team/:id', teamController.deleteTeam)

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))