// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat() {
  cats.push('Ralph');
}

function destructivelyPrependCat() {
  cats.unshift('Bob');
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat() {
  // Create a new array by concatenating the original cats array with the new cat
  return [...cats, "Broom"];
}

function prependCat() {
  // Create a new array by prepending the new cat to the original cats array
  return ["Arnold", ...cats];
}

function removeLastCat() {
  // Create a new array by excluding the last cat from the original cats array
  return cats.slice(0, -1);
}

function removeFirstCat() {
  // Create a new array by excluding the first cat from the original cats array
  return cats.slice(1);
}
removeFirstCat;



