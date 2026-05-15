// main.js

let umaButton = document.getElementById("umaButton");
let umaDisplay = document.getElementById("umaDisplay");
let celebrationMsg = document.getElementById("celebrationMsg");
let umaCharacter = document.getElementById("umaCharacter");
let newCharacterBtn = document.getElementById("newCharacterBtn");
let bgMusic = document.getElementById("bgMusic");
let musicToggle = document.getElementById("musicToggle");
let musicToggleIcon = document.getElementById("musicToggleIcon");

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
  },
 {
    chibi1: "assets/img/ElChibi1.png",
    chibi2: "assets/img/ElChibi2.png"
  },
  {
    chibi1: "assets/img/AlmondChibi1.png",
    chibi2: "assets/img/AlmondChibi2.png"
  },
  {
    chibi1: "assets/img/RobChibi1.png",
    chibi2: "assets/img/RobChibi2.png"
  },
  {
    chibi1: "assets/img/TaikiChibi1.png",
    chibi2: "assets/img/TaikiChibi2.png"
  },
  {
    chibi1: "assets/img/FujiChibi1.png",
    chibi2: "assets/img/FujiChibi2.png"
  },
  {
    chibi1: "assets/img/OperaChibi1.png",
    chibi2: "assets/img/OperaChibi2.png"
  },
{
  chibi1: "assets/img/StayGoldChibi1.png",
  chibi2: "assets/img/StayGoldChibi2.png"
},
{
  chibi1: "assets/img/PokkeChibi1.png",
  chibi2: "assets/img/PokkeChibi2.png"
},
{
  chibi1: "assets/img/HeliosChibi1.png",
  chibi2: "assets/img/HeliosChibi2.png"
},
{
  chibi1: "assets/img/FestaChibi1.png",
  chibi2: "assets/img/FestaChibi2.png"
},
{
  chibi1: "assets/img/DotoChibi1.png",
  chibi2: "assets/img/DotoChibi2.png"
},
{
  chibi1: "assets/img/TachyonChibi1.png",
  chibi2: "assets/img/TachyonChibi2.png"
},
{
  chibi1: "assets/img/TeioChibi1.png",
  chibi2: "assets/img/TeioChibi2.png"
},
{
  chibi1: "assets/img/VodkaChibi1.png",
  chibi2: "assets/img/VodkaChibi2.png"
},
{
  chibi1: "assets/img/SymboliChibi1.png",
  chibi2: "assets/img/SymboliChibi2.png"
},
{
  chibi1: "assets/img/CreekChibi1.png",
  chibi2: "assets/img/CreekChibi2.png"
},
{
  chibi1: "assets/img/McQueenChibi1.png",
  chibi2: "assets/img/McQueenChibi2.png"
},
{
  chibi1: "assets/img/ScarletChibi1.png",
  chibi2: "assets/img/ScarletChibi2.png"
},
{
  chibi1: "assets/img/SilenceChibi1.png",
  chibi2: "assets/img/SilenceChibi2.png"
},
{
  chibi1: "assets/img/SmartFalconChibi1.png",
  chibi2: "assets/img/SmartFalconChibi2.png"
},
{
  chibi1: "assets/img/SpecialWeekChibi1.png",
  chibi2: "assets/img/SpecialWeekChibi2.png"
}

];

const backgrounds = [
  "assets/img/umaclickerbg1.png",
  "assets/img/umaclickerbg2.png",
  "assets/img/umaclickerbg3.png",
  "assets/img/umaclickerbg4.png",
  "assets/img/umaclickerbg5.png"
];

/** Total miles that trigger one celebration each. */
const MILESTONE_TOTALS = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 750, 1000, 1500,2500, 5000, 10000];


const MILESTONE_AUDIO = "assets/audio/celebrate.mp3";

const MUSIC_ICON_UNMUTED = "assets/img/jukeboxON.png";
const MUSIC_ICON_MUTED = "assets/img/jukeboxOFF.png";

let currentCharacter;
let currentBackground;

let clickTimer;

bgMusic.volume = 0.25;

musicToggleIcon.src = MUSIC_ICON_UNMUTED;

function showCelebrationMessage() {
  celebrationMsg.classList.remove("hidden");
  celebrationMsg.setAttribute("aria-hidden", "false");
}

function hideCelebrationMessage() {
  celebrationMsg.classList.add("hidden");
  celebrationMsg.setAttribute("aria-hidden", "true");
}

function pickRandomCharacterAndBackground() {
  let nextChar;
  let nextBg;
  let guard = 0;
  do {
    nextChar = characters[Math.floor(Math.random() * characters.length)];
    nextBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    guard++;
  } while (
    guard < 80 &&
    currentCharacter != null &&
    nextChar === currentCharacter &&
    nextBg === currentBackground
  );
  currentCharacter = nextChar;
  currentBackground = nextBg;
}

function applyVisuals() {
  clearTimeout(clickTimer);
  umaCharacter.src = currentCharacter.chibi1;
  document.body.style.backgroundImage = `url('${currentBackground}')`;
}

pickRandomCharacterAndBackground();
applyVisuals();

newCharacterBtn.addEventListener("click", function () {
  tryStartBackgroundMusic();
  pickRandomCharacterAndBackground();
  applyVisuals();
});

let musicStarted = false;

function tryStartBackgroundMusic() {
  if (musicStarted) {
    return;
  }
  musicStarted = true;
  bgMusic.play().catch(function () {});
}

function syncMusicToggleIcon() {
  musicToggleIcon.src = bgMusic.muted ? MUSIC_ICON_MUTED : MUSIC_ICON_UNMUTED;
  musicToggle.setAttribute("aria-pressed", bgMusic.muted ? "true" : "false");
}

musicToggle.addEventListener("click", function () {
  tryStartBackgroundMusic();
  bgMusic.muted = !bgMusic.muted;
  syncMusicToggleIcon();
});

function playMilestoneCelebration() {
  var url = MILESTONE_AUDIO;
  var sfx = new Audio(url);
  sfx.play().catch(function () {});

  if (typeof confetti === "function") {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 }
    });
  }

  showCelebrationMessage();
}

function displayMilesAmt() {
  umaDisplay.innerText = "You have ran " + miles + " miles.";
}

umaCharacter.addEventListener("animationend", function () {
  umaCharacter.classList.remove("bounce");
});

umaButton.addEventListener("click", function () {
  tryStartBackgroundMusic();
  hideCelebrationMessage();

  var prevMiles = miles;
  miles += multiplier;

  for (var i = 0; i < MILESTONE_TOTALS.length; i++) {
    var t = MILESTONE_TOTALS[i];
    if (prevMiles < t && miles >= t) {
      playMilestoneCelebration();
    }
  }

  displayMilesAmt();

  umaCharacter.src = currentCharacter.chibi2;

  umaCharacter.classList.remove("bounce");
  void umaCharacter.offsetWidth;
  umaCharacter.classList.add("bounce");

  clearTimeout(clickTimer);

  clickTimer = setTimeout(function () {
    umaCharacter.src = currentCharacter.chibi1;
  }, 200);
});
