console.log('\nRest Operator');
/*
Rest parameter memungkinkan kita untuk menulis argument yang tak terbatas pada function.
*/

console.log('\nContoh Rest Operator');
//contoh1
function myFunc(...manyMoreArgs) {
    console.log('manyMoreArgs', manyMoreArgs);
  }
  
  myFunc('one', 'two', 'three');
  // Output: manyMoreArgs ["one", "two", "three"]

  //contoh2
  console.log('\nContoh Rest Operator 2');
  function myFunc2(number, ...manyMoreArgs) {
    console.log('number', number);
    console.log('manyMoreArgs', manyMoreArgs);
  }
  
  myFunc2('one', 'two', 'three');
  // Output: manyMoreArgs2 [ 'two', 'three' ]

  //contoh3 penggunaan array.lenght
  console.log('\nContoh Rest Operator menggunakan array.lenght');
  function myFunc3(...manyMoreArgs) {
    console.log(manyMoreArgs.length);
    console.log('manyMoreArgs', manyMoreArgs);
  }
  
  myFunc3('one', 'two', 'three');
  /*
  output: 3
  manyMoreArgs [ 'one', 'two', 'three' ]
  */

  //contoh4
console.log('\nContoh Rest Operator 4');

const favorites = ['Nasi Goreng', 'Mie Goreng', 'Ayam Bakar', 'Tahu', 'Tempe'];

const [first, second, ...rest] = favorites;

console.log(first);
console.log(second);
console.log(rest);

/*
kita juga dapat menggunakan method array lainnya pada rest parameter.

Selain pada parameter fungsi, rest operator juga kerap digunakan ketika kita melakukan destructuring array untuk menangkap seluruh sisa elemen terakhir dalam bentuk array.
 * output:
 * Nasi Goreng
 * Mie Goreng
 * [ 'Ayam Bakar', 'Tahu', 'Tempe' ]
 */

