console.log('\nTrying with Set');
const mySet = new Set([1, 2, 3]);

console.log(mySet);

//output Set(3) { 1, 2, 3 }

console.log('\nAdd Set');
const set = new Set();
set.add(1);
set.add('Apple');
set.add(1);
set.add('Apple');

console.log(set); // Output: Set { 1, 'Apple' }

/*
Method add hanya menerima satu argument sebagai nilai yang ingin kita tambahkan ke dalam set. Jika kita memberikan nilai yang sama, set hanya akan menyimpan sekali saja. Oleh karena itu, data yang ada di dalam set tidak akan terduplikat.
*/

//Akses set
console.log('\nAccess set');
const set1 = new Set();
set1.add(1);
set1.add(2);

for (const number of set1) {
  console.log(number); // Output: 1, 2
}
console.log('\nmore access');
const set2 = new Set();
set2.add(1);
set2.add(2);

set2.forEach((value) => console.log(value)); // Output: 1, 2

//Delete set
console.log('\nDelete Set');
const set3 = new Set();
set3.add(1);
set3.add(2);
set3.add(3);
set3.delete(2);

console.log(set3); // Set(1) { 1, 3 }