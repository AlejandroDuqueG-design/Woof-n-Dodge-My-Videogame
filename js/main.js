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
  setInterval(gameLoop, Math.round(1000 / 60));

  //5. Set up any other interval or timeout that we may need
  setInterval(spawnObstacle, 1500);
}

function spawnObstacle() {
  obstacleArr.push(new Obstacle());
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
  }
}

function gameLoop() {
  //console.log("Interval running");
  dogObj.gravityEffect();
  //dogObj.automaticDogMovement();

  obstacleArr.forEach((eachObstacleObj) => {
    eachObstacleObj.automaticObstacleMovement();
  });

  checkDespawnObstacle();
  console.log(dogObj.y)
}

// - ※ EVENTS LISTENERS
startBtnNode.addEventListener("click", startGame);
//Keydown = Any key in the keyboard
document.addEventListener("keydown", (event) => {
  if (event.code === "Space" || event.code === "ArrowUp") {
    dogObj.jump();
  }
});

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
