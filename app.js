// gitting html tags
const button = document.getElementById('new-game')
const score = document.getElementById('score')
const grid  = document.getElementById('grid-container')



// open Board start
// building the  grid tiles
const width = 4
const tiles = []
let tile 

// rendering the grid tiles
for (let i = 0; i < width * width; i++ ) {
  tile = document.createElement('div')  
  grid.appendChild(tile)
  tile.innerHTML = 0
  tile.id = i + 1
  tile.classList.add('tile-styled')
  tiles.push(tile)
}


//starting the game by clicking on the start game button
button.addEventListener('click', () =>{
  tiles.forEach(element => {
    element.innerHTML = 0
  
  })
  // grid.tile.innerHTML = 0
  // console.log(tile)
  //mapping over the grid tiles New array 
  const randomTile = tiles[Math.floor(Math.random() * tiles.length)]

  // rendering 2 or 4 value as number in 2 random tiles
  function appendingRandomVAlueInRandomTile(value){
    if ( value.innerHTML === '0'){
      const arrayValue = [2, 4]
      const randomValue = arrayValue[Math.floor(Math.random() * arrayValue.length )]
      //replacing the zero value with 2 or 4
      value.innerHTML = randomValue
    } else {
      value = tiles[Math.floor(Math.random() * tiles.length)]
      console.log('same')
    }

  }
  appendingRandomVAlueInRandomTile(randomTile)
  console.log(randomTile)

  //mapping over the grid tiles New array 
  let randomTileSd = tiles[Math.floor(Math.random() * tiles.length)]
  if ( randomTile === randomTileSd){
    randomTileSd = tiles[Math.floor(Math.random() * tiles.length)]
  }
  appendingRandomVAlueInRandomTile(randomTileSd)
})
//open board finish



// sliding rights, left and up and down  starts





