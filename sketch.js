
var player1,player2,playerGroup
var player1Image,changeInPositionY  
var gameState,score1,score2,difficulty,player1Name,player2Name,name1,name2,selectionState,nameButton

function preload(){
  fieldImage = loadImage("background.png")
  player1Image = loadImage("team1.png")
  player2Image = loadImage("team2.png")
  ballImage = loadImage("ball.png")
  netImage = loadImage("goalpostNet.png")
  hardIcon = loadImage("hardImage.png")
  easyIcon = loadImage("easyImage.png")
  endTeam1 = loadImage("teamlogo1.png")
  endTeam2 = loadImage("teamlogo2.png")
  logo = loadImage("logo.png")
  sponser1 = loadImage("sponserImage1.png")
  sponser2 = loadImage("sponserImage2.png")
  sponser3 = loadImage("sponserImage3.png")
  soundFormats('wav')
  kickSound = loadSound("kickSound.wav")
  soundFormats('mp3')
  intro = loadSound("intro.mp3")
  
}

function setup() {
  createCanvas(1260,600);
  
  name1 = createInput("Player 1 Name")
  name2 = createInput("Player 2 Name")
  nameButton = createButton('Submit')
  nameButton.position(2000,2000)
  name1.position(2000,2000)
  name2.position(2000,2000)
  gameState="start";
  selectionState="name"
  score1=0;
  score2=0;
  totalScore=0;
  difficulty=0;
  playerGroup = new Group()
  opponentGroup = new Group()
  
  
  

   

  //buttons

  
   //edges

 rightedge1 = createSprite(1232,127,5,200)
 rightedge1.shapeColor = "white"
 rightedge2 = createSprite(1232,473,5,200)
 rightedge2.shapeColor = "white"
 leftedge1 = createSprite(28,127,5,200)
 leftedge1.shapeColor = "white"
 leftedge2 = createSprite(28,473,5,200)
 leftedge2.shapeColor = "white"
 topedge = createSprite(630,25,1210,5)
 topedge.shapeColor = "white"
 bottomedge = createSprite(630,575,1210,5)
 bottomedge.shapeColor = "white"

   //bars
  
   bar1 = createSprite(50,300,3,1200)
   bar1.shapeColor = "orange";
   bar2 = createSprite(180,300,3,1200)
   bar2.shapeColor = "orange";
   bar3 = createSprite(360,300,3,1200)
   bar3.shapeColor = "blue";
   bar4 = createSprite(540,300,3,1200)
   bar4.shapeColor = "orange";
   bar5 = createSprite(720,300,3,1200)
   bar5.shapeColor = "blue";
   bar6 = createSprite(900,300,3,1200)
   bar6.shapeColor = "orange";
   bar7 = createSprite(1080,300,3,1200)
   bar7.shapeColor = "blue";
   bar8 = createSprite(1210,300,3,1200)
   bar8.shapeColor = "blue";
 
  //players
  
  player1 = createSprite(180,225,35,30)
  player1.addImage(player1Image);
  player1.scale = 0.02;
  playerGroup.add(player1)
  player2 = createSprite(180,375,35,30)  
  player2.addImage(player1Image);
  player2.scale = 0.02;
  playerGroup.add(player2)
  player3 = createSprite(540,100,35,30)
  player3.addImage(player1Image);
  player3.scale = 0.02;
  playerGroup.add(player3)
  player4 = createSprite(540,200,35,30)
  player4.addImage(player1Image)
  player4.scale = 0.02;
  playerGroup.add(player4)
  player5 = createSprite(540,300,35,30)
  player5.addImage(player1Image);
  player5.scale = 0.02;
  playerGroup.add(player5)
  player6 = createSprite(540,400,35,30)
  player6.addImage(player1Image);
  player6.scale = 0.02;
  playerGroup.add(player6)
  player7 = createSprite(540,500,35,30)
  player7.addImage(player1Image);
  player7.scale = 0.02;
  playerGroup.add(player7)
  player8 = createSprite(900,150,35,30)
  player8.addImage(player1Image);
  player8.scale = 0.02;
  playerGroup.add(player8)
  player9 = createSprite(900,300,35,30)
  player9.addImage(player1Image);
  player9.scale = 0.02;
  playerGroup.add(player9)
  player10 = createSprite(900,450,35,30)
  player10.addImage(player1Image);
  player10.scale = 0.02;
  playerGroup.add(player10)
  player11 = createSprite(50,300,35,30)
  player11.addImage(player1Image);
  player11.scale = 0.02;
  playerGroup.add(player11)
  
  //opponents
  opponent1 = createSprite(360,150,35,30)
  opponent1.addImage(player2Image)
  opponent1.scale = 0.02;
  opponentGroup.add(opponent1)
  opponent2 = createSprite(360,300,35,30)  
  opponent2.addImage(player2Image)
  opponent2.scale = 0.02;
  opponentGroup.add(opponent2)
  opponent3 = createSprite(360,450,35,30)
  opponent3.addImage(player2Image)
  opponent3.scale = 0.02;
  opponentGroup.add(opponent3)
  opponent4 = createSprite(720,100,35,30)
  opponent4.addImage(player2Image)
  opponent4.scale = 0.02;
  opponentGroup.add(opponent4)
  opponent5 = createSprite(720,200,35,30)
  opponent5.addImage(player2Image)
  opponent5.scale = 0.02;
  opponentGroup.add(opponent5)
  opponent6 = createSprite(720,300,35,30)
  opponent6.addImage(player2Image)
  opponent6.scale = 0.02;
  opponentGroup.add(opponent6)
  opponent7 = createSprite(720,400,35,30)
  opponent7.addImage(player2Image)
  opponent7.scale = 0.02;
  opponentGroup.add(opponent7)
  opponent8 = createSprite(720,500,35,30)
  opponent8.addImage(player2Image)
  opponent8.scale = 0.02;
  opponentGroup.add(opponent8)
  opponent9 = createSprite(1080,225,35,30)
  opponent9.addImage(player2Image)
  opponent9.scale = 0.02;
  opponentGroup.add(opponent9)
  opponent10 = createSprite(1080,375,35,30)
  opponent10.addImage(player2Image)
  opponent10.scale = 0.02;
  opponentGroup.add(opponent10)
  opponent11 = createSprite(1210,300,35,30)
  opponent11.addImage(player2Image)
  opponent11.scale = 0.02;
  opponentGroup.add(opponent11)

 //goalposts

 gp1 = createSprite(12.5,300,25,150)
 gp1.addImage(netImage)
 gp1.scale=0.09

 gp2 = createSprite(1247.5,300,25,150)
 gp2.addImage(netImage)
 gp2.scale=0.09

 //sideposts

 sp11 = createSprite(1247.5,225,25,4)
 sp11.shapeColor = "black"
 sp12 = createSprite(1247.5,375,25,4)
 sp12.shapeColor = "black"

 sp21 = createSprite(12.5,225,25,4)
 sp21.shapeColor = "black"
 sp22 = createSprite(12.5,375,25,4)
 sp22.shapeColor = "black"
 
 ball = createSprite(630,300,15,15)
 ball.addImage(ballImage)
 ball.scale = 0.03

  intro.loop();
 
  
  sponserSprite1 = createSprite(628,5,1210,35) 
  sponserSprite1.shapeColor = "black"

  sponserSprite2 = createSprite(628,595,1200,35) 
  sponserSprite2.shapeColor = "black"
 
  scoreSprite = createSprite(628,5,150,35) 
  scoreSprite.shapeColor = "red"

  marker = createSprite(2000,2000,25,3)
  
 }

 



function draw() {
   background(0,150,250)  
   
  if(frameCount < 1){
    shootSound();
  }

  console.log(frameCount)

  if(gameState === "start"){
    background(250)
    image(logo,0,0,1260,600)
    
    
    }
    
    if((gameState === "start") && (keyDown("space"))) {
      gameState = "selection"
    }
    
    if((gameState === "selection") && (selectionState === "name")){
      background(200,200,250)
      stroke(0)
      strokeWeight(4)
      fill("Blue")
      textFont('Georgia')
      textSize(50)
      text("Enter Name:",480, 100)
      name1.position(200,200)
      name2.position(900,200)
      nameButton.position(600,300)
      player1Name = name1.value(); 
      player2Name  = name2.value();
    }
    nameButton.mousePressed(()=>{
      nameButton.hide();
      name1.hide();
      name2.position(2000,2000);
      
      selectionState = "mode"
    })
     
      if((gameState === "selection") && (selectionState === "mode")){
        background(200,200,250)
        
        choose();
        image(easyIcon,250,250,400,200)
        image(hardIcon,650,250,400,200)
        fill("Blue")
        textFont('Georgia')
        textSize(30)
        text("Press E for Easy",300, 250)
        fill("red")
        textFont('Georgia')
        textSize(30)
        text("Press H for Hard",700, 250)
        fill("aqua")
        textFont('Georgia')
        textSize(50)
        stroke(0)
        strokeWeight(4)
        text("Select Mode:",480, 100)
      }

    

    if(gameState === "play"){
      
      background(fieldImage); 
      scoring();
      bouncing();
      drawSprites();
      if(ball.velocityX === 0){
        textSize(20)
        fill("black")
        text("Press P to Kick-Off",547.5,50)
      }
      fill(0,200,200)
      textSize(30)
      stroke(0)
      strokeWeight(3)
      text(" "+score1 +" : "+  score2,590,22)
     
      image(endTeam1,560,-5,35,30)
      image(endTeam2,660,-5,35,30)
      image(sponser1,25,-5,100,28)
      image(sponser2,150,-5,100,28)
      image(sponser3,275,0,100,25)
      image(sponser1,400,-5,100,28)
      image(sponser2,750,-5,100,28)
      image(sponser3,875,0,100,25)
      image(sponser1,1000,-5,100,28)
      image(sponser2,1130,-5,100,28)
      image(sponser3,275,0,100,25)
      image(sponser1,25,575,100,25)
      image(sponser2,150,575,100,25)
      image(sponser3,275,575,100,25)
      image(sponser1,400,575,100,25)
      image(sponser3,575,575,100,25)
      image(sponser2,750,575,100,25)
      image(sponser3,875,575,100,25)
      image(sponser1,1000,575,100,25)
      image(sponser2,1135,575,100,25)
      image(sponser3,275,575,100,25)
      if(score1>score2){
        marker.x=577;
        marker.y=25;
        marker.shapeColor = "red"
      }

      if(score1<score2){
        marker.x=677;
        marker.y=25;
        marker.shapeColor = "blue"
      }

    }
  
  if(keyDown("p") && (ball.velocityX<=0) && (gameState === "play")){
    if(difficulty === 0){
      if(totalScore%2 === 0){
        ball.velocityX=-7;
      }
      if(totalScore%2 !== 0){
        ball.velocityX=7;
      }
      ball.velocityY=randomVelocity(-4,7)
    }
    if(difficulty === 1){
      if(totalScore%2 === 0){
        ball.velocityX=-10;
      }
      if(totalScore%2 !== 0){
        ball.velocityX=10;
      }
      ball.velocityY=randomVelocity(-4,7)
    }
      
    updateScore();

  }
  
console.log(totalScore)

  if(keyDown("up") && (gameState === "play") && (player5.y>115)){
    playerUp();
  }

  if(keyDown("down") && (gameState === "play") && (player5.y<485)){
    playerDown();
  }

  if(keyDown("w") && (gameState === "play") && (opponent6.y>115)){
    opponentUp();
  }

  if(keyDown("s") && (gameState === "play") && (opponent6.y<485)){
    opponentDown();
  }
  
  

  
    
  
  

  if(playerGroup.isTouching(ball)){
  shootPlayer(player1,ball) 
  shootPlayer(player2,ball) 
  shootPlayer(player3,ball) 
  shootPlayer(player4,ball) 
  shootPlayer(player5,ball) 
  shootPlayer(player6,ball) 
  shootPlayer(player7,ball) 
  shootPlayer(player8,ball) 
  shootPlayer(player9,ball) 
  shootPlayer(player10,ball) 
  shootPlayer(player11,ball) 
  shootSound();
  }
  
  if(opponentGroup.isTouching(ball)){
  shootOpponent(opponent1,ball)
  shootOpponent(opponent2,ball)
  shootOpponent(opponent3,ball)
  shootOpponent(opponent4,ball)
  shootOpponent(opponent5,ball)
  shootOpponent(opponent6,ball)
  shootOpponent(opponent7,ball)
  shootOpponent(opponent8,ball)
  shootOpponent(opponent9,ball)
  shootOpponent(opponent10,ball)
  shootOpponent(opponent11,ball)
  shootSound();
}

  if((gameState === "play") && (score1 === 5) &&(score1>score2)){
    gameState = "end1"
  }

  if((gameState === "play") && (score2 === 5) &&(score1<score2)){
    gameState = "end2"
  }

  if(gameState === "end1"){
    background(100,250,100)
    textFont("Georgia")
    stroke(0)
    strokeWeight(3)
    fill("aqua")
    textSize(40)
    text("Winner: " +player1Name,75,100)
    stroke(0)
    strokeWeight(3)
    fill("aqua")
    textFont("Georgia")
    textSize(40)
    text("Loser: " +player2Name,820,100)
    image(endTeam1,-50,100,600,500)
    image(endTeam2,700,100,600,500)

  }

  if(gameState === "end2"){
    background("green")
    stroke(0)
    strokeWeight(3)
    fill(20,100,250)
    textFont("Georgia")
    textSize(40)
    text("Winner: " +player2Name,75,100)
    stroke(0)
    strokeWeight(3)
    fill(20,100,250)
    textFont("Georgia")
    textSize(40)
    text("Loser: " +player1Name,820,100)
    image(endTeam1,700,100,600,500)
    image(endTeam2,-50,100,600,500)
  }

}



function bouncing(){
  ball.bounceOff(topedge)
  ball.bounceOff(bottomedge)
  ball.bounceOff(rightedge1)
  ball.bounceOff(rightedge2)
  ball.bounceOff(leftedge1)
  ball.bounceOff(leftedge2)
  ball.bounceOff(sp11)
  ball.bounceOff(sp12)
  ball.bounceOff(sp21)
  ball.bounceOff(sp22)
  ball.bounceOff(gp2)
  ball.bounceOff(gp1)
}

function scoring(){
  if(ball.isTouching(gp1)){
    score2++;
    totalScore++;
    ball.x=630;
    ball.y=300;
    ball.velocityX=0;
    ball.velocityY=0;
  }
  if(ball.isTouching(gp2)){
    score1++;
    totalScore++;
    ball.x=630;
    ball.y=300;
    ball.velocityX=0;
    ball.velocityY=0;
  }
  
}

function shootPlayer(obj1,obj2){
  if(difficulty === 0){
  if(obj1.x>obj2.x){
    obj2.velocityX=7
    obj2.velocityY=obj2.velocityY*-1
  }
  if(obj1.x<obj2.x){
    obj2.velocityX=7
    }
  }

  if(difficulty === 1){
    if(obj1.x>obj2.x){
      obj2.velocityX=10
      obj2.velocityY=obj2.velocityY*-1
    }
    if(obj1.x<obj2.x){
      obj2.velocityX=10
      }
    }
} 

function shootOpponent(objj1,objj2){
  if(difficulty === 0){
  if(objj1.x>=objj2.x){
    objj2.velocityX=-7
  }
  if(objj1.x<objj2.x){
    objj2.velocityX=-7
    objj2.velocityY=ball.velocityY*-1
  }
}

if(difficulty === 1){
  if(objj1.x>=objj2.x){
    objj2.velocityX=-10
  }
  if(objj1.x<objj2.x){
    objj2.velocityX=-10
    objj2.velocityY=ball.velocityY*-1
  }
}
}

function shootSound(){
  kickSound.play();
}

function playerUp(){
  if(difficulty === 0){
    player1.y=player1.y-10
    player2.y=player2.y-10
    player3.y=player3.y-10
    player4.y=player4.y-10
    player5.y=player5.y-10
    player6.y=player6.y-10
    player7.y=player7.y-10
    player8.y=player8.y-10
    player9.y=player9.y-10
    player10.y=player10.y-10
    player11.y=player11.y-10
  }
  if(difficulty === 1){
    player1.y=player1.y-20
    player2.y=player2.y-20
    player3.y=player3.y-20
    player4.y=player4.y-20
    player5.y=player5.y-20
    player6.y=player6.y-20
    player7.y=player7.y-20
    player8.y=player8.y-20
    player9.y=player9.y-20
    player10.y=player10.y-20
    player11.y=player11.y-20
  }
} 

function playerDown(){
  if(difficulty === 0){
    player1.y=player1.y+10
    player2.y=player2.y+10
    player3.y=player3.y+10
    player4.y=player4.y+10
    player5.y=player5.y+10
    player6.y=player6.y+10
    player7.y=player7.y+10
    player8.y=player8.y+10
    player9.y=player9.y+10
    player10.y=player10.y+10
    player11.y=player11.y+10
  }
  if(difficulty === 1){
    player1.y=player1.y+20
    player2.y=player2.y+20
    player3.y=player3.y+20
    player4.y=player4.y+20
    player5.y=player5.y+20
    player6.y=player6.y+20
    player7.y=player7.y+20
    player8.y=player8.y+20
    player9.y=player9.y+20
    player10.y=player10.y+20
    player11.y=player11.y+20
  }
} 

function opponentUp(){
  if(difficulty === 0){
    opponent1.y=opponent1.y-10
    opponent2.y=opponent2.y-10
    opponent3.y=opponent3.y-10
    opponent4.y=opponent4.y-10
    opponent5.y=opponent5.y-10
    opponent6.y=opponent6.y-10
    opponent7.y=opponent7.y-10
    opponent8.y=opponent8.y-10
    opponent9.y=opponent9.y-10
    opponent10.y=opponent10.y-10
    opponent11.y=opponent11.y-10
  }
  if(difficulty === 1){  
    opponent1.y=opponent1.y-20
    opponent2.y=opponent2.y-20
    opponent3.y=opponent3.y-20
    opponent4.y=opponent4.y-20
    opponent5.y=opponent5.y-20
    opponent6.y=opponent6.y-20
    opponent7.y=opponent7.y-20
    opponent8.y=opponent8.y-20
    opponent9.y=opponent9.y-20
    opponent10.y=opponent10.y-20
    opponent11.y=opponent11.y-20
  }
}

function opponentDown(){
  if(difficulty === 0){
  opponent1.y=opponent1.y+10
  opponent2.y=opponent2.y+10
  opponent3.y=opponent3.y+10
  opponent4.y=opponent4.y+10
  opponent5.y=opponent5.y+10
  opponent6.y=opponent6.y+10
  opponent7.y=opponent7.y+10
  opponent8.y=opponent8.y+10
  opponent9.y=opponent9.y+10
  opponent10.y=opponent10.y+10
  opponent11.y=opponent11.y+10
  }
  if(difficulty === 1){
    opponent1.y=opponent1.y+20
    opponent2.y=opponent2.y+20
    opponent3.y=opponent3.y+20
    opponent4.y=opponent4.y+20
    opponent5.y=opponent5.y+20
    opponent6.y=opponent6.y+20
    opponent7.y=opponent7.y+20
    opponent8.y=opponent8.y+20
    opponent9.y=opponent9.y+20
    opponent10.y=opponent10.y+20
    opponent11.y=opponent11.y+20
}
}

function randomVelocity(min,max){
    var randVelocity = Math.round(random()*(max-min)+min);
    if(randVelocity === 0){
      randVelocity = 4; 
    }
    return randVelocity;
}

function choose(){
  if((gameState === "selection") && (keyDown("e")) && (selectionState === "mode")){
    difficulty = 0;
    gameState = "play"
  }

  if((gameState === "selection") && (keyDown("h")) && (selectionState === "mode")){
    difficulty = 1;
    gameState = "play"
  }
}



function updateScore(){
  totalScore = totalScore
}