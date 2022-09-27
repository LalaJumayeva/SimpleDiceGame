// For the first dice img

var randomNumber1 = Math.floor(Math.random() * 6) +1;

var randomImg = "dice"+randomNumber1+".png";

var secondSource = "images/" + randomImg;

document.querySelectorAll("img")[0].setAttribute("src", secondSource);

// for the second dice img
var randomNumber2 = Math.floor(Math.random() * 6) +1;

var randomImg2 = "dice"+randomNumber2+".png";

var secondSource2 = "images/" + randomImg2;


document.querySelectorAll("img")[1].setAttribute("src", secondSource2);

if (randomNumber1>randomNumber2) {
  document.querySelectorAll("h1")[0].textContent = "Player 1 won! Refresh me";
}
else if (randomNumber1<randomNumber2){
  document.querySelectorAll("h1")[0].textContent = "Player 2 won! Refresh me";
}
else {
  document.querySelectorAll("h1")[0].textContent = "Draw! Refresh me";
}
