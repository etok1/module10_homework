// sixth task
// Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль.
// Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.

let equals = [1, 2, 1, 1, 1];
let areAllEqual = true;

for (let i = 1; i < equals.length; i++) {
  if (equals[i] !== equals[0]) {
    areAllEqual = false;
  }
}

console.log(areAllEqual);
