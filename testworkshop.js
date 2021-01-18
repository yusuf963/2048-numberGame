const grid = document.getElementById('grid-container')
const button = document.getElementById('new-game')
const score = document.getElementById('score')

const gridTiles = []
let tile

//building the grid at the opening board game
for (let i = 0; i < 16; i++) {
  tile = document.createElement('div')
  tile.innerHTML = 0
  tile.classList.add('tile-styled')
  grid.append(tile)
  gridTiles.push(tile)
}
//event listener to through ranbdom 2 or 4 in a random tiles
button.addEventListener('click', () => {
  gridTiles.forEach((tile) => {
    tile.innerHTML = 0
  })
  function adding2ToTheOpeningBoard() {
    const randomTile = gridTiles[Math.floor(Math.random() * gridTiles.length)]
    if (randomTile.innerHTML === '0') {
      randomTile.innerHTML = Math.random() < 0.5 ? 2 : 4
    } else {
      adding2ToTheOpeningBoard()
    }
  }
  adding2ToTheOpeningBoard()
  adding2ToTheOpeningBoard()

  //sliding the tils
  function building4Arrays() {
    for (let i = 0; i < gridTiles.length; i++) {
      if (i % 4 === 0) {
        const firstCol = gridTiles[i].innerHTML
        const secondCol = gridTiles[i + 1].innerHTML
        const thirdCol = gridTiles[i + 2].innerHTML
        const fourthCol = gridTiles[i + 3].innerHTML
        const rows = [Number(firstCol), Number(secondCol), Number(thirdCol), Number(fourthCol)]
        console.log(rows)
        const sortedRow = rows.filter(number => number > 0)
        const emptyTile = 4 - sortedRow.length
        const filling = Array(emptyTile).fill(0)
        const newRow = filling.concat(sortedRow)
        gridTiles[i].innerHTML = newRow[0]
        gridTiles[i + 1].innerHTML = newRow[1]
        gridTiles[i + 2].innerHTML = newRow[2]
        gridTiles[i + 3].innerHTML = newRow[3]
        console.log(emptyTile)
        console.log(sortedRow)
        console.log(filling)
        console.log(newRow)
      }
    }
  } 
  //  building4Arrays()

  //sliding to left
  function building4ArraysToLeft() {
    for (let i = 0; i < gridTiles.length; i++) {
      if (i % 4 === 0) {
        const firstCol = gridTiles[i].innerHTML
        const secondCol = gridTiles[i + 1].innerHTML
        const thirdCol = gridTiles[i + 2].innerHTML
        const fourthCol = gridTiles[i + 3].innerHTML
        const rows = [Number(firstCol), Number(secondCol), Number(thirdCol), Number(fourthCol)]
        console.log(rows)
        const sortedRow = rows.filter(number => number > 0)
        const emptyTile = 4 - sortedRow.length
        const filling = Array(emptyTile).fill(0)
        const newRow = sortedRow.concat(filling)
        gridTiles[i].innerHTML = newRow[0]
        gridTiles[i + 1].innerHTML = newRow[1]
        gridTiles[i + 2].innerHTML = newRow[2]
        gridTiles[i + 3].innerHTML = newRow[3]
        console.log(emptyTile)
        console.log(sortedRow)
        console.log(filling)
        console.log(newRow)
      }
    }
  } building4ArraysToLeft()

  // adding the sum to the closest tile to the edge (with the sliding flow)
  function sumToTiles(){
    for (let i = 0; i < 15; i++){
      if (gridTiles[i].innerHTML === gridTiles[i + 1].innerHTML){
        const total = Number(gridTiles[i].innerHTML) + Number(gridTiles[i + 1].innerHTML)
        gridTiles[i].innerHTML = total
        gridTiles[i + 1].innerHTML = 0

      }
    }
  }

// evert Listener