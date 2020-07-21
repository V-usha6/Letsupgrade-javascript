console.log("higher order function");

let arr=[1,2,3,4,5,6];

let odd = arr.filter(num => num % 2 !=0);
console.log(odd);

console.log("array of cubes with filter function ");

let oddcubes = arr.filter(num => num % 2 !=0).map(num => num**3);
console.log(oddcubes);