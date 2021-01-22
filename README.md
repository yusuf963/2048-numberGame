## Overview
This is my first project of the software engineering immersive course at GA London. The assignment was to create a grid-based game to be rendered in the browser, using HTML, CSS and JavaScript. The project was to be completed **individually** within **one week**.

Given a list of options from GA, I chose to re-create the classic game **2048**. Please note that while the game is designed in terms of roombas and cats, this documentation is written in terms of the original Pac-Man lingo, e.g. referring to _ghosts_ and _energizers_, as the underlying code also uses this jargon. 

## Brief

- **Render a game in the browser**
- **Design logic for winning & visually display which player won**
- **Include separate HTML / CSS / JavaScript files**
- Use **Javascript** for **DOM manipulation**
- **Deploy your game online**, where the rest of the world can access it
- Use **semantic markup** for HTML and CSS (adhere to best practices)

## Technologies used ![Sock](/images/sock.png)

- HTML
- CSS
- JavaScript (ES6)
- Git and GitHub
- Photoshop Elements
- Google Fonts
- Microsoft Excel

## Approach

### Board layout
- I decided to break to solve the problem into three major parts, and every part into multible sub part
- for the openeing gam board I decided to render the grid first then through two number(2-4)so I build a for loop to render the 16 tile and append it into the parent div 
```
for (let i = 0; i < width * width; i++) {
  tile = document.createElement('div')
  tile.innerHTML = 0
  tile.classList.add('tile-styled')
  grid.append(tile)
  gridTiles.push(tile)
  }
  ```


    
    

this building 2048 building game project been assigned by General Assembly teaching team as a result of first modula of javaScript

amony a list of project I have chosen to buid 2048 one
the technologies used in this project as its only front end project
I chosed to use HTML yo build the structure of the game and CSS to style the element and do some animations and sound effects
there was no fixed timing I can say as I was working on this every day for 4 days 
as welll as I used Agile managment mothology for this product and adding feature after reaching MVP

this product is smilte to the 2048 original game
