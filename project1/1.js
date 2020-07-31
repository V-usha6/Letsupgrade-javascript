document.write("<p style= 'color:black; size:bold;background-color:white;  height:150px ;text-align:center' >");
document.write(" RANDOM QUOTES ");
document.write("</p>");

let quotes = [
    ' “Live life to the fullest, and focus on the positive.” — Matt Cameron ' ,

    ' “A positive attitude causes a chain reaction of positive thoughts, events and outcomes. It is a catalyst and it sparks extraordinary results.” — Wade Boggs ' ,

    ' “Virtually nothing is impossible in this world if you just put your mind to it and maintain a positive attitude.” —Lou Holtz ',

    ' “It’s actually cool to be positive and optimistic and idealistic. It’s cool to see yourself doing beautiful, great things.” —Tom DeLonge ' ,

    ' “A positive attitude can really make dreams come true—it did for me.” —David Bailey ',

    ' “You cannot have a positive life and a negative mind.” — Joyce Meyer ',

    ' “Positive anything is better than negative nothing." —Elbert Hubbard ',

    ' “There is little difference in people but that little difference makes a big difference. The little difference is attitude. The big difference is whether it is positive or negative."   —W. Clement Stone'
]



let randomnum = Math.floor( Math.random() * quotes.length);


//document.getElementById('quotedisplay').innerHTML = quotes[randomnum];

//document.getElementById('quotedisplay');

document.write("<p style='background-color: ; text-align:center ' >");
document.write(quotes[randomnum]);
document.write("</p>");

