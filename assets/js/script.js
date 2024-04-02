/** 
Author:    Build Rise Shine with Nyros (BRS) 
Created:   2023
Library / Component: Script file
Description: Virtual Keyboard
(c) Copyright by BRS with Nyros. 
**/

// DOM Elements
const keys = document.querySelectorAll(".keys");
const textarea = document.querySelector("textarea");
const deleteBtn = document.getElementById("delete");
const shiftBtn = document.getElementById("shift");
const spaceBtn = document.getElementById("space");

// Default theme
let chathams_blue = "#1A4B84";

// Init char array
let chars = [];

// for each to get the key press
keys.forEach((btn) => {
  btn.addEventListener("click", () => {
    textarea.value += btn.innerText;
    chars = textarea.value.split("");
  });
});

// delete button event
deleteBtn.addEventListener("click", () => {
  chars.pop();
  textarea.value = chars.join("");
});

// spacebar button event
spaceBtn.addEventListener("click", () => {
  chars.push(" ");
  textarea.value = chars.join("");
});

// shift button event 
shiftBtn.addEventListener("click", () => {
  keys.forEach((btn) => {
    btn.classList.toggle("upper");
  });
});

// Change Theme
function setTheme(theme) {
  document.documentElement.style.setProperty("--primary-color", theme);
  localStorage.setItem("movie-theme", theme);
}
setTheme(localStorage.getItem("movie-theme") || chathams_blue);

// Get the container where buttons will be appended
const container = document.getElementById('container');

// Define the characters for the buttons
const characters = [
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Delete'],
  ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '[', ']'],
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm', 'Shift'],
  ['Space']
];

// Create buttons
characters.forEach(rowChars => {
  const row = document.createElement('div');
  row.classList.add('row');
  
  rowChars.forEach(char => {
    const button = document.createElement('button');
    button.classList.add('keys', 'btn');
    button.textContent = char;
    row.appendChild(button);
  });
  
  container.appendChild(row);
});
