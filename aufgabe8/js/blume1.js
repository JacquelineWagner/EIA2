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
    class Blume1 extends a08_Canvas.Blumen {
        constructor(_x, _y, _flowerType) {
            super(_x, _y, _flowerType);
        }
        draw() {
            switch (this.flowerType) {
                case "blume1":
                    this.blume1(this.x - 25, this.y - 6, 5);
                    break;
            }
        }
        blume1(_x, _y, _size) {
            //        Stiel 
            a08_Canvas.crc2.beginPath();
            a08_Canvas.crc2.moveTo(_x, _y);
            a08_Canvas.crc2.strokeStyle = "#013713";
            a08_Canvas.crc2.fillStyle = "#013713";
            a08_Canvas.crc2.lineTo(_x, _y - 15);
            a08_Canvas.crc2.lineTo(_x + 1, _y - 15);
            a08_Canvas.crc2.lineTo(_x + 1, _y);
            a08_Canvas.crc2.closePath();
            a08_Canvas.crc2.fill();
            a08_Canvas.crc2.stroke();
            // Blatt
            a08_Canvas.crc2.beginPath();
            a08_Canvas.crc2.moveTo(_x + 1, _y - 5);
            a08_Canvas.crc2.strokeStyle = "#013713";
            a08_Canvas.crc2.fillStyle = "#013713";
            a08_Canvas.crc2.lineTo(_x + 7, _y - 10);
            a08_Canvas.crc2.lineTo(_x + 1, _y);
            a08_Canvas.crc2.closePath();
            a08_Canvas.crc2.fill();
            a08_Canvas.crc2.stroke();
            a08_Canvas.crc2.beginPath();
            a08_Canvas.crc2.moveTo(_x + 1, _y - 5);
            a08_Canvas.crc2.arcTo(_x + 1, _y - 5, _x + 7, _y - 10, 20);
            a08_Canvas.crc2.closePath();
            a08_Canvas.crc2.fill();
            a08_Canvas.crc2.stroke();
            //        Bl�ten
            a08_Canvas.crc2.beginPath();
            a08_Canvas.crc2.moveTo(_x + 0.5, _y - 15);
            a08_Canvas.crc2.strokeStyle = "#F72041";
            a08_Canvas.crc2.fillStyle = "#F72041";
            a08_Canvas.crc2.arc(_x - 2, _y - 14, 3, 0, Math.PI * 2, true);
            a08_Canvas.crc2.arc(_x - 4, _y - 17, 3, 0, Math.PI * 2, true);
            a08_Canvas.crc2.arc(_x - 3, _y - 20, 3, 0, Math.PI * 2, true);
            a08_Canvas.crc2.arc(_x + 1.5, _y - 20, 3, 0, Math.PI * 2, true);
            a08_Canvas.crc2.arc(_x + 3, _y - 17, 3, 0, Math.PI * 2, true);
            a08_Canvas.crc2.arc(_x + 3, _y - 17, 2, 0, Math.PI * 2, true);
            a08_Canvas.crc2.arc(_x + 2, _y - 14, 3, 0, Math.PI * 2, true);
            a08_Canvas.crc2.closePath();
            a08_Canvas.crc2.fill();
            a08_Canvas.crc2.stroke();
            a08_Canvas.crc2.beginPath();
            a08_Canvas.crc2.moveTo(_x - 0.3, _y - 17);
            a08_Canvas.crc2.strokeStyle = "#E0813D";
            a08_Canvas.crc2.fillStyle = "#E0813D";
            a08_Canvas.crc2.arc(_x - 0.3, _y - 17, 2, 0, Math.PI * 2, true);
            a08_Canvas.crc2.closePath();
            a08_Canvas.crc2.fill();
            a08_Canvas.crc2.stroke();
        }
    }
    a08_Canvas.Blume1 = Blume1;
})(a08_Canvas || (a08_Canvas = {}));
//# sourceMappingURL=blume1.js.map