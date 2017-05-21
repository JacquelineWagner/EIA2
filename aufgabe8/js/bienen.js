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
var a08_Canvas;
(function (a08_Canvas) {
    class Bienen {
        constructor(_x, _y, _size, _color) {
            console.log("Hey, I'm Bob!");
            this.setRandomPosition();
            this.setRandomStyle();
            this.x = _x;
            this.y = _y;
            this.size = _size;
            this.color = _color;
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
    a08_Canvas.Bienen = Bienen;
})(a08_Canvas || (a08_Canvas = {}));
//# sourceMappingURL=bienen.js.map