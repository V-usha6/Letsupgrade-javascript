console.log("string methods");

let str= `hiii everyone`;
let str1=`bye bye`;
console.log(str);

let name ="xyz";
let language = "telugu";
//let subject = "maths";

console.log(`the name is ${name}. His language is ${language}`);

let text = "Here we are learning javascript hope you all understanding";
console.log(text);

//To check the length
console.log(text.length);

//To check the case
console.log(text.toUpperCase());
console.log(text.toLowerCase());

//To check concat
console.log(text.concat(str,str1));

//To check endswith
console.log(text.endsWith('bye'));
console.log(text.endsWith('understanding'));

//To check with includes
console.log(text.includes("all"));


//To check with index
console.log(text[7]);
console.log(text.indexOf('to'));
console.log(text.indexOf('e'));
console.log(text.charAt('20'));
console.log(text.endsWith("bye"));
console.log(text.split('a'));

//To check with repeat
console.log(text.repeat(7));

//To check with replace
console.log(text.replace("Here","Hi All"));

//To check with substring
console.log(text.substring(3,7));

//To check with trim
console.log(text.trim(" Hi we "));

//TO check CharAT
console.log(text.charAt(5));

//To check with slice
console.log(text.slice(3,6));

//To check with valueof
console.log(text.valueOf());


let arr= ['a','b','l','u'];
let arr1=['y','z'];
console.log(arr);

arr.join("arr" * "arr2");
console.log(arr);

arr.push('h');
console.log(arr);

arr.pop('h');
console.log(arr.pop());

arr.unshift('aaa');
console.log(arr);

//removing an element
arr.shift('u'); //from starting
console.log(arr);

console.log(arr.pop()); //from the end

