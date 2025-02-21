let chicken = document.getElementById("chicken");
let cow = document.getElementById("cow");
let pig = document.getElementById("pig");
let display = document.getElementById("demo");
let btn = document.querySelector("button");
let togle = document.querySelector(".display");

btn.addEventListener("click", function animalLeg() {
  togle.style.display = "block";
  let inputs = [chicken, cow, pig];
  let invalid = inputs.some(input => input.value < 0);

  inputs.forEach(input => input.classList.remove("error"));
  display.classList.remove("error");

  if (invalid) {
    display.innerHTML = "Please enter positive numbers. Legs cannot be negative!";
    display.classList.add("error");
    inputs.forEach(input => { if (input.value < 0) input.classList.add("error"); });
    return;
  }

  let animalLegs = 2 * chicken.value + 4 * cow.value + 4 * pig.value;
  display.innerHTML = `Your animal Total legs are : ${animalLegs}`;
});
