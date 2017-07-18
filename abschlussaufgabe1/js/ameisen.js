//
//Aufgabe: 8
//Name: Jacqueline Wagner
//Matrikel: 254786
//Datum: 20
//13.05.2017
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
//Er wurde nicht kopiert und auch nicht diktiert.
//Die Aufgabe wurde in Zusammenarbeit mit Selina Mazzaro und Jana Burger erstellt.*/
var a_Canvas;
(function (a_Canvas) {
    class Ameisen {
        constructor(_x, _y) {
            console.log("Hey, I'm Bob!");
            this.setRandomPosition();
            this.x = _x;
            this.y = _y;
        }
        update() {
            this.move();
            this.draw();
        }
        draw() {
            //         Draw Funktion
        }
        move() {
            //        Move Funktion
        }
        setRandomPosition() {
            //        Move Funktion
        }
        setRandomStyle() {
            //setRandomStyle Funktion
        }
    }
    a_Canvas.Ameisen = Ameisen;
})(a_Canvas || (a_Canvas = {}));
//# sourceMappingURL=ameisen.js.map