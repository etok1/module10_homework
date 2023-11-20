// first task
let input = prompt("Please enter something");

let number = +input;

if (number === "number") {
  if (number % 2 === 0) {
    console.log("Число четное");
  } else {
    console.log("Число нечетное");
  }
} else {
  console.log("Упс, кажется, вы ошиблись");
}
