// DOM ELEMENTS
const searchBar = document.querySelector('.search-bar')
const searchBtn = document.querySelector('.search-button')
const infoBtns = document.querySelector('.info-button')
const mainBody = document.querySelector('.main-body')
const homeBtn = document.querySelector('#home')
const rosterBtn = document.querySelector('#roster')
const depthChartBtn = document.querySelector('#depth-chart')
const addPlayerBtn = document.querySelector('#add-player')
const scheduleBtn = document.querySelector('#schedule')


// VARIABLES
const base = 'http://localhost:3001/'
const currentTeam = '652d40647acbe16b914436fa'



// FUNCTIONS
const homeBtnClick = () => {
    infoBtns.replaceChildren()
    mainBody.replaceChildren()
    searchBar.value = ""
}

const rosterBtnClick = async () => {
    infoBtns.replaceChildren()
    mainBody.replaceChildren()
    searchBar.value = ""
  
    try {
      const playersResponse = await axios.get(`${base}player`)
      const playersData = playersResponse.data
      console.log(playersData)
  
      if (playersData.length > 0) {
        playersData.forEach((player) => {
          const playerText = `<div class="item-holder">
            <img src="${player.image}" alt="" class="player-pic">
            <h3 class="player-name">${player.name}</h3>
            <p class="position">${player.position} #${player.number}</p>
            <p class="college">College: ${player.college}</p>
            <button class="update-button">Update<button>
            <button class="remove-button">Remove<button>`
  
          mainBody.innerHTML += playerText
        })
      } else {
        mainBody.innerHTML = `<div class="not-found">Players not found</div>`
      }
    } catch (error) {
      console.error(error)
    }
}

const addPlayerBtnClick = async () => {
    infoBtns.replaceChildren()
    mainBody.replaceChildren()
    searchBar.value = ""
    const addPlayerText = `<form id="add-player-form">
            <input type="text" id="name" placeholder="Name" required>
            <input type="text" id="position" placeholder="Position" required>
            <input type="number" id="depth_chart_pos" placeholder="Depth Chart Position" required>
            <input type="number" id="number" placeholder="Number" required>
            <input type="number" id="age" placeholder="Age" required>
            <input type="text" id="height" placeholder="Height" required>
            <input type="number" id="weight" placeholder="Weight" required>
            <input type="text" id="college" placeholder="College" required>
            <input type="url" id="image" placeholder="Image URL" required>
            <label for="able_to_play">Able to Play: </label>
            <input type="checkbox" id="able_to_play">
            <button type="submit">Add Player</button>
            </form>`

        mainBody.innerHTML += addPlayerText

}



const scheduleBtnClick = async () => {
    infoBtns.replaceChildren()
    mainBody.replaceChildren()
    searchBar.value = ""
  
    try {
      const scheduleResponse = await axios.get(`${base}schedule`)
      const scheduleData = scheduleResponse.data[0].games
      console.log(scheduleData)
  
  
      if (scheduleData.length > 0) {
        scheduleData.forEach((games) => {
          const scheduleText = `<div class="schedule-holder">
            <h5 class="week">${games.week}</h5>
            <p class="date">${games.date}</p>
            <p class="opponent">${games.opponent}</p>
            <p class="location">${games.location}</p>
            <p class="result">${games.result}</p>
            <p class="score">${games.score}</p>
            <button class="update-button">Update<button>`
  
          mainBody.innerHTML += scheduleText
        })
      } else {
        mainBody.innerHTML = `<div class="not-found">Game not found</div>`
      }
    } catch (error) {
      console.error(error)
    }
}

const searchBtnClick = async () => {
    infoBtns.replaceChildren()
    mainBody.replaceChildren()
    playerName = searchBar.value
    let player = await axios.get(`${base}player`)
    player.data.forEach((player) =>{
        if(playerName == player.name) {
                const playerText = `<div class="item-holder">
                    <img src="${player.image}" alt="" class="player-pic">
                    <h3 class="player-name">${player.name}</h3>
                    <p class="position">${player.position} #${player.number}</p>
                    <p class="college">College: ${player.college}</p>
                    <button class="update-button">Update<button>
                    <button class="remove-button">Remove<button>`

                mainBody.innerHTML += playerText
            if(!mainBody.innerText) {
                `<div class="not-found">Player not found</div>`
            }
        }
    })
}

// EVENT LISTENERS

rosterBtn.addEventListener('click', rosterBtnClick)
scheduleBtn.addEventListener('click', scheduleBtnClick)
homeBtn.addEventListener('click', homeBtnClick)
searchBtn.addEventListener('click', searchBtnClick)
addPlayerBtn.addEventListener('click', addPlayerBtnClick)