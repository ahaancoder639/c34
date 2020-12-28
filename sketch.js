const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var bird, slingshot;
var bg ;
var gameState = "onSling";

function preload() {
   
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    

    ground = new Ground(600,height,1200,20);
   box = new Box(600,200,50,50);
   box1 = new Box(600,212,50,50);
   box2 = new Box(600,224,50,50);
   box3 = new Box(600,236,50,50);
   ball = new Ball(300,200,50,50);
   slingshot = new Slingshot(ball.body,{x:300,y:200})
}

function draw(){
    background("black")
   
    Engine.update(engine);
    //strokeWeight(4);
    
    ground.display();
   box.display();
    box1.display();
    box2.display();
    box3.display();
    ball.display();
    slingshot.display();
}






function mouseDragged(){

    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});












}