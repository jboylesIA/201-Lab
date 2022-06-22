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
  handleGuess();
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

function handleGuess() {
  let number = prompt("Guess a number 1-10");
  console.log(`The user's guess is ${number}.`);
  if (answer <= 9) {
    console.log("Number guessed");
    alert(`Not even close, ${user} try again!`);
  } else {
    console.log("Definetly an Apple person.");
  }alert(`Have the best day ever!! , ${user}`)

  alert(`Glad you are here , ${user}.`);
}

var n = prompt("Enter an even number");
n = parseInt(n);
if (isNaN(n))
   {
   alert("The input cannot be parsed to a number");
   }
else
   {
   if (n == 0)
      {
      alert("The number is zero");
      }
   else if (n%2)
      {
      alert("The number is odd");
      }
   else
      {
      alert("The number is even");
      }
   }

   prompt()