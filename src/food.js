
class food {
  constructor(){
    this.position = new Vector();
  }
  refill(){
    let newX = Math.floor(Math.random()*19);   
    let newY = Math.floor(Math.random()*19);
    this.position.x = newX;
    this.position.y = newY;
  }
  show(){
    ctx.fillStyle = "red";
    ctx.fillRect(this.position.x*numOfCells,this.position.y*numOfCells,canvas.width/numOfCells,canvas.height/numOfCells);
  }
}
