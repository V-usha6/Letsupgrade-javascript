console.log("display");
let display = prompt("enter name");
 
 
console.log(`welcome ${display} `);
document.write(`<center> welcome  ${display}  </center>`);

const ctime = document.getElementById('time');
function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
}

setInterval(clock,1000);
clock();

  