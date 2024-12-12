// impure function
let value = 0;

function addWith(addingValue) {
  value += addingValue;
  console.log(`Current value is ${value}`);
  return value;
}

const result1 = addWith(1); // Output: Current value is 1
const result2 = addWith(1); // Output: Current value is 2
const result3 = addWith(1); // Output: Current value is 3

console.log(result1, result2, result3); // Output: 1, 2, 3


// pure function

function addwithNew(value, addingValue) {
    return value + addingValue;
  }
  
  const result4 = addwithNew(0, 1);
  console.log(`result4 is ${result4}`); // Output: result4 is 1
  
  const result5 = addwithNew(result4, 1);
  console.log(`result5 is ${result5}`); // Output: result5 is 2
  
  const result6 = addwithNew(result5, 1);
  console.log(`result6 is ${result6}`); // Output: result6 is 3
  
  console.log(result4, result5, result6); // Output: 1, 2, 3