// third task

// Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".

let string = "ultraviolence";

let split = string.split(" ");
let reversed = split.reverse();
let joinn = reversed.join(" ");

console.log(joinn);
