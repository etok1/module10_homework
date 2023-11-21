// 8th task
// Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».

// Используйте шаблонные строки.

let map = new Map();
map.set("apple", 5);
map.set("pear", 7);
map.set("cherry", 2);

let keys = map.keys();

for (let key of keys) {
  console.log(`${key} - is a key, ${map.get(key)} is a value`);
}
