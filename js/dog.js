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
    this.gravitySpeed = 2;
    this.jumpSpeed = 60;
    this.speed = 1;

    //Adjusting the initial dimension
    this.node.style.width = `${this.width}px`;
    this.node.style.height = `${this.height}px`;

    //Adjusting the initial position
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;

    //Adjusting speed movement properties

    this.isGround = true; //The Dog is in the ground
  }

  //Here are all the methods for the actions that the element (dog), will do

  gravityEffect() {
    //1.This will avoid that the dog crosses the screen bottom limit that was set up in 300px
    //2. gameBoxNode.offsetHeight - 55 will locate the dog in his initial position
    //3. Also, with this conditional we are checking if the sumatory of coordinate y, dog height and gravity speed are higher than gameBoxNode.offsetHeight - 55 that will mean, return anything

    if (this.y + this.height + this.gravitySpeed > gameBoxNode.offsetHeight - 55) {
      this.isGround = true
      return;
    }
    this.y += this.gravitySpeed;
    this.node.style.top = `${this.y}px`;
  }
  jump() {
    if (this.isGround) {
      this.y -= this.jumpSpeed;
      this.node.style.top = `${this.y}px`;

      this.isGround = false
    }
  }

  automaticDogMovement() {
    this.x += this.speed;
    this.node.style.left = `${this.x}px`;
  }
}
