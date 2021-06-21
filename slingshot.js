class SlingShot{
    constructor(bodyA,pointB){
    var options ={
        bodyA:bodyA,
        pointB:pointB,
        stifness:10,
        length:20,
    }
    this.slingShot = Constraint.create(options)
    World.add(world,this.slingShot)

}
fly(){
    this.slingShot.bodyA = null
}
 display(){
     if(this.slingShot.bodyA){

     fill("red")
     line(this.slingShot.bodyA.position.x,this.slingShot.bodyA.position.y,this.slingShot.pointB.x,this.slingShot.pointB.y)
     }
}
attach(body){
    this.slingShot.bodyA = body
}
}