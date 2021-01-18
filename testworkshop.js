const grid = document.getElementById('grid-container')
const button = document.getElementById('new-game')
const score = document.getElementById('score')
const audio = document.getElementById('audio')

console.log(audio)
let points = 0
const width = 4
const gridTiles = []
let tile
// addin 2 or 4 to random tile position
function adding2ToTheOpeningBoard() {
  const randomTile = gridTiles[Math.floor(Math.random() * gridTiles.length)]
  if (randomTile.innerHTML === '0') {
    randomTile.innerHTML = Math.random() < 0.5 ? 2 : 4
  } else {
    adding2ToTheOpeningBoard()
  }
}
//building the grid at the opening board game
for (let i = 0; i < width * width; i++) {
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
  adding2ToTheOpeningBoard()
  adding2ToTheOpeningBoard()


  //sliding the tils
  function building4ArraysToRight() {
    for (let i = 0; i < gridTiles.length; i++) {
      if (i % 4 === 0) {
        const firstCol = gridTiles[i].innerHTML
        const secondCol = gridTiles[i + 1].innerHTML
        const thirdCol = gridTiles[i + 2].innerHTML
        const fourthCol = gridTiles[i + 3].innerHTML
        const rows = [Number(firstCol), Number(secondCol), Number(thirdCol), Number(fourthCol)]
        const sortedRow = rows.filter(number => number > 0)
        const emptyTile = 4 - sortedRow.length
        const filling = Array(emptyTile).fill(0)
        const newRow = filling.concat(sortedRow)
        gridTiles[i].innerHTML = newRow[0]
        gridTiles[i + 1].innerHTML = newRow[1]
        gridTiles[i + 2].innerHTML = newRow[2]
        gridTiles[i + 3].innerHTML = newRow[3]
      }
    }
  }

  //sliding to left
  function building4ArraysToLeft() {
    for (let i = 0; i < gridTiles.length; i++) {
      if (i % 4 === 0) {
        const firstCol = gridTiles[i].innerHTML
        const secondCol = gridTiles[i + 1].innerHTML
        const thirdCol = gridTiles[i + 2].innerHTML
        const fourthCol = gridTiles[i + 3].innerHTML
        //giting neew array of number with 4 rows
        const rows = [Number(firstCol), Number(secondCol), Number(thirdCol), Number(fourthCol)]
        const sortedRow = rows.filter(number => number > 0)
        const emptyTile = 4 - sortedRow.length
        const filling = Array(emptyTile).fill(0)
        const newRow = sortedRow.concat(filling)
        gridTiles[i].innerHTML = newRow[0]
        gridTiles[i + 1].innerHTML = newRow[1]
        gridTiles[i + 2].innerHTML = newRow[2]
        gridTiles[i + 3].innerHTML = newRow[3]
      }
    }
  }
  // sliding down
  function building4ArraysToDown() {
    for (let i = 0; i < 4; i++) {
      const firstCol = gridTiles[i].innerHTML
      const secondCol = gridTiles[i + width].innerHTML
      const thirdCol = gridTiles[i + width * 2].innerHTML
      const fourthCol = gridTiles[i + width * 3].innerHTML
      //giting neew array of number with 4 column
      const col = [Number(firstCol), Number(secondCol), Number(thirdCol), Number(fourthCol)]

      const sortedCol = col.filter(number => number > 0)
      const emptyTile = 4 - sortedCol.length
      const filling = Array(emptyTile).fill(0)
      const newCol = filling.concat(sortedCol)
      gridTiles[i].innerHTML = newCol[0]
      gridTiles[i + width].innerHTML = newCol[1]
      gridTiles[i + width * 2].innerHTML = newCol[2]
      gridTiles[i + width * 3].innerHTML = newCol[3]
    }
  }

  //sliding up 
  function building4ArraysToUp() {
    for (let i = 0; i < 4; i++) {
      const firstCol = gridTiles[i].innerHTML
      const secondCol = gridTiles[i + width].innerHTML
      const thirdCol = gridTiles[i + width * 2].innerHTML
      const fourthCol = gridTiles[i + width * 3].innerHTML
      const col = [Number(firstCol), Number(secondCol), Number(thirdCol), Number(fourthCol)]

      const sortedCol = col.filter(number => number > 0)
      const emptyTile = 4 - sortedCol.length
      const filling = Array(emptyTile).fill(0)
      const newCol = sortedCol.concat(filling)
      gridTiles[i].innerHTML = newCol[0]
      gridTiles[i + width].innerHTML = newCol[1]
      gridTiles[i + width * 2].innerHTML = newCol[2]
      gridTiles[i + width * 3].innerHTML = newCol[3]
    }
  }

  // adding the sum to the closest tile to the edge (with the sliding flow)
  function sumRowTiles() {
    for (let i = 0; i < 15; i++) {
      if (gridTiles[i].innerHTML === gridTiles[i + 1].innerHTML) {
        const total = Number(gridTiles[i].innerHTML) + Number(gridTiles[i + 1].innerHTML)
        gridTiles[i].innerHTML = total
        gridTiles[i + 1].innerHTML = 0
        points += total
        score.innerHTML = points
      }
    }

  }
  // adding the sum to the closest tile to the edge (with the sliding flow)
  function sumColTiles() {
    for (let i = 0; i < 12; i++) {
      if (gridTiles[i].innerHTML === gridTiles[i + width].innerHTML) {
        const total = Number(gridTiles[i].innerHTML) + Number(gridTiles[i + width].innerHTML)
        gridTiles[i].innerHTML = total
        gridTiles[i + width].innerHTML = 0
        points += total
        score.innerHTML = points
      }
    }
  }

  function win() {
    for (let i = 0; i < gridTiles.length; i++) {
      if (gridTiles[i].innerHTML === '8') {
        alert('YOU WON')
      }
    }
  }
  win()

  function lose() {
    let count = 0
    for (let j = 0; j < gridTiles.length; j++) {
      if (gridTiles[j].innerHTML === '0') {
        count++
      }
    }
    if (count === 0) {
      alert('YOU LOST')
    }
  }
  lose()
  //event listerner
  function sliding(event) {
    if (event.keyCode === 39) {
      slidingRight()
    } else if (event.keyCode === 37) {
      slidingLeft()
    } else if (event.keyCode === 38) {
      slidngUp()
    } else if (event.keyCode === 40) {
      slidingDown()
    }
  }
  document.addEventListener('keyup', sliding)

  function slidingRight() {
    building4ArraysToRight()
    sumRowTiles()
    // building4ArraysToRight()
    adding2ToTheOpeningBoard()
    changeTileColor()
    audio.play()
  }
  function slidingLeft() {
    building4ArraysToLeft()
    sumRowTiles()
    // building4ArraysToLeft()
    adding2ToTheOpeningBoard()
    changeTileColor()
    audio.play()
  }
  function slidngUp() {
    building4ArraysToUp()
    sumColTiles()
    // building4ArraysToUp()
    adding2ToTheOpeningBoard()
    changeTileColor()
    audio.play()
  }
  function slidingDown() {
    building4ArraysToDown()
    sumColTiles()
    // building4ArraysToDown()
    adding2ToTheOpeningBoard()
    changeTileColor()
    audio.play()
  }

  //changing tile color
  function changeTileColor() {
    for (let i = 0; i < gridTiles.length; i++) {
      if (Number(gridTiles[i].innerHTML) >= 8) {
        gridTiles[i].classList.add('yellow')
      } else if (Number(gridTiles[i].innerHTML) >= 24) {
        gridTiles[i].classList.remove('white')
        gridTiles[i].classList.add('red')
      } else if (Number(gridTiles[i].innerHTML) >= 48) {
        gridTiles[i].classList.remove('red')
        gridTiles[i].classList.add('yellow')
      }
    }
  }
})