//DOG CLASS
class Dog {
  constructor() {
    //Properties for any dog (NODE) we create, all of them inside the constructor
    this.node = document.createElement("img"); //Image Tag, to insert dog image as a node
    this.node.className = "dog"; // Naming the node (Optional, but good practice)
    this.node.src = "./images/dogrunning.gif"; //Adding the source for that image, the src, should always be (./), because it should be access as if the node, the HTML Element was inside index HTML

    gameBoxNode.append(this.node); //Appending the node to the game box

    this.x = 70;
    this.y = 300;
    this.height = 45;
    this.width = 75;
    this.gravitySpeed = 1;
    this.jumpSpeed = 30;
    this.speed = 2

    //Adjusting the initial dimension
    this.node.style.width = `${this.width}px`;
    this.node.style.height = `${this.height}px`;

    //Adjusting the initial position
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;

    //Adjusting speed movement properties
  }

  //Here are all the methods for the actions that the element (dog), will do

  gravityEffect() {
    //This will avoid that the dog crosses the screen bottom limit
    if (this.y + this.height > gameBoxNode.offsetHeight - 100) {
      return;
    }
    this.y += this.gravitySpeed;
    this.node.style.top = `${this.y}px`;
  }
  jump() {
    if (this.y < 0) {
      //If the dog is above the top of the screen
      return; //Break the function
    }
    this.y -= this.jumpSpeed;
    this.node.style.top = `${this.y}px`;
  }

  automaticDogMovement() {
    this.x += this.speed;
    this.node.style.left = `${this.x}px`;
  }
}
