//SAME PROCESS AS WITH THE DOG CLASS
class Obstacle {
  constructor(type, xPos, yPos) {
    //Properties of any obstacle (NODE) we will create
    this.node = document.createElement("img");
    this.node.className = "obstacle";
    this.node.src = "./images/ring.png";

    gameBoxNode.append(this.node); //Appending the node to the game box

    this.x = xPos; //The obstacle will disapperar in the game box left border
    this.y = yPos
    this.height = 100;
    this.width = 50;
    this.gravitySpeed = 1;
    this.jumpSpeed = 30;
    this.speed = 2;
    //this.type = type //This will allow to know the type of element even inside methods

    //Adjusting the initial dimension
    this.node.style.width = `${this.width}px`;
    this.node.style.height = `${this.height}px`;

    //Adjusting the initial position
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
  }

  //Methods for all the actions the obstacles will make
  automaticObstacleMovement() {
    this.x -= this.speed;
    this.node.style.left = `${this.x}px`;
  }
}
