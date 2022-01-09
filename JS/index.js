if (window.performance.navigation.type === 1) {
  rollDice();
}

function rollDice() {
  var random1 = Math.floor((Math.random() * 6) + 1);
  var random2 = Math.floor((Math.random() * 6) + 1);

  if (random1 === random2) {
    document.querySelector("h1").innerText = "Draw!";
  } else if (random1 > random2) {
    document.querySelector("h1").innerText = "Player 1 Wins!🏆";
  } else {
    document.querySelector("h1").innerText = "Player 2 Wins!🏆";
  }

  document.querySelector(".img1").setAttribute("src", "images/dice" + random1 + ".png");
  document.querySelector(".img2").setAttribute("src", "images/dice" + random2 + ".png");
}
