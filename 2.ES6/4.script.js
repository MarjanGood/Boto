//primitive type :String - Number - Boolean - null - undefine - Symbol
//Reference type :array -object

let number = 5;
let number2 = number;
number2=6
console.log(number);
console.log(number2);
// output 
// 5
// 6

let array1=[1,2];
let array2=array1;
array2.push(3);
console.log(array1);
console.log(array2);
console.log(number2);
// output 
// [1,2,3]
// [1,2,3]

let object1 ={name: "milad"};
let object2 ={name: "milad"};
console.log(object1===object2)
// output 
// false