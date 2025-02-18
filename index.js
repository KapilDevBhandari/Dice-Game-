var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImagesource = "images/" + randomDiceImage;

var leftImage = document.querySelectorAll("img")[0];

leftImage.setAttribute("src", randomImagesource);

var randomNumber2 = Math.floor(Math.random()* 6)+1;
var randomDiceImage2 = "images/dice"+randomNumber2 + ".png";

var rightImage = document.querySelectorAll("img")[1];

rightImage.setAttribute("src",randomDiceImage2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = " 🚩Player 1 Wins!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML= "🚩Player 2 Wins!";
}

else{
    document.querySelector("h1").innerHTML = "🤝 Draw !" ;
}