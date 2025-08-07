//REWARD
class Reward{
    constructor(type){
    this.node = document.createElement("img"); //Image Tag, to insert dog image as a node
    this.node.className = "reward"; // Naming the node (Optional, but good practice)
    this.type = type
    if (this.type === "beef"){
        this.node.src = "./images/beef.png";
        this.height = 20
        this.width = 35
    }if (this.type === "lamb"){
        this.node.src = "./images/lamb.png";
        this.height = 35
        this.width = 35
    }else if (this.type === chicken){
        this.node.src = "./images/chicken";
        this.height = 35
        this.width = 35

    }

gameBoxNode.append(this.node); //Appending the node to the game box
    }
}