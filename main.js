
let chicken = document.getElementById("chicken");

let cow = document.getElementById("cow");

let pig = document.getElementById("pig");

let display = document.getElementById("demo");

let btn = document.querySelector("button");

let togle = document.querySelector(".display");

btn.addEventListener("click", function animalLeg() {

togle.style.display = "block";

let animalLegs = 2 * chicken.value + 4 * cow.value + 4 * pig.value;

display.innerHTML = "Your animal Total legs are : " + animalLegs;

});