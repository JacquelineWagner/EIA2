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
    class Flower2 {
        constructor(_x, _y, _flowerType) {
            this.x = _x;
            this.y = _y;
            this.flowerType = _flowerType;
            this.draw();
        }
        draw() {
            switch (this.flowerType) {
                case "blume":
                    this.blume(this.x - 25, this.y - 6, 5);
                    break;
            }
        }
        update() {
            this.draw();
        }
        //       
        blume(_x, _y, _size) {
            //        Bl�ten
            a07_Canvas.crc2.beginPath();
            a07_Canvas.crc2.moveTo(_x + 0.5, _y - 15);
            a07_Canvas.crc2.strokeStyle = "#F72041";
            a07_Canvas.crc2.fillStyle = "#F72041";
            a07_Canvas.crc2.arc(_x - 2, _y - 14, 3, 0, Math.PI * 2, true);
            a07_Canvas.crc2.arc(_x - 4, _y - 17, 3, 0, Math.PI * 2, true);
            a07_Canvas.crc2.arc(_x - 3, _y - 20, 3, 0, Math.PI * 2, true);
            a07_Canvas.crc2.arc(_x + 1.5, _y - 20, 3, 0, Math.PI * 2, true);
            a07_Canvas.crc2.arc(_x + 3, _y - 17, 3, 0, Math.PI * 2, true);
            a07_Canvas.crc2.arc(_x + 3, _y - 17, 2, 0, Math.PI * 2, true);
            a07_Canvas.crc2.arc(_x + 2, _y - 14, 3, 0, Math.PI * 2, true);
            a07_Canvas.crc2.closePath();
            a07_Canvas.crc2.fill();
            a07_Canvas.crc2.stroke();
            a07_Canvas.crc2.beginPath();
            a07_Canvas.crc2.moveTo(_x - 0.3, _y - 17);
            a07_Canvas.crc2.strokeStyle = "#E0813D";
            a07_Canvas.crc2.fillStyle = "#E0813D";
            a07_Canvas.crc2.arc(_x - 0.3, _y - 17, 2, 0, Math.PI * 2, true);
            a07_Canvas.crc2.closePath();
            a07_Canvas.crc2.fill();
            a07_Canvas.crc2.stroke();
        }
    }
    a07_Canvas.Flower2 = Flower2;
})(a07_Canvas || (a07_Canvas = {}));
//# sourceMappingURL=flower.js.map