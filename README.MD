# WOOF 'N' DODGE

## [Play the Game!](https://alejandroduqueg-design.github.io/Woof-n-Dodge-My-Videogame/)

![Game Logo](www.your-image-logo-here.com)


# Description

A street **dog** runs the city looking for **food** while a an **animal control agent** is trying to catch him.


# Main Functionalities

- The dog can jump and move left right in order to avoid obstacles(Dog catcher)
- Rewards are presented as meet and are eaten by the dog
- The rewards/meet give points that are updated in a score 

# Backlog Functionalities

- Make the rings function as obstacle as well, but make the dog go through them to not collide.
- Set up a lifecounter.
- Improve the reward system, for example adding functionalities like strenght or inmunity to the dog.

# Technologies used

- HTML.
- CSS. 
- Javascript. 
- DOM Manipulation. 
- GitHub Projects.
- Excalidraw.
- Figma.

# States

- List here the different screens of your game.
- Start Game Screen with video game name logo and "Start" Button.
- Game box Screen, where the game actually happens, with a background image, the dog (main character), the obstacles amnd a score counter.

# Proyect Structure

- ## JS FILES: 

- ### main.js
Contain:
 - the Global DOM Elements.
 - Global Variables.
 - Sounds.
 - Global Functions.
   - startGame() 
   - gameLoop()
   - checkCollisionDogObstacle()
   - updateScoreDisplay()
   - gameOver()
   - restartGame()
 - Event Listeners  


### dog.js
- Here are the dog properties that let create the doig inside the main.js

`class Dog {
    constructor() {
      this.node = document.createElement("img"); 
      this.node.className = "dog"; 
      this.node.src = "./images/dogrunning.gif"; index HTML

    gameBoxNode.append(this.node); 

      this.x = 80;
      this.y = 300;
      this.height = 45;
      this.width = 75;
      this.gravitySpeed = 2;
      this.jumpSpeed = 160;
      this.speed = 80;

      this.node.style.width = `${this.width}px`;
      this.node.style.height = `${this.height}px`;

      this.node.style.position = "absolute";
      this.node.style.top = `${this.y}px`;
      this.node.style.left = `${this.x}px`;

      this.isGround = true; 
      this.canPassThroughRings = true; 
    }

    ``METHODS``
      gravityEffect() {
 
    let offset = 55;
    if (this.y + this.height + this.gravitySpeed > gameBoxNode.offsetHeight - offset) {
      this.isGround = true;
      return;
    }
    this.y += this.gravitySpeed;
    this.node.style.top = `${this.y}px`;
  }

  jump() {
    if (this.isGround) {
      console.log(this.y);
      this.y -= this.jumpSpeed;
      this.node.style.top = `${this.y}px`;

      this.isGround = false;
    }
    jumpSound.play();
  }

  dogMovement(direction) {
    if (direction === "right") {
      if (this.x + this.width + this.speed > gameBoxNode.offsetWidth) {
        return;
      }
      this.x += this.speed;
    } else if (direction === "left") {
      if (this.x - this.speed < 0) {
        return;
      }
      this.x -= this.speed;
    }
    this.node.style.left = `${this.x}px`;
  }
}`

## obstacle.js 
- Obstacles properties were created here in order to add obstacles to the main.js

    class Obstacle {
    constructor(type, xPos, yPos) {
    this.node = document.createElement("img");
    this.node.className = "obstacle";
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

    gameBoxNode.append(this.node); 

    this.x = xPos; 
    this.y = yPos;
    this.speed = 2;

    this.node.style.width = `${this.width}px`;
    this.node.style.height = `${this.height}px`;

    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
  }``



## reward.js 
- Was created as a class as well and contain all the properties that allow to add rewards in the main.js file.

    class Reward {
    constructor(type, xPos, yPos) {
    this.node = document.createElement("img"); 
    this.node.className = "reward";
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

    this.node.style.width = `${this.width}px`;
    this.node.style.height = `${this.height}px`;

    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;

  }

# Extra Links 

### Sketch
[Link](https://excalidraw.com/#json=o_DPMK8GAFzKPMJZmo0Wm,sOJgnKD30cCemdU6gjwGIA)

### GitHub Projects
[Link](https://github.com/users/AlejandroDuqueG-design/projects/3)

### Slides
[Link](www.your-slides-url-here.com)

## Deploy
[Link](https://alejandroduqueg-design.github.io/Woof-n-Dodge-My-Videogame/)