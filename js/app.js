/*
    FILE: app.js
    DATE: 2022-06-21
    AUTHOR: Josh Boyles
*/

"use strict";

// global variable
var user;

function initialize() {
  console.log("in initialize()");
  handleName();
  handleShop();
  handleBooleans();
  handleBoots();
  handlePets();
  handleFishing();
  handlePhone();
  }

/**
 * Ask for name 
 */
function handleName() {
  user = prompt("Welcome, what is your name?");
  console.log(`The user's name is ${user}.`);
  alert(`Glad you are here , ${user}.`);
}

function handleShop() {
  let answer = confirm("Are you looking for boots?");
  let output='Passed on buying boots.';
  if (answer === true) {
    output = 'needs boots'

  }
  console.log(output);
  alert(output);
}

function handleBooleans() {
  let myBool = false;
  let anotherBool = false;
  let thirdBool = true;

  if (myBool && thirdBool) {
    console.log(`myBool and thirdBool were both true`);
  } else if (myBool || anotherBool) {
    console.log(`myBool or anotherBool was true`);
  } else if (thirdBool) {
    console.log(
      `myBool was false and anotherBool was false, but thirdBool was true.`
    );
  } else {
    console.log(`Were any of the variables true?`);
  }
}

function handleBoots() {
  let color = prompt("What is your favorite boot color?");
  switch (color.toLowerCase()) {
    case "black":
      console.log(`Your favorite boot color is black.`);
      break;
    case "brown":
      console.log(`Your favorite color is brown.`);
      break;
    default:
      console.log(`Not a valid color`);
  } 
  console.log(`finished with switch`);
}

function handlePets() {
  let answer = confirm("Do you have pets?");
  if (answer === true) {
    console.log("Yes they are pet lovers.");
  } else {
    console.log("This person should get a pet.");
  }
}

function handleFishing() {
  let answer = confirm("Do you like to fish?");
  if (answer === true) {
    console.log("Sweet, hope you land a big one!");
  } else {
    console.log("Give it a try, fishing is a great outdoor activity!");
  }
}

function handlePhone() {
  let answer = confirm("Like Android phones?");
  if (answer === true) {
    console.log("Yes Androids are the best!");
  } else {
    console.log("Definetly an Apple person.");
  }alert(`Have the best day ever!! , ${user}`)
}

let question = "How many?";
let goalAnswer = 25;
let finished = false;
let maxAttempts = 4;
let currentAttempts = 0;
while (currentAttempts < maxAttempts && !finished) 
  currentAttempts++;
  let answer = prompt(question);
  let realAnswer = parseInt(answer);
  let output = "";
  if (realAnswer > goalAnswer) {
    output = "Too hght";
  } else if (realAnswer < goalAnswer) {
    output = "Too low";
  } else {
    output = "Correct!";
    finished = true
  }
  alert(output);


/**
 * Demonstrate some things using arrays.
 */
 function goArrays() {
  console.log(`In goArrays()`);

  console.log(`This is the initial array`);
  console.table(foodsILike);

  console.log(`Looping through the array`);
  for (let index = 0; index < foodsILike.length; index++) {
    console.log(`Item: ${foodsILike[index]}`);
  }

  let food = "swiss chard";
  console.log(`Adding ${food}`);
  foodsILike.push(food);
  console.table(foodsILike);

  // popping
  food = foodsILike.pop();
  console.log(`Popped ${food} from array`);
  console.table(foodsILike);

  // unshift
  food = "spinach";
  console.log(`Adding ${food}`);
  foodsILike.unshift(food);
  console.table(foodsILike);

  // indexOf
  food = "popcorn";
  let index = foodsILike.indexOf(food);
  console.log(`Index of ${food} is ${index}.`);

  // Illustrates complex arrays that should probably be avoided
  let mixedUp = ["yeehaw", 42, true, ["yo"], {}];
  console.table(mixedUp);
} 
 
goArrays();




