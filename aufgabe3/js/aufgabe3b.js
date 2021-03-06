//
//Aufgabe: 3b
//Name: Jacqueline Wagner
//Matrikel: 254786
//Datum: 09.04.2017
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
//Er wurde nicht kopiert und auch nicht diktiert.*/
let cards;
let handcards = [];
let ablagecards = [];
let nachziehstapel;
let ablagestapel;
document.addEventListener("DOMContentLoaded", function () {
    cards = [
        "Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz Bube", "Herz Dame", "Herz Koenig", "Herz Ass",
        "Pik 7", "Pik 8", "Pik 9", "Pik 10", "Pik Bube", "Pik Dame", "Pik Koenig", "Pik Ass",
        "Karo 7", "Karo 8", "Karo 9", "Karo 10", "Karo Bube", "Karo Dame", "Karo Koenig", "Karo Ass",
        "Kreuz 7", "Kreuz 8", "Kreuz 9", "Kreuz 10", "Kreuz Bube", "Kreuz Dame", "Kreuz Koenig", "Kreuz Ass"
    ];
    nachziehstapel = document.getElementById("nachziehstapel");
    ablagestapel = document.getElementById("ablagestapel");
    nachziehstapel.addEventListener("click", drawCard);
    ablagestapel.addEventListener("click", removeCard);
});
function drawCard() {
    //if (typeof handcards !== "undefined") {  <-- wenn ich das drin lasse, verschwindet die Fehlermeldung, jedoch 
    //                                             werden keine divs mehr erzeugt :(
    if (cards.length > 0 && handcards.length < 5) {
        let div = document.createElement("div"); //create div
        document.getElementById("handstapel").appendChild(div); //anh�ngen an handkarten
        let wert = Math.floor((Math.random() * (cards.length - 1)) + 0);
        div.className = "selected";
        div.textContent = cards[wert];
        let auswahl = cards[wert];
        cards.splice(wert, 1);
        handcards.push(auswahl);
        div.addEventListener("click", removeCard);
    }
}
function removeCard(_event) {
    let target = _event.target;
    console.log(target);
    for (let i = 0; i < handcards.length; i++) {
        if (handcards[i] === target.textContent) {
            ablagecards.push(handcards.splice(i, 1)[0]);
            target.parentNode.removeChild(target);
        }
    }
    ablagestapel.textContent = ablagecards[ablagecards.length - 1];
}
//# sourceMappingURL=aufgabe3b.js.map