var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  
ground=new Ground(400,800,800,15)

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 70; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
       
    }

    for (var j = 40; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     //make 2 more rows
     for (var j = 70; j <=width-20; j=j+50) 
     {
     
        plinkos.push(new Plinko(j,275));
     }
     for (var j = 40; j <=width-10; j=j+50) 
     {
     
        plinkos.push(new Plinko(j,375));
     }
     for (var j = 70; j <=width-10; j=j+50) 
     {
     
        plinkos.push(new Plinko(j,455));
     }
}
 


function draw() {
  background("black");
  textSize(30)
 text("Score : "+score,20,30);
 text("GAME OVER",350,350)
 text(100,410,550)
text(200,500,550)
text(300,580,550)
text(400,650,550)
text(500,740,550)
text(100,340,550)
text(200,260,550)
text(300,170,550)
text(400,100,550)
text(500,20,550)
  Engine.update(engine);
  
  
   //display plinko using for loop 
ground.display()
   
   for (var j = 0;j < plinkos.length;j++){
    plinkos[j].display()
    
    }

   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}