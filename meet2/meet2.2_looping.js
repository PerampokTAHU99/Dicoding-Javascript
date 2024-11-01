//looping
console.log('\nLooping');
for (let i = 0; i < 5; i++) {
    console.log(`Angka ke-${i} adalah ${i}`);
}

/*
for in
For in banyak digunakan untuk pengulangan pada object karena ia dapat melakukan iterasi ke seluruh data di dalam objek. Bahkan, ia juga dapat melakukan iterasi ke properti inheritance dari object seperti length. Berikut contoh penggunaan for in.
 */

console.log('\nContohFor In');
const person = { name: 'Fulan', origin: 'Bandung', birthYear: 2024 };

for (const property in person) {
    console.log(`${property} bernilai ${person[property]}`);
}


/*
For Of
Kehadiran for of dimulai pada ECMAScript 2015 (ES6). For of berbeda dengan for in. For of lebih sederhana karena kita tidak perlu memikirkan property dan key. Perhatikan contoh berikut.
 */

console.log('\nContoh For Of');
const names = ['Bebek', 'Ayam', 'Telor', 'Tempe'];

for (const item of names) {
    console.log(item);
}

//while
console.log('\nWhile Loop');
let i = 0;

while (i < 5) {
    console.log(`Angka ke-${i} adalah ${i}.`);
    i++;
}

/*
Do-while
Sebenarnya, while dan do-while tidak berbeda jauh. Perbedaan mereka terdapat pada urutan pengecekan kondisi. While melakukan evaluasi kondisi di awal, sedangkan do-while melakukannya di akhir
*/

console.log('\nDo-While Loop');
let j = 0;

do {
    console.log(`Angka ke-${j} adalah ${j}.`);
    j++;
} while (j < 5);


/*
Control Statement
Ketika melakukan perulangan, ada yang namanya control statement. Control statement berfungsi untuk menghentikan eksekusi kode. Beberapa statement yang masuk ke dalam kategori control statement adalah break dan continue. Pada contoh yang diberikan sebelumnya, mungkin Anda sudah ngeh bahwa kita menggunakan break statement.

Break
Break statement adalah cara kita untuk memberitahukan interpreter yang sedang mengeksekusi kode untuk berhenti dan langsung berpindah ke akhir dari percabangan atau perulangan.
 */

console.log('\nBreak');
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }

    console.log(i);
}

/*
Continue
Continue statement sama seperti break statement. Namun, alih-alih menghentikan eksekusi program, continue akan melanjutkan iterasi ke iterasi berikutnya. Continue statement hanya dapat digunakan di dalam body looping.
*/
console.log('\nContinue');
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}
