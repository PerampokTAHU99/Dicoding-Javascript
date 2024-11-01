/*
Ternary operator membutuhkan tiga operan dengan urutan seperti berikut:
Kondisi yang ingin diperiksa ditulis sebelum tanda tanya (?)
Ekspresi yang dieksekusi jika kondisinya benar.
Ekspresi yang dieksekusi jika kondisi salah.

let result = condition ? value1 : value2;
*/
console.log('\nTernary Operator');

const price = 100000;
const isMember = true;
const discount = isMember ? 0.1 : 0;

console.log(`Anda mendapatkan discount sebesar ${discount * price}`);

//Switch case
console.log('\nSwitch Case');
const fruit = 'apple';

switch (fruit) {
  case 'banana':
    console.log('I am a banana.');
    break;
  case 'apple':
    console.log('I am an apple.');
    break;
  case 'orange':
    console.log('I am an orange.');
    break;
  case 'strawberry':
    console.log('I am a strawberry.');
    break;
  default:
    console.log('I am not a fruit. I am a programmer.');
};


//contoh2
console.log('\nContoh Switch Case 2');

const day = new Date().getDay();

switch (day) {
  case 0:
    console.log('Minggu');
    break;
  case 1:
    console.log('Senin');
    break;
  case 2:
    console.log('Selasa');
    break;
  case 3:
    console.log('Rabu');
    break;
  case 4:
    console.log('Kamis');
    break;
  case 5:
    console.log('Jumat');
    break;
  case 6:
    console.log('Sabtu');
    break;
  default:
    console.log('Hari tidak valid');
};