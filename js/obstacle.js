//SAME PROCESS AS WITH THE DOG CLASS
class Obstacle {
  constructor() {
    //Properties of any obstacle (NODE) we will create
    this.node = document.createElement("img");
    this.node.className = "obstacle";
    this.node.src = "./images/firering.png";

    gameBoxNode.append(this.node); //Appending the node to the game box

    this.x = 500;
    this.y = 190;
    this.height = 110;
    this.width = 50;
    this.gravitySpeed = 1;
    this.jumpSpeed = 30;

    //Adjusting the initial dimension
    this.node.style.width = `${this.width}px`;
    this.node.style.height = `${this.height}px`;

    //Adjusting the initial position
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;

    this.speed = 2
  }

  //Methods for all the actions the obstacles will make
  automaticObstacleMovement() {
    this.x -= this.speed;
    this.node.style.left = `${this.x}px`;
  }
}
