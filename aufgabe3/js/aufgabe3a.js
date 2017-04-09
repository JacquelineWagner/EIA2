//
//Aufgabe: 3b
//Name: Jacqueline Wagner
//Matrikel: 254786
//Datum: 09.04.2017
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
//Er wurde nicht kopiert und auch nicht diktiert.*/
//Leider ist diese Aufgabe nicht vollst�ndig aufgrund fehlender Verst�ndis meinerseits. 
//Ich hab es auch nicht geschafft die Aufgabe in der Gruppe zul�sen und w�re deshalb sehr dankbar, 
//wenn wir diese Aufgabe im Praltikum nochmal besprechen k�nnten
/*Diese Aufgabe wurde in Zusammenarbeit mit Jana und Selina erstellt*/
var zeile = 0;
var a = 1; //Anzahl Reis
document.addEventListener("DOMContentLoaded", function () {
    //Aussehen von Body bleibt immer gleich 
    var b = document.body.style;
    b.width = "450px";
    b.margin = "50px";
    b.backgroundColor = "#F7F7F7";
    var countField = 0;
    //Schachbrett
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            Div();
            if (i % 2 == j % 2) {
                white(countField);
            }
            else {
                black(countField);
            }
            countField++;
        }
    }
    //   Aufgabe 3a
    var x = 0;
    var divList = document.getElementsByTagName("div");
    for (x; x < 8; x++) {
        divList[x].addEventListener("click", clickEvent);
    }
});
//Divs erzeugen
function Div() {
    var div = document.createElement("div");
    document.body.appendChild(div);
    div.className = "DivBox";
    //Aussehen von Divs
    var s = div.style;
    s.borderStyle = "solid";
    s.borderColor = "#000000";
    s.borderWidth = "1px";
    s.width = "50px";
    s.height = "50px";
    s.display = "inline-block";
    s.cssFloat = "left";
    s.overflow = "auto";
    //Reis
    div.innerText = "" + a;
    a = a * 2;
}
//Schwarze Divs
function black(_number) {
    var div = document.getElementsByTagName("div");
    var currentDiv = div[_number];
    if (div.length != 0) {
        currentDiv.style.backgroundColor = "black";
        currentDiv.style.color = "white";
        currentDiv.style.textAlign = "center";
    }
}
//Wei�e Divs
function white(_number) {
    var div = document.getElementsByTagName("div");
    var currentDiv = div[_number];
    if (div.length != 0) {
        currentDiv.style.backgroundColor = "white";
        currentDiv.style.color = "black";
        currentDiv.style.textAlign = "center";
    }
}
//Aufgabe 3a
var x = 0;
var divList = document.getElementsByTagName("div");
var state = true;
function clickEvent() {
    for (x; x < 8; x++) {
        if (state == true) {
            divList[x].style.borderColor = "yellow";
            state = false;
        }
        else {
            divList[x].style.borderColor = "black";
            state = true;
        }
    }
}
//# sourceMappingURL=aufgabe3a.js.map