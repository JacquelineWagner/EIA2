//
//Aufgabe: 7
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
    class Fisch {
        constructor(_x, _y) {
            console.log("Hey, I'm jessy!");
            this.x = _x;
            this.y = _y;
        }
        update() {
            this.move();
            this.drawfisch();
        }
        //       
        drawfisch() {
            a_Canvas.crc2.beginPath();
            a_Canvas.crc2.moveTo(this.x + 4, this.y);
            a_Canvas.crc2.strokeStyle = "#58006F";
            a_Canvas.crc2.fillStyle = "#58006F";
            a_Canvas.crc2.lineTo(this.x + 8, this.y - 6);
            a_Canvas.crc2.lineTo(this.x + 8, this.y + 4);
            a_Canvas.crc2.closePath();
            a_Canvas.crc2.fill();
            a_Canvas.crc2.stroke();
            a_Canvas.crc2.beginPath();
            a_Canvas.crc2.moveTo(this.x, this.y - 10 / 2);
            a_Canvas.crc2.bezierCurveTo(this.x + 10, this.y - 10 / 2, this.x + 10 / 2, this.y + 10 / 2, this.x, this.y + 10 / 2);
            a_Canvas.crc2.bezierCurveTo(this.x - 10, this.y + 10 / 2, this.x - 10 / 2, this.y - 10 / 2, this.x, this.y - 10 / 2);
            a_Canvas.crc2.fillStyle = "#58006F";
            a_Canvas.crc2.fill();
            a_Canvas.crc2.closePath();
        }
        move() {
            this.x += Math.random() * 5 - 3;
            this.y += Math.random() * 4 - 2;
        }
        setRandomPosition() {
            this.x = Math.random() * 200;
            this.y = Math.random() * 200;
        }
    }
    a_Canvas.Fisch = Fisch;
})(a_Canvas || (a_Canvas = {}));
//# sourceMappingURL=fische.js.map