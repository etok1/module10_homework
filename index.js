// first task
let input = prompt("Please enter something");

let number = +input;

if (number === number) {
  if (number % 2 === 0) {
    console.log("Число четное");
  } else {
    console.log("Число нечетное");
  }
} else {
  console.log("Упс, кажется, вы ошиблись");
}

// second task

let x;
x = 5;

if (typeof x === "number") {
  console.log("x - a number");
} else if (typeof x === "string") {
  console.log("x - a string");
} else if (typeof x === "boolean") {
  console.log("x - a boolean");
}

// third task

let string = "Give me all of that ultraviolence";

let splitted = string.split(" ");
let reversed = splitted.reverse();
let joinn = reversed.join(" ");

console.log(joinn);

// fourth task

let randomNumber = (randomNumber = Math.floor(Math.random() * 101));
console.log(randomNumber);

// fifth task

let arr = [2, 5, "apple", true];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// sixth task

let equals = [1, 2, 1, 1, 1];
let areAllEqual = true;

for (let i = 1; i < equals.length; i++) {
  if (equals[i] !== equals[0]) {
    areAllEqual = false;
  }
}

console.log(areAllEqual);
// seventh task

let oddNumbers = [1, 2, 3, 4, 5, 6, 7, null, true];
let countEven = 0;
let countOdd = 0;

for (let i = 0; i < oddNumbers.length; i++) {
  if (typeof oddNumbers[i] === "number") {
    if (oddNumbers[i] % 2 === 0) {
      countEven++;
    } else if (oddNumbers[i] % 2 === 1) {
      countOdd++;
    }
  } else {
    console.log("It is not a number");
  }
}
console.log(countEven + " " + "even numbers");
console.log(countOdd + " " + "odd numbers");

// 8th task
let map = new Map();
map.set("apple", 5);
map.set("pear", 7);
map.set("cherry", 2);

let keys = map.keys();

for (let key of keys) {
  console.log(`${key} - is a key, ${map.get(key)} is a value`);
}
