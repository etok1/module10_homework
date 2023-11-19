// sixth task

let equals = [1, 2, 1, 1, 1];
let areAllEqual = true;

for (let i = 1; i < equals.length; i++) {
  if (equals[i] !== equals[0]) {
    areAllEqual = false;
  }
}

console.log(areAllEqual);
