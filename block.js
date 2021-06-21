class Block{
    constructor(x, y, width, height) {
        var options = {
                     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.image = loadImage("block.png")
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.visibilty = 255;
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        if(this.body.speed<3){
         
          translate(pos.x, pos.y);
          rotate(angle);
        imageMode(CENTER);
       
        image(this.image,0,0,this.width, this.height);
        }
      else{
      tint(255,this.visibilty)
      this.visibilty-=5;
      image(this.image,0,0,this.width, this.height);
      World.remove(world,this.body)
      }
        pop();
      }
}
