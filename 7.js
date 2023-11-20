// seventh task

const arrNumbers = [1, 2, 3, 4, 5, 6, 7, null, true];
let evenNumbers = 0;
let oddNumber = 0;
const numbers = arrNumbers.filter((element) => typeof element === "number");
const zeroNum = arrNumbers.filter((element) => element === 0).length;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers++;
  } else {
    oddNumber++;
  }
}

console.log(zeroNum);
console.log(evenNumbers);
console.log(oddNumber);
