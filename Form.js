class Form
{
    constructor()
    {
        this.nameInput=createInput('Enter Name');
        this.button=createButton('Start Game');
        
        this.title=createElement('h2');

    }

    hide1(){
        
        this.button.hide();
        this.nameInput.hide();
        this.title.hide();
    }

    display()
    {
       
        this.title.html(" Java Quiz ");
        this.title.position(188,170);

        this.nameInput.position(250,300);
        
        this.button.position(250,350);

        
        this.button.mousePressed(()=>{
            
            
            this.nameInput.hide();
            this.button.hide();
            name=this.nameInput.value();
            StudentNumber+=1;
            
            this.hide1();
            
            this.updateCount(StudentNumber);
            
            
            
            
            quiz=new Quiz();
            quiz.display(qn);
            
          });

    }

    
      updateCount(count){
        database.ref('Students').set({
            StudentNumber: count
        });
      }

      
      
      
    
      
    

    
    
}