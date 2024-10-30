console.log('\nSpread Operator');
/*Spread operator digunakan untuk menyebarkan nilai yang ada pada object dan array. Spread operator yang ditandai dengan sintaks tiga titik  (...) adalah fitur yang menarik dan membantu dalam pengelolaan object dan array. Dengan menggunakan spread operator, nilai object dan array dapat di-iterable menjadi beberapa element. */

const obj1 = { name: 'Dicoding' };
const obj2 = { lastName: 'Indonesia', address: 'Jl. Batik Kumeli No 50' };
const newObj = { ...obj1, ...obj2 };

console.log(newObj); // Output: { name: 'Dicoding', lastName: 'Indonesia', address: 'Jl. Batik Kumeli No 50' }

console.log('\nMenggabungkan 2 object');
const originalObj = { name: 'Dicoding', age: 9 };
const copiedObj = { ...originalObj };

console.log(copiedObj); // Output: { name: 'Dicoding', age: 9 }

//Array Spread Operator

console.log('\nArray Spread Operator');
const array1 = ['Dicoding'];
const array2 = ['Indonesia', 'Jl. Batik Kumeli No 50'];
const newArray = [...array1, ...array2];

console.log(newArray); // Output: ['Dicoding', 'Indonesia', 'Jl. Batik Kumeli No 50']

console.log('\nMenggabungkan 2 array');

const original = ['apple', 'banana', 'cherry'];
const copy = [...original];

console.log(copy); // Output: ['apple', 'banana', 'cherry']

