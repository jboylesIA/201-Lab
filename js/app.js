/*
    FILE: app.js
    DATE: 2022-06-21
    AUTHOR: Josh Boyles
*/

"use strict";

function initialize() {
  console.log("in initialize()");
  handleshop();
  handleBooleans();
  handleboots();
  handlepets();
  handlefishing();
  handlephone();
}

 let user = prompt("Welcome, what is your name?");
      console.log(`The user's name is ${user}.`);
            alert(`Glad you are here , ${user}.`)


function handleshop() {
  let answer = confirm("Are you looking for boots?");
  if (answer === true) {
    console.log("Needs boots.");
  } else {
    console.log("Passed on buying boots.");
  }
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

function handleboots() {
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

function handlepets() {
  let answer = confirm("Do you have pets?");
  if (answer === true) {
    console.log("Yes they are pet lovers.");
  } else {
    console.log("This person should get a pet.");
  }
}

function handlefishing() {
  let answer = confirm("Do you like to fish?");
  if (answer === true) {
    console.log("Sweet, hope you land a big one!");
  } else {
    console.log("Give it a try, fishing is a great outdoor activity!");
  }
}

function handlephone() {
  let answer = confirm("Like Android phones?");
  if (answer === true) {
    console.log("Yes Androids are the best!");
  } else {
    console.log("Definetly an Apple person.");
  }alert(`Have the best day ever!! , ${user}`)
}