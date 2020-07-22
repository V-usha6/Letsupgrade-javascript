let colors = ['blue','white','black','yellow'];

console.log(colors);

const list = document.querySelector('#list');
console.log(list);

colors.forEach(color=>{
    list.innerHTML += `<h1><li>${color}</li></h1>`;
});   

function setbackground(){
    window.setTimeout( "setbackground()", 5000);
    let index = Math.round(Math.random() * 3);
    let ColorValue = "blue";
    if(index == 1)
    ColorValue = "red";
    if(index == 2)
    ColorValue = "gray";
    if(index == 3)
    ColorValue = "yellow";
    document.bgColor=ColorValue;
    };
setbackground();

