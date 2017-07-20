//
//Aufgabe: Abschlussaufgabe
//Name: Jacqueline Wagner
//Matrikelnummer: 254786
//Datum: 20
//20.07.2017
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
//Er wurde nicht kopiert und auch nicht diktiert.
var a2_Canvas;
(function (a2_Canvas) {
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
            a2_Canvas.crc2.beginPath();
            a2_Canvas.crc2.moveTo(this.x + 4, this.y);
            a2_Canvas.crc2.strokeStyle = "#58006F";
            a2_Canvas.crc2.fillStyle = "#58006F";
            a2_Canvas.crc2.lineTo(this.x + 8, this.y - 6);
            a2_Canvas.crc2.lineTo(this.x + 8, this.y + 4);
            a2_Canvas.crc2.closePath();
            a2_Canvas.crc2.fill();
            a2_Canvas.crc2.stroke();
            a2_Canvas.crc2.beginPath();
            a2_Canvas.crc2.moveTo(this.x, this.y - 10 / 2);
            a2_Canvas.crc2.bezierCurveTo(this.x + 10, this.y - 10 / 2, this.x + 10 / 2, this.y + 10 / 2, this.x, this.y + 10 / 2);
            a2_Canvas.crc2.bezierCurveTo(this.x - 10, this.y + 10 / 2, this.x - 10 / 2, this.y - 10 / 2, this.x, this.y - 10 / 2);
            a2_Canvas.crc2.fillStyle = "#58006F";
            a2_Canvas.crc2.fill();
            a2_Canvas.crc2.closePath();
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
    a2_Canvas.Fisch = Fisch;
})(a2_Canvas || (a2_Canvas = {}));
//# sourceMappingURL=fische.js.map