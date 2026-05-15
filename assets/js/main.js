// main.js

let umaButton = document.getElementById("umaButton");
let umaDisplay = document.getElementById("umaDisplay");
let umaCharacter = document.getElementById("umaCharacter");

let miles = 0;
let multiplier = 1;
let multiplierCost = 25;

const characters = [
  {
    chibi1: "assets/img/CurrenChanChibi1.webp",
    chibi2: "assets/img/CurrenChanChibi2.png"
  },
  {
    chibi1: "assets/img/GoldShipChibi1.webp",
    chibi2: "assets/img/GoldShipChibi2.webp"
  },
  {
    chibi1: "assets/img/HaruUraraChibi1.webp",
    chibi2: "assets/img/HaruUraraChibi2.webp"
  },
  {
    chibi1: "assets/img/MatikaneTannhauserChibi1.webp",
    chibi2: "assets/img/MatikanetannhauserChibi2.webp"
  },
  {
    chibi1: "assets/img/NiceNatureChibi1.webp",
    chibi2: "assets/img/NiceNatureChibi2.webp"
  }
];

const backgrounds = [
  "assets/img/umaclickerbg1.png",
  "assets/img/umaclickerbg2.png",
  "assets/img/umaclickerbg3.png",
  "assets/img/umaclickerbg4.png",
  "assets/img/umaclickerbg5.png"
];

const randomCharacter =
  characters[Math.floor(Math.random() * characters.length)];

const randomBackground =
  backgrounds[Math.floor(Math.random() * backgrounds.length)];

umaCharacter.src = randomCharacter.chibi1;
document.body.style.backgroundImage = `url('${randomBackground}')`;

let clickTimer;

function displayMilesAmt() {
  umaDisplay.innerText = "You have ran " + miles + " miles.";
}

umaButton.addEventListener("click", function () {
  miles += multiplier;
  displayMilesAmt();

  // Show Chibi2 while clicks are actively happening
  umaCharacter.src = randomCharacter.chibi2;

  clearTimeout(clickTimer);

  // Return to Chibi1 shortly after clicking stops
  clickTimer = setTimeout(function () {
    umaCharacter.src = randomCharacter.chibi1;
  }, 200);
});
