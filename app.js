// gitting html tags
const button = document.getElementById('new-game')
const score = document.getElementById('score')
const grid = document.getElementById('grid-container')



// open Board start
// building the  grid tiles
const width = 4
let tiles = []
let tile
let appendingRandomVAlueInRandomTile
// rendering the grid tiles
for (let i = 0; i < width * width; i++) {
  tile = document.createElement('div')
  grid.appendChild(tile)
  tile.innerHTML = 0
  tile.id = i
  tile.classList.add('tile-styled')
  tiles.push(tile)
}
//starting the game by clicking on the start game button
button.addEventListener('click', () => {
  //reseting the grid tile to zero every time user click the start button
  tiles.forEach(element => {
    element.innerHTML = 0
  })
  //mapping over the grid tiles New array 
  const randomTile = tiles[Math.floor(Math.random() * tiles.length)]

  // rendering 2 or 4 value as number in 2 random tiles
  function appendingRandomVAlueInRandomTile(randomTileParameter) {
    let valueOf2r4
    if (randomTileParameter.innerHTML === '0') {
      const arrayValue = [2, 4]
      valueOf2r4 = arrayValue[Math.floor(Math.random() * arrayValue.length)]
      //replacing the zero randomTileParameter with 2 or 4
      randomTileParameter.innerHTML = valueOf2r4
      console.log(tiles)
    } else {
      randomTileParameter = tiles[Math.floor(Math.random() * tiles.length)]
    }
  }
  appendingRandomVAlueInRandomTile(randomTile)

  //mapping over the grid tiles New array 
  let randomTileSd = tiles[Math.floor(Math.random() * tiles.length)]
  if (randomTile === randomTileSd) {
    randomTileSd = tiles[Math.floor(Math.random() * tiles.length)]
  }
  appendingRandomVAlueInRandomTile(randomTileSd)

})
//open board finish

console.log(tiles)

// sliding rights, left, up and down starts
let tstArray = []
const firstRow = []
const secondRow = []
const thirdRow = []
const fourthRow = []
let i
function building4Arrays() {
  for (i = 0; i < tiles.length; i++) {
    if (i < 4) {
      firstRow.push(tiles[i].innerHTML)
    } else if (i > 3 && i <= 7) {
      secondRow.push(tiles[i].innerHTML)
    } else if (i >= 8 && i < 12) {
      thirdRow.push(tiles[i].innerHTML)
    } else {
      fourthRow.push(tiles[i].innerHTML)
    }
  }
  tstArray = [firstRow, secondRow, thirdRow, fourthRow]
  console.log(tstArray)
  return tstArray
}
building4Arrays()

//addin 2 during the game running
// add 2 to the tile in the grid 
//make sure the tile dosent contain number geater than 0
grid.addEventListener('click', () => {
  const arr = []
  tiles.map((element) => {
    if (element.innerHTML === '0') {
      arr.push(element)
    }
  })
  const adding2InRandomTile = Math.floor(Math.random() * arr.length)
  arr[adding2InRandomTile].innerHTML = 2
  arr.map((element) => {
    if (!element.every()) {
      console.log('its over')
    }
  })
})

//slidding
// function userInput(e) {
//   if (e.keyCode === 39) {
//     console.log('reight key presed')
//   } else if (e.keyCode === 37) {
//     console.log('left key pressed')
//   } else if (e.keyCode === 38) {
//     console.log('up key pressed')
//   } else if (e.keyCode === 40) {
//     console.log('down key pressed')
//   }
// }
// userInput()

// window.addEventListener('keypress', userInput)