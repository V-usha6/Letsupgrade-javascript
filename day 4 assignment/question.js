// replace function expression with array functions: 
function ask(question, yes, no)  {
    if(confirm(question))
        yes()
        else no();
}
let result = ask
    ("do you agree?",
    () => alert("you agreed."),
    () => alert("you canceled the execution"),
);


console.log(result);