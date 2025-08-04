class Dog {
  constructor() {
    //Properties for any dog we create NODE
    this.node = document.createElement("img"); //Image Tag, to insert dog image as a node
    this.node.className = "dog"; // Naming the node (Optional, but good practice)
    this.node.src = "./images/dogrunning.gif"; //Adding the source for that image, the src, should always be (./), because it should be access as if the node, the HTML Element was inside index HTML


    gameBoxNode.append(this.node)

this.x = 90
this.y = 275
this.height = 65
this.width = 95

this.node.style.width = `${this.width}px`
this.node.style.height = `${this.height}px`
this.node.style.position = "absolute"
this.node.style.top = `${this.y}px`
this.node.style.left = `${this.x}px`
}

  //Here are all the methods for the Actions of any dog we create
}
