# 2048-numberGame

![2048](https://create2048.com/2048.jpg)

2048 is a modern classic. The player moves numbered tiles up, down, left and right in a 4x4 grid. Matching tiles merge when they touch, and a new tile '2' is added to a random spot each turn. The player aims to create the tile 2048.


## Resources

* [Play 2048](https://play2048.co/)
* [2048 - Wikipedia](https://en.wikipedia.org/wiki/2048_(video_game))

## Requirements

* The player should be able to clear the board.
* The player's score should be displayed at the end of the game

## Suggested enhancements

* Responsive design
* Only generate a random new tile if the player has caused at least one tile to move
* Scoring system
* Persistent leaderboard using `localStorage`


## Challenges

The biggest challenge is getting the rows and columns within the grid to combine - for example, 
a row of tiles `2 2 2 empty` will combine differently when the user moves them right or left. 

## Tips

* Make sure you spend plenty of time planning _before_ you start coding
* Make sure you understand all of the rules of the game
* Make a checklist of all the features you want to add to the game
* Keep It Stupid Simple
* Refactor your code as you go
* Make sure you have a good idea of what your MVP is and only add extra features once you have achieved it
* Do just enough styling to get started, then once you have your MVP polish up the styling before moving on
