
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground,bin, ball;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	
	ground = new Ground (400, height, 800,20)
	bin = new Dustbin(700,320,70,70);
	ball = new Ball(400, 350,40,40);
	
	Engine.run(engine);
}

function draw() {
	rectMode(CENTER);
	background(0);

	ground.display()
	bin.display();
	ball.display();
	keyPressed();

}


function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body, ball.body.position, { x: 85, y: -85 });
	}

}
