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
    class Bee2 {
        constructor(_x, _y) {
            console.log("Hey, I'm Bob!");
            this.x = _x;
            this.y = _y;
        }
        update() {
            this.move();
            this.draw();
        }
        draw() {
            //K�rper 
            abschluss_Canvas.crc2.beginPath();
            abschluss_Canvas.crc2.moveTo(this.x, this.y - 5 / 2);
            abschluss_Canvas.crc2.bezierCurveTo(this.x + 5, this.y - 5 / 2, this.x + 5 / 2, this.y + 5 / 2, this.x, this.y + 5 / 2);
            abschluss_Canvas.crc2.bezierCurveTo(this.x - 5, this.y + 5 / 2, this.x - 5 / 2, this.y - 5 / 2, this.x, this.y - 5 / 2);
            abschluss_Canvas.crc2.fillStyle = "brown";
            abschluss_Canvas.crc2.fill();
            abschluss_Canvas.crc2.closePath();
            abschluss_Canvas.crc2.beginPath();
            abschluss_Canvas.crc2.moveTo(this.x, this.y - 5 / 2);
            abschluss_Canvas.crc2.bezierCurveTo(this.x + 5, this.y - 5 / 4, this.x + 5 / 2, this.y + 5 / 2, this.x, this.y + 5 / 2);
            abschluss_Canvas.crc2.bezierCurveTo(this.x - 5, this.y + 5 / 4, this.x - 5 / 2, this.y - 5 / 2, this.x, this.y - 5 / 2);
            abschluss_Canvas.crc2.strokeStyle = "brown";
            abschluss_Canvas.crc2.stroke();
            abschluss_Canvas.crc2.closePath();
            abschluss_Canvas.crc2.beginPath();
            abschluss_Canvas.crc2.moveTo(this.x + 7, this.y);
            abschluss_Canvas.crc2.strokeStyle = "brown";
            abschluss_Canvas.crc2.fillStyle = "brown";
            abschluss_Canvas.crc2.arc(this.x + 4, this.y, 2, 0, Math.PI * 2, true);
            abschluss_Canvas.crc2.closePath();
            abschluss_Canvas.crc2.fill();
            abschluss_Canvas.crc2.stroke();
            //            Kopf
            abschluss_Canvas.crc2.beginPath();
            abschluss_Canvas.crc2.moveTo(this.x + 7, this.y - 2);
            abschluss_Canvas.crc2.strokeStyle = "brown";
            abschluss_Canvas.crc2.fillStyle = "brown";
            abschluss_Canvas.crc2.arc(this.x + 7, this.y - 2, 1.5, 0, Math.PI * 2, true);
            abschluss_Canvas.crc2.closePath();
            abschluss_Canvas.crc2.fill();
            abschluss_Canvas.crc2.stroke();
            abschluss_Canvas.crc2.beginPath();
            abschluss_Canvas.crc2.moveTo(this.x + 6, this.y - 2);
            abschluss_Canvas.crc2.strokeStyle = "brown";
            abschluss_Canvas.crc2.fillStyle = "brown";
            abschluss_Canvas.crc2.lineTo(this.x + 9, this.y - 6);
            abschluss_Canvas.crc2.moveTo(this.x + 10, this.y - 2);
            abschluss_Canvas.crc2.lineTo(this.x + 11, this.y - 4);
            abschluss_Canvas.crc2.closePath();
            abschluss_Canvas.crc2.fill();
            abschluss_Canvas.crc2.stroke();
            //            Beine
            abschluss_Canvas.crc2.beginPath();
            abschluss_Canvas.crc2.moveTo(this.x, this.y + 2);
            abschluss_Canvas.crc2.strokeStyle = "brown";
            abschluss_Canvas.crc2.fillStyle = "brown";
            abschluss_Canvas.crc2.lineTo(this.x - 1, this.y + 5);
            abschluss_Canvas.crc2.moveTo(this.x + 3, this.y + 2);
            abschluss_Canvas.crc2.lineTo(this.x + 2, this.y + 5);
            abschluss_Canvas.crc2.closePath();
            abschluss_Canvas.crc2.fill();
            abschluss_Canvas.crc2.stroke();
            //            //Kopf
            //            crc2.beginPath();
            //            crc2.moveTo(this.x - 1, this.y + this.size / 2);
            //            crc2.bezierCurveTo(this.x - this.size, this.y, this.x - 5, this.y - this.size / 2, this.x - 1, this.y - this.size / 2);
            //            crc2.fillStyle = "black";
            //            crc2.fill();
            //            crc2.closePath();
            //            //Streifen
            //            crc2.beginPath();
            //            crc2.moveTo(this.x + 0.25, this.y + this.size / 2);
            //            crc2.lineTo(this.x, this.y - this.size / 2);
            //            crc2.strokeStyle = "black";
            //            crc2.stroke();
            //            crc2.closePath();
            //            crc2.beginPath();
            //            crc2.moveTo(this.x + 2.25, this.y + this.size / 2);
            //            crc2.lineTo(this.x + 2.25, this.y - this.size / 2);
            //            crc2.strokeStyle = "black";
            //            crc2.stroke();
        }
        move() {
            this.x += Math.random() * 5 - 1;
            this.y += Math.random() * 4 - 2.5;
            if (this.x < 0) {
                this.x = 620;
            }
            if (this.y < 0) {
                this.y = 400;
            }
            if (this.y > 600) {
                this.y = 0;
            }
        }
        setRandomPosition() {
            this.x = Math.random() * 200;
            this.y = Math.random() * 200;
        }
    }
    abschluss_Canvas.Bee2 = Bee2;
})(abschluss_Canvas || (abschluss_Canvas = {}));
//# sourceMappingURL=dummeAmeisen.js.map