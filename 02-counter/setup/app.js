var count = 0;

var decBtn = document.getElementsByClassName("btn decrease");
var resBtn = document.getElementsByClassName("reset");
var incBtn = document.getElementsByClassName("btn increase");

decBtn[0].addEventListener("click", decrease);
resBtn[0].addEventListener("click", reset);
incBtn[0].addEventListener("click", increase);


function decrease(){
    count--;
    document.querySelector("#value").innerHTML = count;

    if(count ===0){
        document.querySelector("#value").style.color = "black";
    }else{
        document.querySelector("#value").style.color = "red";
    }

}

function reset(){
    count = 0;
    document.querySelector("#value").innerHTML = count;
    document.querySelector("#value").style.color = "black";
 
}
function increase(){
    count++;
    document.querySelector("#value").innerHTML = count;

    if(count ===0){
        document.querySelector("#value").style.color = "black";
    }else{
        document.querySelector("#value").style.color = "green";
    }

}