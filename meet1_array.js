//manipulation Array
console.log('\nManipulation Array\n');

/*
Change value array
const myArray = [1, 2, 3, 4, 5];
myArray[1] = 10;
console.log(myArray); // Output: [1, 10, 3, 4, 5]
*/

/*
Menambahkan Array
const myArray = [1, 2, 3, 4, 5];
myArray.push(6);
console.log(myArray); // Output: [1, 2, 3, 4, 5, 6]
*/

/*
Menghapus Array
const myArray = ['Android', 'Data Science', 'Web'];
delete myArray[1];
console.log(myArray); // Output: ['Android', <1 empty item>, 'Web']
*/

/*
Menggunakan splice untuk menghapus  
const myArray = ['Android', 'Data Science', 'Web'];
myArray.splice(1, 1);
console.log(myArray); // Output: ['Android', 'Web']
*/

/*
 Terakhir, ada cara lainnya yaitu menggunakan method shift dan pop. Kekurangan dari kedua method ini adalah tidak sefleksibel delete dan splice karena shift hanya menghapus element pertama dan pop menghapus element terakhir.\

const myArray = ['Android', 'Data Science', 'Web'];
myArray.shift();
console.log(myArray); // Output: ['Data Science', 'Web']

const myArray = ['Android', 'Data Science', 'Web'];
myArray.pop();
console.log(myArray); // Output: ["Android", "Data Science"]
 */

/*
Array Destructuring
Destructuring digunakan untuk melihat isi dari array. Destructuring cukup mudah dilakukan yaitu dengan menggunakan kurung siku yang di dalamnya adalah nama variabel yang kita assign. Kemudian diikuti dengan assignment operator sama dengan (=) dan array yang ingin diambil nilainya.

const introduction = ['Hello', 'Arsy'];
const [greeting, name] = introduction;
console.log(greeting); // Output: Hello

*/

/*
Reverse
const myArray = ['Android', 'Data Science', 'Web'];
myArray.reverse();
console.log(myArray); // Output: [ 'Web', 'Data Science', 'Android' ]
*/

/*
Sort
const myArray = ['Android', 'Data Science', 'Web'];
myArray.sort();
console.log(myArray); // Output: [ 'Android', 'Data Science', 'Web' ]
*/
