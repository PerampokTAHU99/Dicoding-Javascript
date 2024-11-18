import goodMorning from './anotherfile1.mjs';
import anotherName from './anotherfile1.mjs';
import sayHi, { sayGoodBye } from './anotherfile2.mjs';

goodMorning();
anotherName();

sayHi(); // Hai, ini default export dari anotherfile.mjs
sayGoodBye(); // Bye, ini named export dari anotherfile.mjs

/*
note :
Named export cocok digunakan ketika ingin mengekspor banyak nilai dari satu modul. Selain itu, named export mengharuskan kita untuk menulis nama function/method/variable secara spesifik ketika mengimpornya. Menulis nama secara spesifik membuat codebase menjadi konsisten.

Default export cocok digunakan untuk menghindari conflict ketika mengimpornya karena kita tidak perlu menulis function/method/variable sesuai dengan namanya. Selain itu, default export membuat struktur lebih jelas karena dalam satu module hanya ada satu nilai yang diekspor.
 */