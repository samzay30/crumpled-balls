var ball;
class Ball{
    constructor(x, y, width, radius) 
    {
        var options = {
          isStatic: false,
          restitution: 0.3,
          friction: 0.5,
          density: 1.2
        }        


        
        ball = Bodies.circle(x,y,radius,options)
        this.image = loadImage("image/paper.png");
      }
      display()
      {

        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);

        ellipseMode(RADIUS)
        ellipse(200,200,20,20)
      }
}
 