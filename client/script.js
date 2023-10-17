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



// EVENT LISTENERS

rosterBtn.addEventListener('click', rosterBtnClick)
