

function ChangePosition(){
    
    let Circle = document.getElementById("Circle");
    
    let RandomNumber = Math.floor(Math.random() * 100)
    let RandomNumber2 = Math.floor(Math.random() * 100)
    
    

    if(RandomNumber > 90){
        RandomNumber -= 10;
    } else if(RandomNumber < 10){
        RandomNumber += 10;
    }
    if(RandomNumber2 > 90){
        RandomNumber2 -= 10;
    } else if(RandomNumber2 < 10){
        RandomNumber2 += 10;
    }
    

    
    
  

   Circle.style.left = RandomNumber + "%";
   Circle.style.top = RandomNumber2 + "%";


};

function AddCounter(){

    
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }


    let Circle = document.getElementById("Circle");


    let Counter = document.getElementById("Counter").innerHTML++;
    
    Circle.style.backgroundColor = color;
            





        
}