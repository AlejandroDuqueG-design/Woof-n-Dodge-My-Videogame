// - ※ELEMENTOS GLOBALES DEL DOM

// • Variables de las pantallas!/
// Game Start Screen
const startScreenNode = document.querySelector("#start-screen"); //Pantalla de Inicio;
// Game Screen Background
const gameScreenNode = document.querySelector("#game-screen"); //Pantalla de juego
//Game Over
const gameOverScreenNode = document.querySelector("#game-over-screen"); //Pantalla GameOver

// • Botones/
const startBtnNode = document.querySelector("#start-btn");
const playAgainBtnNode = document.querySelector("#play-again-btn");

// • Game Box - Juego, contenedor/
const gameBoxNode = document.querySelector("#game-box"); //Contenedor para elementos del juego
const scoreDisplay = document.querySelector("#score-display");

// - ※ VARIABLES GLOBALES

let dogObj; //Esta variable comienza vacia, solo se le asigna valor cuando comienza el juego y se pone a el perro en el juego
//let obstacleObj;
let obstacleArr = [];

let rewardArr = [];

//let obstacleObj esta comentada, porque primero necesitamos romper el codigo y cambiarla por un arr, ya que se necesitan multiples obstaculos saliendo, uno detras de otro
let obstacleSpawnFrequency = 3000; //(Frecuencia con la que salen los obstaculos en milisegundos)

let gameIntervalId;
let obstacleSpawnIntervalId;

let score = 0;

// 🔊 AÑADIENDO SONIDOS (Se crean Variables)
const jumpSound = new Audio("sounds/jumpsound.mp3");
const collisionSound = new Audio("sounds/collisionwithobstaclessound.mp3");
const gameOverSound = new Audio("sounds/gameoversound.mp3");
const backgroundMusic = new Audio("sounds/backgroundmusic.mp3");
const gotRewardSound = new Audio("sounds/gettingrewardsound.mp3");

// - ※ FUNCIONES GLOBALES DEL JUEGO
//START GAME
function startGame() {
  //1. Ocultar pantalla de Inicio
  startScreenNode.style.display = "none";

  //2. Mostrar pantalla de juego, cuando se hace click en el Btn Star Game
  gameScreenNode.style.display = "flex";

  //3. Se añade elemento inicial a la pantalla (Dog)
  dogObj = new Dog();

  //obstacleObj = new Obstacle(); We are now going to use the recently created empty arr let obstacleArr = []
  //obstacleArr.push (new Obstacle ()) //code in line 37 and 38 will be moved inside the function SpawnObstacle()
  //console.log(obstacleArr);

  //4. Start the game loop (Interval)
  gameIntervalId = setInterval(gameLoop, Math.round(1000 / 60));

  //5. Set up any other interval or timeout that we may need
  obstacleSpawnIntervalId = setInterval(spawnObstacle, obstacleSpawnFrequency);
  //Se invoca la funcion spawnObstacle para que salgan obstaculos de acuerdo al intervalo establecido

  //6. Adding background music
  backgroundMusic.loop = true;
  backgroundMusic.volume = 0.1;
  backgroundMusic.play();
}

function spawnObstacle() {
  //Variable to control how the obstacles spawn randomly at a different height in the ring case
  let randomPosYring = Math.floor(Math.random() * 100) + 100; //Random number between 100 y 200 (Multiplied by 100 and then adding 100)

  // Generar un numero aleatorio entre 0 y 3
  // 1. Condicional para determinar como van a aparecer los elementos:
  let randomNumber = Math.round(Math.random() * 3);
  //console.log(randomNumber);
  if (randomNumber === 0) {
    // - Si el número es 0, no pasa nada,
    return;
  } else if (randomNumber === 1) {
    // - Si el número es 1, aparece solo el enemigo,
    let dogCatcher = new Obstacle("dogcatcher", gameBoxNode.offsetWidth, 255); //This have the same oder ("type", xPos, yPos) as in the constructor parameters;
    obstacleArr.push(dogCatcher);
  } else if (randomNumber === 2) {
    // - Si el número es 2 aparece solo el aro y
    let ring = new Obstacle("ring", gameBoxNode.offsetWidth, randomPosYring); //This have the same oder ("type", xPos, yPOs) as in the constructor parameters;
    obstacleArr.push(ring);
    let beef = new Reward("beef", gameBoxNode.offsetWidth, randomPosYring + 40);
    rewardArr.push(beef);
  } else if (randomNumber === 3) {
    // - Si el número es 3 aparecen ambos
    let dogCatcher = new Obstacle("dogcatcher", gameBoxNode.offsetWidth, 255); //This have the same oder ("type", xPos, yPos) as in the constructor parameters;
    obstacleArr.push(dogCatcher);
    let ring = new Obstacle("ring", gameBoxNode.offsetWidth, randomPosYring - 20); //This have the same oder ("type", xPos, yPOs) as in the constructor parameters;
    obstacleArr.push(ring);

    // 2. X va a ser la misma para ambos obstacles
  }
}

function checkDespawnObstacle() {
  if (obstacleArr[0] && obstacleArr[0].x < 0 - obstacleArr[0].width) {
    /*Destruir los obstaculos una vez que pasan el borde izquiero de la pantalla y desaparecen.
    Para remover elementos del juego, necesitamos tener en cuenta los dos ambientes en los que se configura el juego 
     1.El DOM (Removiendo el Nodo)*/
    obstacleArr[0].node.remove();
    //2. Del código, in JS
    obstacleArr.splice(0, 1); //También se puede usar el metodo shift, siempre que sea para remover el primer elemento
  } else if (rewardArr[0] && rewardArr[0].x < 0) {
    rewardArr[0].node.remove();
    rewardArr.splice(0, 1);
  }
}

//GAME LOOP
function gameLoop() {
  //count++;
  dogObj.gravityEffect();

  obstacleArr.forEach((eachObstacleObj) => {
    eachObstacleObj.automaticObstacleMovement();
  });

  checkDespawnObstacle();
  checkCollisionDogObstacle();
  checkCollisionDogReward();

  rewardArr.forEach((eachRewardElement) => {
    eachRewardElement.automaticRewardMovement();
  });
}

function handleKeyboardEvent(event) {
  //Everything related with keys (keydown)
  if (event.code === "Space" || event.code === "ArrowUp") {
    dogObj.jump();
  } else if (event.code === "ArrowRight") {
    dogObj.dogMovement("right");
  } else if (event.code === "ArrowLeft") {
    dogObj.dogMovement("left");
  }
}

//GAME OVER
function gameOver() {
  //Inside this function we need:

  //1. Clear ALL Intervals and timeouts
  clearInterval(gameIntervalId);
  clearInterval(obstacleSpawnIntervalId);

  //2. Hide the game screen.
  gameScreenNode.style.display = "none";

  //3. Make the game over screen appears
  gameOverScreenNode.style.display = "flex";

  //4. We need to CLEAR the game (removing all nodes and restarting all variables)
  const obstacleElementsNodeList = document.querySelectorAll(".obstacle");
  obstacleElementsNodeList.forEach((eachNode) => eachNode.remove());
  obstacleArr.splice(0, obstacleArr.length);

  //const dogElementNode = document.querySelector(".dog");
  //dogElementNode.remove();

  dogObj.node.remove();
  dogObj = undefined;
  score = 0;
  updateScoreDisplay();

  backgroundMusic.pause();
  backgroundMusic.currentTime = 0;
}

//RESTART GAME
function restartGame() {
  // 1. Hide Game Over screen
  gameOverScreenNode.style.display = "none";

  // 2. Show again game screen
  gameScreenNode.style.display = "flex";

  startGame();
}

function checkCollisionDogObstacle() {
  //Es necesario iterar sobre cada elemento del arr.
  obstacleArr.forEach((eachObstacleObj) => {
    let isColliding = checkCollision(dogObj, eachObstacleObj);
    if (isColliding) {
      if (eachObstacleObj.type === "dogcatcher") {
        collisionSound.play();
        collisionSound.volume = 0.1; 
        gameOverSound.play();
        gameOverSound.volume = 0.1;

        gameOver();
      }
    }
  });
}

//FUNCIÓN PARA PONER UN CONTADOR DE PUNTOS
function updateScoreDisplay() {
  scoreDisplay.innerText = "Points: " + score;
}

//FUNCION PARA COMPROBAR COLISIÓN ENTRE EL PERRO Y LA RECOMPENSA
function checkCollisionDogReward() {
  rewardArr.forEach((eachRewardElement, index) => {
    let areColliding = checkCollision(dogObj, eachRewardElement);
    //console.log ("Revisando colisión")
    if (areColliding) {
      score++; // aumentar puntos cuando se come la carne
      eachRewardElement.node.remove(); // eliminar el nodo del DOM
      rewardArr.splice(index, 1); // eliminar del array en JS
      gotRewardSound.play(); // sonido al recoger carne
      updateScoreDisplay(); // actualizar el score cuando se come la carne
    }
  });
}

function checkCollision(element1, element2) {
  //Para intentar reducir el padding de los elemntos y que la colisión no parezca que se da cuando aun los elementos están distanciados uno de otro
  const dx = element1.x + element1.width / 2 - (element2.x + element2.width / 2);
  const dy = element1.y + element1.height / 2 - (element2.y + element2.height / 2);
  const distance = Math.sqrt(dx * dx + dy * dy);

  const collisionDistance = (element1.width + element2.width) / 2 - 10; // Ajusta el margen

  return distance < collisionDistance;
}

function checkCollisionWithTopBottomZones(element1, element2, topPercent, bottomPercent) {
  const topZoneHeight = element2.height * topPercent;
  const bottomZoneHeight = element2.height * bottomPercent;

  const topZone = {
    x: element2.x,
    y: element2.y,
    width: element2.width,
    height: topZoneHeight,
  };

  const bottomZone = {
    x: element2.x,
    y: element2.y + element2.height - bottomZoneHeight,
    width: element2.width,
    height: bottomZoneHeight,
  };

  // Función AABB para comprobar colisión con cada zona
  function isColliding(a, b) {
    return a.x < b.x + b.width && a.x + a.width > b.x && a.y < b.y + b.height && a.y + a.height > b.y;
  }
  return isColliding(element1, topZone) || isColliding(element1, bottomZone);
}

function updateLifeCounterDisplay() {
  const display = document.getElementById("lifeCounterDisplay");
  display.textContent = "Vidas: " + lifeCounter;
}

// - ※ EVENTS LISTENERS
startBtnNode.addEventListener("click", startGame);

playAgainBtnNode.addEventListener("click", restartGame);

//Keydown = Any key in the keyboard
document.addEventListener("keydown", handleKeyboardEvent);
