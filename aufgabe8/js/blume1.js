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
            //            //        Stiel 
            a08_Canvas.crc2.beginPath();
            a08_Canvas.crc2.moveTo(this.x, this.y);
            a08_Canvas.crc2.strokeStyle = "#013713";
            a08_Canvas.crc2.fillStyle = "#013713";
            a08_Canvas.crc2.lineTo(this.x, this.y - 15);
            a08_Canvas.crc2.lineTo(this.x + 1, this.y - 15);
            a08_Canvas.crc2.lineTo(this.x + 1, this.y);
            a08_Canvas.crc2.closePath();
            a08_Canvas.crc2.fill();
            a08_Canvas.crc2.stroke();
            // Blatt
            a08_Canvas.crc2.beginPath();
            a08_Canvas.crc2.moveTo(this.x + 1, this.y - 5);
            a08_Canvas.crc2.strokeStyle = "#013713";
            a08_Canvas.crc2.fillStyle = "#013713";
            a08_Canvas.crc2.lineTo(this.x + 7, this.y - 10);
            a08_Canvas.crc2.lineTo(this.x + 1, this.y);
            a08_Canvas.crc2.closePath();
            a08_Canvas.crc2.fill();
            a08_Canvas.crc2.stroke();
            a08_Canvas.crc2.beginPath();
            a08_Canvas.crc2.moveTo(this.x + 1, this.y - 5);
            a08_Canvas.crc2.arcTo(this.x + 1, this.y - 5, this.x + 7, this.y - 10, 20);
            a08_Canvas.crc2.closePath();
            a08_Canvas.crc2.fill();
            a08_Canvas.crc2.stroke();
            //        Bl�ten
            a08_Canvas.crc2.beginPath();
            a08_Canvas.crc2.moveTo(this.x + 0.5, this.y - 15);
            a08_Canvas.crc2.strokeStyle = "#F72041";
            a08_Canvas.crc2.fillStyle = "#F72041";
            a08_Canvas.crc2.arc(this.x - 2, this.y - 14, 3, 0, Math.PI * 2, true);
            a08_Canvas.crc2.arc(this.x - 4, this.y - 17, 3, 0, Math.PI * 2, true);
            a08_Canvas.crc2.arc(this.x - 3, this.y - 20, 3, 0, Math.PI * 2, true);
            a08_Canvas.crc2.arc(this.x + 1.5, this.y - 20, 3, 0, Math.PI * 2, true);
            a08_Canvas.crc2.arc(this.x + 3, this.y - 17, 3, 0, Math.PI * 2, true);
            a08_Canvas.crc2.arc(this.x + 3, this.y - 17, 2, 0, Math.PI * 2, true);
            a08_Canvas.crc2.arc(this.x + 2, this.y - 14, 3, 0, Math.PI * 2, true);
            a08_Canvas.crc2.closePath();
            a08_Canvas.crc2.fill();
            a08_Canvas.crc2.stroke();
            a08_Canvas.crc2.beginPath();
            a08_Canvas.crc2.moveTo(this.x - 0.3, this.y - 17);
            a08_Canvas.crc2.strokeStyle = "#E0813D";
            a08_Canvas.crc2.fillStyle = "#E0813D";
            a08_Canvas.crc2.arc(this.x - 0.3, this.y - 17, 2, 0, Math.PI * 2, true);
            a08_Canvas.crc2.closePath();
            a08_Canvas.crc2.fill();
            a08_Canvas.crc2.stroke();
        }
    }
    a08_Canvas.Blume1 = Blume1;
})(a08_Canvas || (a08_Canvas = {}));
//# sourceMappingURL=blume1.js.map