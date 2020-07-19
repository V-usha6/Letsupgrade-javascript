const student = {
    name : "Helsinki",
    age: 24,
    Projects: {
        dicsgame: 'Two player dice game using javascript',
    },
}


console.log(student.age);
console.log(student.Projects.dicsgame);
 // destructing object 
const {name,age,Projects={dicsgame}} = student
;console.log(name, age, Projects);