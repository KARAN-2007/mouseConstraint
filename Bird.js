class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.canvasMouse= Mouse.create(canvas.elt)
    canvasMouse.pixelRatio = pixelDensity();
    var options = {
         mouse:canvasMouse,
         //collisionFilter:bird.body
         
    } 
    
    this.mConstraint=MouseConstraint.create(engine,options)
    World.add(world,this.mConstraint)
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    console.log(this.body.speed)
    super.display();
  }
}
