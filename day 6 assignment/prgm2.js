console.log("Tables");
let num = prompt("enter a number of ur choice", "0");

function printTable(){

    document.write("<center><table border = '1px'>");
    for (let i=1; i<=10;i++)
        {
            document.write("<tr><td style='width:200px'><center><font size = '4'>" + num + " x " + i + " = "  + num*i  + "</center></font></td></tr>");

            console.log("<tr><td>" + num + " x " + i + " = " + num*i + "</td></tr>");
        
   }
document.write("</table></center>")
}

printTable();

