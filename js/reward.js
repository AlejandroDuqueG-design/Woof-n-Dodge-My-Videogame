//REWARD
class Reward {
  constructor(type, xPos, yPos) {
    this.node = document.createElement("img"); 
    this.node.className = "reward"; // Nombrar el Nodo es opcional, pero es una buena practica
    this.type = type;
    if (this.type === "beef"){
      this.node.src = "./images/beef.png";
      this.height = 18;
      this.width = 24;
    }
    else if (this.type === "lamb"){
      this.node.src = "./images/lamb.png";
      this.height = 5;
      this.width = 5;
    }
    gameBoxNode.append(this.node); //A;adiendo el nodo a la game Box

    this.x = xPos; //No debe exceder el offsetWidth de la pantalla
    this.y = yPos; // 
    this.speed = 2;

    //Dimensión, como se va a ver en el juego
    this.node.style.width = `${this.width}px`;
    this.node.style.height = `${this.height}px`;

    //Posición inicial, como se va a ver en el juego
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;

  }

  // ⚙️METHODS for all the actions the rewards will make
  automaticRewardMovement() {
    this.x -= this.speed;
    this.node.style.left = `${this.x}px`;
  }
}
