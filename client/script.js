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
            <button class="remove-button" data-player-id="${player._id}">Remove<button>`
  
        mainBody.innerHTML += playerText

    
        const removeBtn = mainBody.querySelector(`.remove-button`);
        removeBtn.addEventListener('click', (event) => {
            const playerElement = event.target.closest('.item-holder');
            if (playerElement) {
                const playerId = playerElement.getAttribute('data-player-id');
                axios.delete(`${base}/player/${playerId}`)
                    .then(() => {
                        // Removes player element from the DOM
                        playerElement.remove();
                    })
                    .catch((error) => {
                        console.error(`Error removing player with ID ${playerId}:`, error);
                    })
                }
            })
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
        // window.location.href = "http://127.0.0.1:5500/client/index.html"

    // const addPlayerForm = document.getElementById('add-player-form')
          
    // // Get the values from the form fields
    // const name = document.getElementById('name').value
    // const position = document.getElementById('position').value
    // const depthChartPos = document.getElementById('depth_chart_pos').value
    // const number = document.getElementById('number').value
    // const age = document.getElementById('age').value
    // const height = document.getElementById('height').value
    // const weight = document.getElementById('weight').value
    // const college = document.getElementById('college').value
    // const image = document.getElementById('image').value
    // const team = document.getElementById('team').value
    // const ableToPlay = document.getElementById('able_to_play').value
    // const submitBtn = document.getElementById('submit')


    // // Form values
    // const formData = {
    // name,
    // position,
    // depthChartPos,
    // number,
    // age,
    // height,
    // weight,
    // college,
    // image,
    // team,
    // ableToPlay
    // }

    // if (submitBtn) {
    //     submitBtn.addEventListener('click', async (event) => {
    //     event.preventDefault()
    //     console.log(event.target)

    //     try {
    //         const addPlayerResponse = await axios.post(`${base}player`, formData)
    //         const addPlayerData = addPlayerResponse.data
    //         console.log(addPlayerData)

    //         // Clear the form fields after submission
    //         addPlayerForm.reset()
    //     } catch (error) {
    //         console.error('Error adding player:', error)
    //     }
    //     })
    // }
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