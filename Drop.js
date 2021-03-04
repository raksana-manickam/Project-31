class Drop {
  constructor(x, y){
    var options = { 
      'restitution':0.1,
      'friction':0.01
    }
      this.body = Bodies.circle(x, y, 3, options);
      this.radius = 3;
      World.add(world, this.body);
  }

  update(){
    if(this.body.position.y > height){
    Matter.Body.setPosition(this.body,{x:random(0, 700), y:random(0,10)});
    }
  }

  display(){
    stroke(0,0,255);
    fill("lightblue");
    ellipseMode(RADIUS);
    ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
  }
}
