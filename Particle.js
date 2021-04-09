class Particle{
    constructor(x,y,r,color){
        var options = {
            isStatic : true,
            friction = 0.2,
            restitution = 0.5
        }
    }
    this.body = Bodies.circle(x,y,r,options);
    this.color = color(random(0,255), random(0,255), random(0,255));
    World.add(world, this.body);
}