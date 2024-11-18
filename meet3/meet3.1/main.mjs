import result from './anotherfile.mjs';
import { myFunction } from './anotherfile2.mjs';
import * as variable from './anotherfile3.mjs';

result(); // Output: Ini adalah function export default.

myFunction(); // Output: Ini adalah contoh named import.

//contoh 3
console.log('\n'+variable.name); // Output: Theo
console.log(variable.email); // Output: theofahrizals@gmail.com
console.log(variable.age); // Output: 21


/*
note : 
perbedaan antara import {} dan import *?
import * memungkinkan kita untuk mengimpor seluruh module yang di export. Namun, kekurangannya adalah sulit untuk dibaca karena tidak eksplisit, sedangkan menggunakan import {} akan menjadi eksplisit sehingga kita bisa tahu apa saja function/method/variable yang ingin di-import.

 */