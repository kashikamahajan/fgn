var database;
var form;
var StudentNumber=0;
var name;
var quiz;
var qn=1;

var gs=1;

var question1Yes;
var question1No;

var question2Yes;
var question2No;

var question3Yes;
var question3No;
var ty;

var thankYou;

var answer;

var score=0;

var bg3;

function preload()
{
  bg=loadImage("bg.jpg");
  ty=loadImage("p.png");
  bg2=loadImage("bg2.jpg");
  q4=loadImage("q4.png");
  bg3=loadImage("bg3.jpg");
}

function setup() {
  createCanvas(500, 600);
  database=firebase.database();
  
  
thankYou=createElement('h2');

  var playerCountRef = database.ref('Students/StudentNumber');
  playerCountRef.on('value',(data)=>{
    StudentNumber= data.val();
  })



  

  form=new Form();
  
}

function draw() {
  background(bg);  
  form.display();
 if(gs===2)
 {
  background(bg2);
  imageMode(CENTER);
  image(ty,250,360,500,500);
 }
 console.log(score);

  if(gs===3)
  {
    background(bg)
        quiz.questionN.hide();
        quiz.question.hide();
        textSize(50);
        fill("#7ACFB2");
        textStyle(BOLD);
        textAlign(CENTER);
        textFont("marvel");
        thankYou.html("ThankYou");
        thankYou.position(180,170);
        text("Your Score:"+score,250,330);
        quiz.options.hide();
        quiz.optionsMedium.hide();
        quiz.optionsLong.hide();
        
        quiz.optionA.hide();
        quiz.optionB.hide();
        quiz.optionC.hide();
        quiz.optionD.hide();

        
  }
}

 