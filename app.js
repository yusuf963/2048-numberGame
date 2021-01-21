const grid = document.getElementById('grid-container')
const button = document.getElementById('new-game')
const score = document.getElementById('score')
const audio = document.getElementById('audio')
const camAudio = document.getElementById('cam-audio')
const h4 = document.getElementById('user-name')
const startGame = document.getElementById('start-game')
const throwingTwo = document.getElementById('throwing-two')
// make control for mobile devices
const up = document.getElementById('up')
const down = document.getElementById('down')
const right = document.getElementById('right')
const left = document.getElementById('left')
//changeIt.style.visibility = 'hidden';



// notefication to user to watch away from the creen
const intervalId = setInterval(() => {
  alert('Dear user, ite been infront of the screen for 5 minetus, its very recomended to take a 20 second break to keep your eyes in health ')
}, 500000)
//storing user data 
//Name
const userName = prompt('Hi, please write you name')
localStorage.setItem('data', userName)
const storedUserName = localStorage.getItem('data')
if (localStorage.getItem('data') !== 'null') {
  h4.textContent = storedUserName
} else {
  alert('you playing the game as guest')
  h4.textContent = 'Guest'
}
//Local Storage ends
let points = 0
const width = 4
const gridTiles = []
let randomTile
let tile
let count = 0
let storedScore = 0
// addin 2 or 4 to random tile position
function adding2ToTheOpeningBoard(arr) {
  randomTile = gridTiles[Math.floor(Math.random() * gridTiles.length)]
  if (randomTile.innerHTML === '0') {
    randomTile.innerHTML = Math.random() < 0.5 ? arr[0] : arr[1]
    startGame.play()
  } else {
    adding2ToTheOpeningBoard([2, 4])
  }
}
function adding2() {
  randomTile = gridTiles[Math.floor(Math.random() * gridTiles.length)]
  if (randomTile.innerHTML === '0') {
    randomTile.innerHTML = 2
  } else {
    adding2()
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
  adding2ToTheOpeningBoard([2, 4])
  adding2ToTheOpeningBoard([2, 4])
  changeTileColor()
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
        storedScore = points
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
        storedScore = points
      }
    }
  }

  function win() {
    for (let i = 0; i < gridTiles.length; i++) {
      if (gridTiles[i].innerHTML === '2048') {
        alert('YOU WON')
        window.location.reload()
        startGame.play()
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
      window.location.reload()
      startGame.play()
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

  function takingPic() {
    for (let i = 0; i < gridTiles.length; i++) {
      if (Number(gridTiles[i].innerHTML) === 32) {
        if (count === 0) {
          alert('wow you reached high number, press ok to take a photo and continue playing, don\'t forget to simle🥳')
          camAudio.play()
          score.classList.add('flashing')
        }
        count++
      }
    }
  }

  function changeTileColor() {
    for (let i = 0; i < gridTiles.length; i++) {
      if (Number(gridTiles[i].innerHTML) === 8) {
        gridTiles[i].classList.add('white')
      } else if (Number(gridTiles[i].innerHTML) === 12) {
        gridTiles[i].classList.remove('white')
        gridTiles[i].classList.add('brown')
      } else if (Number(gridTiles[i].innerHTML) === 16) {
        gridTiles[i].classList.remove('brown')
        gridTiles[i].classList.add('yellow')
      } else if (Number(gridTiles[i].innerHTML) === 20) {
        gridTiles[i].classList.remove('yellow')
        gridTiles[i].classList.add('green')
      } else if (Number(gridTiles[i].innerHTML) === 24) {
        gridTiles[i].classList.remove('green')
        gridTiles[i].classList.add('iris')
      } else if (Number(gridTiles[i].innerHTML) === 28) {
        gridTiles[i].classList.remove('iris')
        gridTiles[i].classList.add('bamboo')
      } else if (Number(gridTiles[i].innerHTML) === 32) {
        gridTiles[i].classList.remove('bamboo')
        gridTiles[i].classList.add('ecstasy')
      } else if (Number(gridTiles[i].innerHTML) <= 6) {
        gridTiles[i].classList.remove('red')
        gridTiles[i].classList.remove('yellow')
        gridTiles[i].classList.remove('white')
        gridTiles[i].classList.remove('brown')
        gridTiles[i].classList.remove('green')
        gridTiles[i].classList.remove('iris')
        gridTiles[i].classList.remove('bamboo')
        gridTiles[i].classList.remove('ecstasy')
      }
    }
  }
  document.addEventListener('keyup', sliding)
  function slidingRight() {
    building4ArraysToRight()
    sumRowTiles()
    adding2()
    throwingTwo.play()
    changeTileColor()
    audio.play()
    win()
    lose()
    takingPic()
    localStorage.setItem('dataPoints', storedScore)
  }
  function slidingLeft() {
    building4ArraysToLeft()
    sumRowTiles()
    adding2()
    changeTileColor()
    audio.play()
    win()
    lose()
    takingPic()
    localStorage.setItem('dataPoints', storedScore)
  }
  function slidngUp() {
    building4ArraysToUp()
    sumColTiles()
    adding2()
    changeTileColor()
    audio.play()
    win()
    lose()
    takingPic()
    localStorage.setItem('dataPoints', storedScore)
  }
  function slidingDown() {
    building4ArraysToDown()
    sumColTiles()
    adding2()
    changeTileColor()
    audio.play()
    win()
    lose()
    takingPic()
    localStorage.setItem('dataPoints', storedScore)
  }
  // adding control for mobile
  up.addEventListener('click', () => {
    building4ArraysToUp()
    sumColTiles()
    adding2()
    changeTileColor()
    audio.play()
    win()
    lose()
    takingPic()
    localStorage.setItem('dataPoints', storedScore)
  })
  down.addEventListener('click', () => {
    building4ArraysToDown()
    sumColTiles()
    adding2()
    changeTileColor()
    audio.play()
    win()
    lose()
    takingPic()
    localStorage.setItem('dataPoints', storedScore)
  })
  right.addEventListener('click', () => {
    building4ArraysToRight()
    sumRowTiles()
    adding2()
    throwingTwo.play()
    changeTileColor()
    audio.play()
    win()
    lose()
    takingPic()
    localStorage.setItem('dataPoints', storedScore)
  })
  left.addEventListener('click', () => {
    building4ArraysToLeft()
    sumRowTiles()
    adding2()
    changeTileColor()
    audio.play()
    win()
    lose()
    takingPic()
    localStorage.setItem('dataPoints', storedScore)
  })
  if (localStorage.dataPoints === undefined) {
    alert('this if your first time playing this game, your score is 0')
  }
  alert('your last Score was ' + localStorage.dataPoints + ', try to beat it this time')
})
//switching to Dark mode
const mode = document.getElementById('mode')
const body = document.querySelector('body')
const p = document.querySelectorAll('p')
mode.addEventListener('click', () => {
  if (mode.innerHTML === 'Dark') {
    body.classList.add('dark')
    score.classList.add('el-dark')
    h4.classList.add('el-dark')
    p[0].classList.add('el-dark')
    p[1].classList.add('el-dark')
    p[2].classList.add('el-dark')
    p[3].classList.add('el-dark')
    mode.innerHTML = 'Light'
  } else {
    body.classList.remove('dark')
    score.classList.remove('el-dark')
    h4.classList.remove('el-dark')
    p[0].classList.remove('el-dark')
    p[1].classList.remove('el-dark')
    p[2].classList.remove('el-dark')
    p[3].classList.remove('el-dark')
    // p[3].classList.remove('el-dark')
    mode.innerHTML = 'Dark'
  }
})


// appearing the instructing text
const instructingText = document.getElementById('learn-text')
const howToPlayBtn = document.getElementById('how-to-play')
howToPlayBtn.addEventListener('click', () => {
  instructingText.style.display = 'block'
  setInterval(() => {
    instructingText.style.display = 'none'
  }, 5000)
})


// const switchTheme = (event) => {
//   if (event.target.checked) {
//     localStorage.setItem('theme', 'dark')
//     darkMode()
//   } else {
//     localStorage.setItem('theme', 'light')
//     lightMode()
//   }
// }

// Event Listenre
//localstorage
// const currentTheme = localStorage.getItem('theme')
// if (currentTheme)
//   document.documentElement.setAttribute('data-theme', currentTheme)
// if (currentTheme === 'dark') {
//   toggleSwitch.checked = true
//   darkMode()
// }