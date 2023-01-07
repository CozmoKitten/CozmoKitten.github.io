const wrapper = document.getElementById("wrapper");

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const uniqueRand = (min, max, prev) => {
  let next = prev;
  
  while(prev === next) next = rand(min, max);
  
  return next;
}

const combinations = [
  { configuration: 1, roundness: 1 },
  { configuration: 1, roundness: 2 },
  { configuration: 1, roundness: 4 },
  { configuration: 2, roundness: 2 },
  { configuration: 2, roundness: 3 },
  { configuration: 3, roundness: 3 }
];

let prev = 0;

setInterval(() => {
  const index = uniqueRand(0, combinations.length - 1, prev),
        combination = combinations[index];
  
  wrapper.dataset.configuration = combination.configuration;
  wrapper.dataset.roundness = combination.roundness;
  
  prev = index;
}, 3000);

document.getElementById("shape1").addEventListener("click", function() { // grey
  window.open("https://www.linktr.ee", "_blank")});

document.getElementById("shape2").addEventListener("click", function() { // white
  window.open("https://apple.ca", "_blank")});

document.getElementById("shape3").addEventListener("click", function() { // purple
  window.open("https://example.com", "_blank")});

document.getElementById("shape4").addEventListener("click", function() { // pink
  window.open("https://canada.ca", "_blank")});

document.getElementById("shape5").addEventListener("click", function() { // yellow
  window.open("yellow.html", "_self")});

document.getElementById("shape6").addEventListener("click", function() { // blue
  window.open("blue.html", "_blank")});

 document.getElementById("shape7").addEventListener("click", function() { // turquoise
  window.open("https://unsplash.com", "_blank")});