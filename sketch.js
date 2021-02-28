var PLAY = 1;

var END = 0;

var gameState = PLAY;

//types of data stored in a variable
//a) Undefined data 
var Avni;
console.log(Avni);

//b) Null 
var V = null;
console.log(V);

//c) number data type
var S = 5;
console.log(S);

//d) string data type
var K = "my name is Avni"
console.log(K);

//e) bullian data type - true / false
var C = true;
console.log(C);

//var AK = true, 7, true; variables can only store 1 type of data 
//var AS = 777, 555, 3000

//var, let and array r called the data structures
//array is the data structure which can hold/store multiple types of data in the same variable
//data is stored [] 

//array with the same data type
var AH = [1100, 500, 3000, 200, 100, 27, 14, 400, 600, 30000]
console.log(AH);

console.log(AH[5]);

//array with diff data types
var AA = [true, 40000, false, "me", S, K]
console.log(AA[5]);

//u can store array inside array brackets[]
var SS = [[4, 5, 10000000, "me!!!"], [false, true, "HCF"], 500000, 111111]
console.log(SS[0][3]);

SS.push("AVNI");
console.log(SS);

SS.pop();
console.log(SS);

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;


function preload() {
    backgroundImg = loadImage("bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){

    if(gameState === PLAY){

        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});

    }

    
}


function mouseReleased(){

    slingshot.fly();

    gameState = END;

}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
    }
}
