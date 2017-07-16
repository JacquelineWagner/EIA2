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
var abschluss_Canvas;
(function (abschluss_Canvas) {
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
            abschluss_Canvas.crc2.beginPath();
            abschluss_Canvas.crc2.moveTo(_x + 4, _y);
            abschluss_Canvas.crc2.strokeStyle = "#58006F";
            abschluss_Canvas.crc2.fillStyle = "#58006F";
            abschluss_Canvas.crc2.lineTo(_x + 8, _y - 6);
            abschluss_Canvas.crc2.lineTo(_x + 8, _y + 4);
            abschluss_Canvas.crc2.closePath();
            abschluss_Canvas.crc2.fill();
            abschluss_Canvas.crc2.stroke();
            abschluss_Canvas.crc2.beginPath();
            abschluss_Canvas.crc2.moveTo(_x, _y - 10 / 2);
            abschluss_Canvas.crc2.bezierCurveTo(_x + 10, _y - 10 / 2, _x + 10 / 2, _y + 10 / 2, _x, _y + 10 / 2);
            abschluss_Canvas.crc2.bezierCurveTo(_x - 10, _y + 10 / 2, _x - 10 / 2, _y - 10 / 2, _x, _y - 10 / 2);
            abschluss_Canvas.crc2.fillStyle = "#58006F";
            abschluss_Canvas.crc2.fill();
            abschluss_Canvas.crc2.closePath();
        }
    }
    abschluss_Canvas.Fisch = Fisch;
})(abschluss_Canvas || (abschluss_Canvas = {}));
//# sourceMappingURL=fische.js.map