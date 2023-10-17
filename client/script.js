// DOM ELEMENTS
const searchBar = document.querySelector('.search-bar')
const searchBtn = document.querySelector('.search-button')
const infoBtns = document.querySelector('.info-button')
const mainBody = document.querySelector('.main-body')
const homeBtn = document.querySelector('#home')
const rosterBtn = document.querySelector('#roster')
const depthChartBtn = document.querySelector('#depth-chart')
const scheduleBtn = document.querySelector('#schedule')


// VARIABLES
const base = 'http://localhost:3001/'




// FUNCTIONS
const homeBtnClick = () => {
    infoBtns.replaceChildren()
    mainBody.replaceChildren()
}

const rosterBtnClick = async () => {
    infoBtns.replaceChildren()
    mainBody.replaceChildren()
  
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
            <p class="college">College: ${player.college}</p>`
  
          mainBody.innerHTML += playerText;
        })
      } else {
        mainBody.innerHTML = `<div class="not-found">Players not found</div>`;
      }
    } catch (error) {
      console.error(error);
    }
  }

  const scheduleBtnClick = async () => {
    infoBtns.replaceChildren()
    mainBody.replaceChildren()
  
    try {
      const scheduleResponse = await axios.get(`${base}schedule`)
      const scheduleData = scheduleResponse.data[0].games
      console.log(scheduleData)
  
  
      if (scheduleData.length > 0) {
        scheduleData.forEach((games) => {
          const scheduleText = `
            <h5 class="week">${games.week}</h5>
            <p class="date">${games.date}</p>
            <p class="opponent">${games.opponent}</p>
            <p class="location">${games.location}</p>
            <p class="result">${games.result}</p>
            <p class="score">${games.score}</p>`
  
          mainBody.innerHTML += scheduleText;
        })
      } else {
        mainBody.innerHTML = `<div class="not-found">Game not found</div>`;
      }
    } catch (error) {
      console.error(error);
    }
  }


// EVENT LISTENERS

rosterBtn.addEventListener('click', rosterBtnClick)
scheduleBtn.addEventListener('click', scheduleBtnClick)
homeBtn.addEventListener('click', homeBtnClick)
