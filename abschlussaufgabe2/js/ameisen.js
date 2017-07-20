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
    class Ameisen {
        constructor(_x, _y) {
            //            console.log("Hey, I'm Bob!");
            this.setAnfangPosition();
            this.setPosition();
            this.speed = 0.02;
            this.x = _x;
            this.y = _y;
        }
        update() {
            this.move();
            this.draw();
        }
        draw() {
            //K�rper 
            a2_Canvas.crc2.beginPath();
            a2_Canvas.crc2.moveTo(this.x, this.y - 5 / 2);
            a2_Canvas.crc2.bezierCurveTo(this.x + 5, this.y - 5 / 2, this.x + 5 / 2, this.y + 5 / 2, this.x, this.y + 5 / 2);
            a2_Canvas.crc2.bezierCurveTo(this.x - 5, this.y + 5 / 2, this.x - 5 / 2, this.y - 5 / 2, this.x, this.y - 5 / 2);
            a2_Canvas.crc2.fillStyle = "brown";
            a2_Canvas.crc2.fill();
            a2_Canvas.crc2.closePath();
            a2_Canvas.crc2.beginPath();
            a2_Canvas.crc2.moveTo(this.x, this.y - 5 / 2);
            a2_Canvas.crc2.bezierCurveTo(this.x + 5, this.y - 5 / 4, this.x + 5 / 2, this.y + 5 / 2, this.x, this.y + 5 / 2);
            a2_Canvas.crc2.bezierCurveTo(this.x - 5, this.y + 5 / 4, this.x - 5 / 2, this.y - 5 / 2, this.x, this.y - 5 / 2);
            a2_Canvas.crc2.strokeStyle = "brown";
            a2_Canvas.crc2.stroke();
            a2_Canvas.crc2.closePath();
            a2_Canvas.crc2.beginPath();
            a2_Canvas.crc2.moveTo(this.x + 7, this.y);
            a2_Canvas.crc2.strokeStyle = "brown";
            a2_Canvas.crc2.fillStyle = "brown";
            a2_Canvas.crc2.arc(this.x + 4, this.y, 2, 0, Math.PI * 2, true);
            a2_Canvas.crc2.closePath();
            a2_Canvas.crc2.fill();
            a2_Canvas.crc2.stroke();
            //            Kopf
            a2_Canvas.crc2.beginPath();
            a2_Canvas.crc2.moveTo(this.x + 7, this.y - 2);
            a2_Canvas.crc2.strokeStyle = "brown";
            a2_Canvas.crc2.fillStyle = "brown";
            a2_Canvas.crc2.arc(this.x + 7, this.y - 2, 1.5, 0, Math.PI * 2, true);
            a2_Canvas.crc2.closePath();
            a2_Canvas.crc2.fill();
            a2_Canvas.crc2.stroke();
            a2_Canvas.crc2.beginPath();
            a2_Canvas.crc2.moveTo(this.x + 6, this.y - 2);
            a2_Canvas.crc2.strokeStyle = "brown";
            a2_Canvas.crc2.fillStyle = "brown";
            a2_Canvas.crc2.lineTo(this.x + 9, this.y - 6);
            a2_Canvas.crc2.moveTo(this.x + 10, this.y - 2);
            a2_Canvas.crc2.lineTo(this.x + 11, this.y - 4);
            a2_Canvas.crc2.closePath();
            a2_Canvas.crc2.fill();
            a2_Canvas.crc2.stroke();
            //            Beine
            a2_Canvas.crc2.beginPath();
            a2_Canvas.crc2.moveTo(this.x, this.y + 2);
            a2_Canvas.crc2.strokeStyle = "brown";
            a2_Canvas.crc2.fillStyle = "brown";
            a2_Canvas.crc2.lineTo(this.x - 1, this.y + 5);
            a2_Canvas.crc2.moveTo(this.x + 3, this.y + 2);
            a2_Canvas.crc2.lineTo(this.x + 2, this.y + 5);
            a2_Canvas.crc2.closePath();
            a2_Canvas.crc2.fill();
            a2_Canvas.crc2.stroke();
        }
        move() {
            let xMove = this.xPosition - this.x;
            let yMove = this.yPosition - this.y;
            if (Math.abs(xMove) < 0.5 && Math.abs(yMove) < 0.5)
                this.setPosition();
            else {
                this.x += xMove * this.speed;
                this.y += yMove * this.speed;
            }
        }
        setPosition() {
            this.xPosition = 465;
            this.yPosition = 270;
        }
        setAnfangPosition() {
            this.x = 225;
            this.y = 360;
        }
    }
    a2_Canvas.Ameisen = Ameisen;
})(a2_Canvas || (a2_Canvas = {}));
//# sourceMappingURL=ameisen.js.map