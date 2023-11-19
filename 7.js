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
