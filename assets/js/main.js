// main.js

console.log("Hello, World!");


let umaButton = document.getElementById("umaButton")
let umaDisplay = document.getElementById("umaDisplay")

let miles=0
let multiplier=1
let multiplerCost=25

function displayMilesAmt(){
    umaDisplay.innerText = "You have ran " +miles+" miles."
}

umaButton.addEventListener('click',function(){
   miles+=multiplier
   displayMilesAmt()
})
