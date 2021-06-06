const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


const btn = document.getElementById("btn");

btn.addEventListener("click", function(){

    getRandomNumber();
 
    
});


function getRandomNumber(){
    var hexColor = "#";
    for(var i=0; i<6; i++){

       
        var randomNumber = Math.floor(Math.random()*hex.length);
        hexColor+= hex[randomNumber];
    }
        
    document.body.style.backgroundColor = hexColor;
    document.querySelector(".color").textContent =  hexColor
    

}