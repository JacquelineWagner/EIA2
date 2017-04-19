//
//Aufgabe: 3b
//Name: Jacqueline Wagner
//Matrikel: 254786
//Datum: 09.04.2017
//    

//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
//Er wurde nicht kopiert und auch nicht diktiert.*/



/*Diese Aufgabe wurde in Zusammenarbeit mit Jana und Selina erstellt*/

let zeile: number = 0;
let a: number = 1; //Anzahl Reis

document.addEventListener("DOMContentLoaded", function(): void {

    //Aussehen von Body bleibt immer gleich 
    let b: CSSStyleDeclaration = document.body.style;
    b.width = "450px";
    b.margin = "50px";
    b.backgroundColor = "#F7F7F7";

    let countField: number = 0;

    //Schachbrett
    for (let i: number = 0; i < 8; i++) {
        for (let j: number = 0; j < 8; j++) {
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

    //Aufgabe 3a

    for (let i: number = 0; i < 8; i++) {
        var total: number = 0;

        console.log("Schleife");
        let fields: NodeListOf<HTMLElement> = document.getElementsByTagName("div");
        fields[i].addEventListener("click", function() {
            fields[i].classList.toggle("selection");

            console.log(fields[i]);

            let selected: NodeListOf<Element> = document.getElementsByClassName("selection");

            console.log(selected);

            if (selected.length == 0) {
                document.getElementById("Summe").style.display = "none";
            }

            else {
                document.getElementById("Summe").style.display = "inline-block";
            }

            document.getElementById("Summe").textContent = "Summe der Körner - " + "Dezimal: " + total.toString() + ";" + " Hexadezimal: " + total.toString(16);


            for (let i: number = 0; i < selected.length; i++) {
                total += Number(selected[i].textContent);
            }
        });
    }
    document.addEventListener("mousemove", function(Event) {
        document.getElementById("Summe").style.left = (Event.clientX + 10) + "px";
        document.getElementById("Summe").style.top = (Event.clientY + 10) + "px";
    });

});

//Divs erzeugen
function Div(): void {
    let div: HTMLDivElement = document.createElement("div");
    document.body.appendChild(div);
    div.className = "DivBox";

    //Aussehen von Divs
    let s: CSSStyleDeclaration = div.style;
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
function black(_number: number): void {
    let div: NodeList = document.getElementsByTagName("div");
    let currentDiv: HTMLDivElement = <HTMLDivElement>div[_number];
    if (div.length != 0) {
        currentDiv.style.backgroundColor = "black";
        currentDiv.style.color = "white";
        currentDiv.style.textAlign = "center";
    }
}
//Weiße Divs
function white(_number: number): void {
    let div: NodeList = document.getElementsByTagName("div");
    let currentDiv: HTMLDivElement = <HTMLDivElement>div[_number];
    if (div.length != 0) {
        currentDiv.style.backgroundColor = "white";
        currentDiv.style.color = "black";
        currentDiv.style.textAlign = "center";
    }
}


