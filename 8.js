// 8th task
let map = new Map();
map.set("apple", 5);
map.set("pear", 7);
map.set("cherry", 2);

let keys = map.keys();

for (let key of keys) {
  console.log(`${key} - is a key, ${map.get(key)} is a value`);
}
