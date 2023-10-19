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
            <button class="remove-button" data-player-id="${player._id}">Remove</button>
            </div>`
  
            mainBody.innerHTML += playerText

        })

        mainBody.addEventListener('click', async (event) => {
            if (event.target && event.target.classList && event.target.classList.contains('remove-button')) {
                const playerElement = event.target.closest('.item-holder')
                if (playerElement) {
                    const playerId = event.target.getAttribute('data-player-id')
                    try {
                        const rexponse = await axios.delete(`${base}player/${playerId}`)
                        // if (response.status === 200) {
                        //     // Removes player element from the DOM
                        //     playerElement.remove()
                        // }
                    } catch(error) {
                            console.error(`Error removing player with ID ${playerId}:`, error);
                    }
                }
            }
        })
      } else {
        mainBody.innerHTML = `<div class="not-found">Players not found</div>`
      }
    } catch (error) {
        console.error(error)
    }
}

const addPlayerBtnClick = async (e) => {
    e.preventDefault()
    infoBtns.replaceChildren()
    mainBody.replaceChildren()
    searchBar.value = ""
    const addPlayerText = `<form method="post" action="http://localhost:3001/player" id="add-player-form">
            <input type="url" id="image" name="image" placeholder="Image URL">
            <input type="text" id="name" name="name" placeholder="Name">
            <input type="text" id="position" name="position" placeholder="Position">
            <input type="number" id="depth_chart_pos" name="depth_chart_pos" placeholder="Depth Chart Position">
            <input type="number" id="number" name="number" placeholder="Number">
            <input type="number" id="age" name="age" placeholder="Age">
            <input type="text" id="height" name="height" placeholder="Height">
            <input type="number" id="weight" name="weight" placeholder="Weight">
            <input type="text" id="able_to_play" name="able_to_play" placeholder="Able to play">
            <input type="text" id="team" name="team" placeholder="Team">
            <input type="text" id="college" name="college" placeholder="College">
            <button onclick="window.location.href = 'http://127.0.0.1:5500/client/index.html';"type="submit" id="submit">Submit Player</button>
            </form>`

        mainBody.innerHTML += addPlayerText
        console.log('working')
        
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
            <h4 class="week">Wk: ${games.week}</h4>
            <p class="date">${games.date}</p>
            <p class="opponent">${games.opponent}</p>
            <p class="location">${games.location}</p>
            <p class="result">${games.result}</p>
            <p class="score">${games.score}</p>
            </div>`
  
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
                    </div>`

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