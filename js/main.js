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







// - ※ GLOBAL GAME FUNCTIONS
function startGame() {
  //1. Hiding the start game screen when btn click
  startScreenNode.style.display = "none";

  //2. Display the game screen after btn click
  gameScreenNode.style.display = "flex";

  //3. Adding inicial element (Dog) to the game
const dogObj = new Dog()
console.log (dogObj)



  setInterval(gameLoop, Math.round(1000 / 60));
}

function gameLoop() {
  //console.log("Interval running");
}

// - ※ EVENTS LISTENERS
startBtnNode.addEventListener("click", startGame);

/* Planning of the Game in JS (Different Elements, their properties and the actions they will make)
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
