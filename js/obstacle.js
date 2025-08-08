//SAME PROCESS AS WITH THE DOG CLASS
class Obstacle {
  constructor(type, xPos, yPos) {
    // 🧪PROPERTIES of any obstacle (NODE) we will create
    this.node = document.createElement("img");
    this.node.className = "obstacle";

    //Creating a conditional for the "type" to be able to add different images and properties for the different obstacles
    this.type = type;
    if (this.type === "dogcatcher") {
      this.node.src = "./images/dogcatcher.gif";
      this.height = 90;
      this.width = 90;
    } else if (this.type === "ring") {
      this.node.src = "./images/ring.png";
      this.height = 90;
      this.width = 90;
    }

    gameBoxNode.append(this.node); //Appending the node to the game box

    this.x = xPos; //The obstacle will disapperar in the game box left border
    this.y = yPos;
    this.speed = 2;

    //Adjusting the initial dimension
    this.node.style.width = `${this.width}px`;
    this.node.style.height = `${this.height}px`;

    //Adjusting the initial position
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
  }

  // ⚙️METHODS for all the actions the obstacles will make
  automaticObstacleMovement() {
    this.x -= this.speed;
    this.node.style.left = `${this.x}px`;
  }
}
