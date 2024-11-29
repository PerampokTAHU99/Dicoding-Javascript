// import {name, favoriteFood, sayHi} from './module.mjs';
import * as user from './module.mjs'; // lebih praktis  

console.log(user.name); // Output: John
console.log(user.favoriteFood); // Output: ['pizza', 'pasta', 'sushi']
user.sayHi(user.name); // Output: Hi, John! 