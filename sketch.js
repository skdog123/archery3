const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase;
var computer, computerBase;

//var arrow;
var playerArrows=[]

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  //playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  playerBase = new PlayerBase(300,450, 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
 
  //Create Player Archer Object
  playerArcher = new PlayerArcher(
    width - 340,
    player.body.position.y-15,
    120,
    120
    );

  computerBase = new ComputerBase(
    width - 300,
    450,
    //random(450, height - 300),
    180,
    150
  );
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );
  computerArcher = new ComputerArcher(
    340,
  computer.body.position.y-15,
  120,
  120
);


  
  //Create an arrow Object
  playerArrow = new PlayerArrow(playerArcher.body.position.x,playerArcher.body.position.y,100,10)
  //var render = Matter.Render.create({ element:document.body, engine:engine, options: { width:windowWidth, height:windowHeight, wireframes:false } }); Matter.Render.run(render); 
}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
  player.display();
  playerArrow.display()

  computerBase.display();
  computer.display();
  
  playerArcher.display();
  computerArcher.display()


  //Display arrow();
  
  //if Space (32) key is pressed call shoot function of playerArrow
  if(keyCode === 32){
    
    //Call shoot() function and pass angle of playerArcher
    playerArrow.shoot(playerArcher.body.angle)

  }
  for (var i = 0; i < playerArrows.length; i++) {

    showArrows(i, playerArrows);
    
    } 
   }
    function keyPressed() { 
    if(keyCode === 32){
    var posX = playerArcher.body.position.x;   
    var posY = playerArcher.body.position.y;    
    var angle = playerArcher.body.angle;   
    var arrow = new PlayerArrow(posX, posY, 100, 10);    
    arrow.trajectory = [];    
    Matter.Body.setAngle(arrow.body, angle);   
    playerArrows.push(arrow);    
    }   
    }    
    function keyReleased () {   
    if(keyCode === 32){  
    if (playerArrows.length>0) {   
    var angle = playerArcher.body.angle;  
    playerArrows[playerArrows.length - 1].shoot(angle);  
    }   
    }   
    }  
    function showArrows(index, arrows) { 
    playerArrows[index].display();  
    }



