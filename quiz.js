class Quiz
{
    constructor()
    {
        this.questionN=createElement('h1');
        this.question=createElement('h3');
        
        
        this.options=createElement('h4');
        this.optionsMedium=createElement('h6');
        this.optionsLong=createElement('h5');
        
        this.optionA=createButton('->');
        this.optionB=createButton('->');
        this.optionC=createButton('->');
        this.optionD=createButton('->');

        gs=2;
        
    }
    display(qn)
    {
        
        if(qn===1)
        {
            
            this.questionN.html("Question:1");
            this.questionN.position(250,100);
            this.question.html("In the Game Pac Man how many game adaptivity features are there. Options:   ");
            this.question.position(160,220);
            this.options.html("   A.5     B.2     C.3     D.4");
            this.options.position(250,320);
            
            
            
            this.optionA.position(225,358);

            this.optionB.position(225,378);

            this.optionC.position(225,398);

            this.optionD.position(225,418);


            this.optionC.mousePressed(()=>{
                score+=1;
                this.goToQuestion2();
            
              });

              this.optionA.mousePressed(()=>{
                
                this.goToQuestion2();
            
              });

              this.optionB.mousePressed(()=>{
                
                this.goToQuestion2();
            
              });

              this.optionD.mousePressed(()=>{
                
                this.goToQuestion2();
            
              });
            
    }
}

    

    goToQuestion2()
    {
        this.questionN.html("Question:2");
            this.questionN.position(250,100);
            this.question.html("public class A {public static void main (String[] args) { if (true) break ; } } Output is:   ");
            this.question.position(160,220);
            
            this.options.html("A.Error     B.Nothing     ");
            this.options.position(250,320);
            
            
            
            this.optionA.position(200,358);

            this.optionB.position(200,378);

            this.optionC.hide();

            this.optionD.hide();


            this.optionA.mousePressed(()=>{
                score+=1;
                this.goToQuestion3();
            
              });

              this.optionB.mousePressed(()=>{
                
                this.goToQuestion3();
            
              });

        
            
    }
        

    
    goToQuestion3()
    {
        this.questionN.html("Question:3");
            this.questionN.position(250,100);
            this.question.html("public class A { public static void main (String[] args) { System.out.println('j' + 'a' + 'v' + 'a'); }  Output is:");
            this.question.position(160,220);
            
            this.options.html("A.java     B.418    ");
            this.options.position(250,340);
            
            
            
            this.optionA.position(213,380);

            this.optionB.position(213,400);

            this.optionC.hide();

            this.optionD.hide();


            this.optionB.mousePressed(()=>{
                score+=1;
                this.goToQuestion4();
            
              });

              this.optionA.mousePressed(()=>{
                
                this.goToQuestion4();
            
              });

        
    }
    
    goToQuestion4()
    {

        this.optionC=createButton('->');
        this.optionD=createButton('->');

        this.questionN.html("Question:4");
        
        this.question.html("What is JDK? Options:");
        this.question.position(168,220);
        this.options.html(" ");
        this.optionsLong.html("   A.Java Develop Kit    B.Java Developer's Kit    C.Java Develop Kitpack    D.Java Development Kit");
            this.optionsLong.position(200,280);
            
            
            
            this.optionA.position(185-4,324);

            this.optionB.position(185-4,344);

            this.optionC.position(185-4,364);

            this.optionD.position(185-4,384);


            this.optionD.mousePressed(()=>{
                score+=1;
                this.goToQuestion5();
            
              });

              this.optionA.mousePressed(()=>{
                
                this.goToQuestion5();
            
              });

              this.optionB.mousePressed(()=>{
                
                this.goToQuestion5();
            
              });

              this.optionC.mousePressed(()=>{
                
                this.goToQuestion5();
            
              });
            
    }
    
    goToQuestion5()
    {

        //this.optionC=createButton('->');
        //this.optionD=createButton('->');

        this.questionN.html("Question:5");
        this.question.html("What is the type and value of the following expression? -4 + 1/2 + 2*-3 + 5.0   Option:");
        this.question.position(168,220);
        this.options.html(" ");
        this.optionsLong.html(" ");
        this.optionsMedium.html(" A.int -5     B.double -4.5     C.double -5    D.int -4")
            this.optionsMedium.position(240,305);
            
            
            
            this.optionA.position(225,358);

            this.optionB.position(225,378);

            this.optionC.position(225,398);

            this.optionD.position(225,418);



            this.optionC.mousePressed(()=>{


                score+=1;
                gs=3;
            
              });

              this.optionA.mousePressed(()=>{
                
                gs=3;
            
              });

              this.optionB.mousePressed(()=>{
                
                gs=3;
            
              });

              this.optionD.mousePressed(()=>{
                
                gs=3;
            
              });

              

              database.ref('Student').push({
                score: score +"  "+ name
            })
      
            
    }
    
    }

    

    