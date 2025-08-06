// - ※GLOBAL DOM ELEMENTS

// • Screens Variables!/
// Game Start Screen
const startScreenNode = document.querySelector("#start-screen");
// Game Screen Background
const gameScreenNode = document.querySelector("#game-screen");
//Game Over
const gameOverScreenNode = document.querySelector("#game-over-screen");

// • Buttons/
const startBtnNode = document.querySelector("#start-btn");

// • Game Box/
const gameBoxNode = document.querySelector("#game-box");

// - ※ GLOBAL GAME VARIABLES

let dogObj; //THis will be empty by now, cause the gamee has not started
//let obstacleObj;
let obstacleArr = []; //let obstacleObj is commented because we need to break the code and change it for an arr, since we need multiple obstacles spawing one after the other

let obstacleSpawnFrequency = 3000;

let gameIntervalId;
let obstacleSpawnIntervalId;

let lifeCounter = 0;

// - ※ GLOBAL GAME FUNCTIONS
function startGame() {
  //1. Hiding the start game screen when btn click
  startScreenNode.style.display = "none";

  //2. Display the game screen after btn click
  gameScreenNode.style.display = "flex";

  //3. Adding inicial element (Dog) to the game
  dogObj = new Dog();
  //console.log(dogObj);

  //obstacleObj = new Obstacle(); We are now going to use the recently created empty arr let obstacleArr = []
  //console.log(obstacleObj);
  //obstacleArr.push (new Obstacle ()) //code in line 37 and 38 will be moved inside the function SpawnObstacle()
  //console.log(obstacleArr);

  //4. Start the game loop (Interval)
  gameIntervalId = setInterval(gameLoop, Math.round(1000 / 60));

  //5. Set up any other interval or timeout that we may need
  obstacleSpawnIntervalId = setInterval(spawnObstacle, obstacleSpawnFrequency);
}

function spawnObstacle() {
  //Variable to control how the obstacles spawn randomly
  //let randomPosYTop = Math.floor(Math.random() * - 110)//Random number between -100 and 0

  let obstacleTop = new Obstacle(610, 190); //This have the same oder (xPos, yPos) as in the constructor parameters;
  obstacleArr.push(obstacleTop);

  let obstacleBottom = new Obstacle(770, 130); //This have the same oder (xPos, yPOs) as in the constructor parameters;
  obstacleArr.push(obstacleBottom);

  //console.log(obstacleArr);
}

function checkDespawnObstacle() {
  if (obstacleArr[0] && obstacleArr[0].x < 0 - obstacleArr[0].width) {
    /*Destroy the obstacles once they have pass the left screen border and disappear 
    To remove elements from the game we need to consider both enviroments, 
     1.first from the DOM */
    obstacleArr[0].node.remove();
    //2. from the code
    obstacleArr.splice(0, 1); //or shift can also be used here, if it is always to remove the first element

    lifeCounter += 0.5;
  }
}
let count = 0;
function gameLoop() {
  count++;
  dogObj.gravityEffect();
  //dogObj.automaticDogMovement();
          
  obstacleArr.forEach((eachObstacleObj) => {
    eachObstacleObj.automaticObstacleMovement();
  });

  checkDespawnObstacle();
  checkCollisionDogObstacle();
}

function handleDogJump(event) {
  if (event.code === "Space" || event.code === "ArrowUp") {
    dogObj.jump(); //This function was created as a good practice, better to have the event organized in a function
  }
}

function gameOver() {
  //Inside this function we need:

  //1. Clear ALL Intervals and timeouts
  clearInterval(gameIntervalId);
  clearInterval(obstacleSpawnIntervalId);

  //2. Hide the game screen.
  gameScreenNode.style.display = "none";

  //3. Make the gam over screen appears
  gameOverScreenNode.style.display = "flex";

  //4. We need to CLEAR the game (removing all nodes and restarting all variables)
}

function checkCollisionDogObstacle() {
  //We need to first iterate over the arr
  obstacleArr.forEach((eachObstacleObj) => {
    let isColliding = checkCollision(dogObj, eachObstacleObj);
    
    //console.log(isColliding);
    if (isColliding) {
      gameOver();
    }
  });
}

function checkCollision(element1, element2) {
  
  if (// Axis-Aligned Bounding Boxes (AABBs) Mathematic comprobation very typical for this kind of cases
    element1.x < element2.x + element2.width &&
    element1.x + element1.width > element2.x &&
    element1.y < element2.y + element2.height &&
    element1.y + element1.height > element2.y
  ) {
    return true;
  } else {
    return false;
  }
}

// - ※ EVENTS LISTENERS
startBtnNode.addEventListener("click", startGame);
//Keydown = Any key in the keyboard
document.addEventListener("keydown", handleDogJump);

startGame();

/* Planning of the Game in JS (Different} Elements, their properties and the actions they will make)
Game ovweview: A street dog 🐶 needs to avoid obstacles that are spawing while he runs trough the city.
The dog will also find randomly food rewards 🥩🍗🍖 that can help him to stay healthy and get some "inmuinity" while he sort out the obstacles.
In some of this obstacles there are also food rewards.

ACTIONS - Game Loop
a. Dog movement, always in X coordinate (horizontal, right) (Example: T-Rex Chrome Dino Game)
b. Obstacles 💀 move the opossite way (X, horizontal, left), at a different speed and at different levels in Y coordinate

1. For the Dog 🐶
   - Position Coordinatess x, y, h (height), w (width), speed (SpeedGravity, and speedJump)
   - Action: Jump
   - Gravity
   
2. For the Obstacles 💀 
   -  Position Coordinatess x, y, h (height), w (width), speed.
   - Action (Automatic movement ← )

3. Spawn the Obstacles and unSpawn the Obstacles   
   
4. Collision between Dog and Obstacles   

5. Game Over (Specialized Function, because maybe the "game over" can be trigger by other facts beside the collision with the obstacles)

BONUS
6. Life counter
7. Reward / Inmunity - Recover system
*/
