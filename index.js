var number1=Math.floor(Math.random()*6)+1;
var number2=Math.floor(Math.random()*6)+1;
var source1="images/dice"+number1+".png";
var source2="images/dice"+number2+".png";
document.querySelectorAll("img")[0].setAttribute("src",source1);
document.querySelectorAll("img")[1].setAttribute("src",source2);

if(number1>number2){
    document.querySelector("h1").innerHTML="🚩 Player1 wins";
}else if(number1<number2){
    document.querySelector("h1").innerHTML="Player2 wins 🚩";
}else{
    document.querySelector("h1").innerHTML="It's a tie,";
}
