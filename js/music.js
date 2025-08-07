const jumpSound = new Audio("sounds/jump.mp3");
const collisionSound = new Audio("sounds/collisionwithobstaclessound.mp3");
const gameOverSound = new Audio("sounds/gameoversound.mp3");
const backgroundMusic = new Audio("sounds/backgroundmusic.mp3");
const gotRewardSound = new Audio ("sounds/gettingrewardsound.mp3")

// Reproducir sonido al saltar
function jump() {
  jumpSound.play();
}

// Reproducir sonido al colisionar
function handleCollision() {
  collisionSound.play();
}

// Reproducir música de fondo en bucle
backgroundMusic.loop = true;
backgroundMusic.volume = 0.5; 
backgroundMusic.play();


//Para sonidos cortos (como saltos), puedes clonar el audio para evitar que se corte si se reproduce varias veces seguidas:
function playSound(sound) {
  const clone = sound.cloneNode();
  clone.play();
}