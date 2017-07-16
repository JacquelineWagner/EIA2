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
var a07_Canvas;
(function (a07_Canvas) {
    class Fisch {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        update(_x, _y) {
            this.drawfisch(0, 0);
        }
        //       
        drawfisch(_x, _y) {
            a07_Canvas.crc2.beginPath();
            a07_Canvas.crc2.moveTo(_x + 4, _y);
            a07_Canvas.crc2.strokeStyle = "blue";
            a07_Canvas.crc2.fillStyle = "blue";
            a07_Canvas.crc2.lineTo(_x + 8, _y - 6);
            a07_Canvas.crc2.lineTo(_x + 8, _y + 4);
            a07_Canvas.crc2.closePath();
            a07_Canvas.crc2.fill();
            a07_Canvas.crc2.stroke();
            a07_Canvas.crc2.beginPath();
            a07_Canvas.crc2.moveTo(_x, _y - 10 / 2);
            a07_Canvas.crc2.bezierCurveTo(_x + 10, _y - 10 / 2, _x + 10 / 2, _y + 10 / 2, _x, _y + 10 / 2);
            a07_Canvas.crc2.bezierCurveTo(_x - 10, _y + 10 / 2, _x - 10 / 2, _y - 10 / 2, _x, _y - 10 / 2);
            a07_Canvas.crc2.fillStyle = "blue";
            a07_Canvas.crc2.fill();
            a07_Canvas.crc2.closePath();
        }
    }
    a07_Canvas.Fisch = Fisch;
})(a07_Canvas || (a07_Canvas = {}));
//# sourceMappingURL=flower.js.map