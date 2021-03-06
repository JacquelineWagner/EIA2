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
    class Bee {
        constructor(_x, _y, _size, _color) {
            console.log("Hey, I'm Bob!");
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
            //Fl�gel
            a07_Canvas.crc2.beginPath();
            a07_Canvas.crc2.moveTo(this.x + 3, this.y - this.size / 2 - 3 - 3 / 2);
            a07_Canvas.crc2.bezierCurveTo(this.x + 3 + 10 / 2, this.y - this.size / 2 - 3 - 3 / 2, this.x + 3 + 10 / 2, this.y - this.size / 2 - 3 + 3 / 2, this.x + 3, this.y - 3 + 3 / 2);
            a07_Canvas.crc2.bezierCurveTo(this.x + 3 - 10 / 2, this.y - this.size / 2 - 3 + 3 / 2, this.x + 3 - 10 / 2, this.y - this.size / 2 - 3 - 3 / 2, this.x + 3, this.y - 3 - 5 / 2);
            a07_Canvas.crc2.fillStyle = "rgba(255,255,255, 0.8)";
            a07_Canvas.crc2.fill();
            a07_Canvas.crc2.closePath();
            //K�rper der Biene
            a07_Canvas.crc2.beginPath();
            a07_Canvas.crc2.moveTo(this.x, this.y - this.size / 2);
            a07_Canvas.crc2.bezierCurveTo(this.x + this.size, this.y - this.size / 2, this.x + this.size / 2, this.y + this.size / 2, this.x, this.y + this.size / 2);
            a07_Canvas.crc2.bezierCurveTo(this.x - this.size, this.y + this.size / 2, this.x - this.size / 2, this.y - this.size / 2, this.x, this.y - this.size / 2);
            a07_Canvas.crc2.fillStyle = this.color;
            a07_Canvas.crc2.fill();
            a07_Canvas.crc2.closePath();
            a07_Canvas.crc2.beginPath();
            a07_Canvas.crc2.moveTo(this.x, this.y - this.size / 2);
            a07_Canvas.crc2.bezierCurveTo(this.x + this.size, this.y - this.size / 4, this.x + this.size / 2, this.y + this.size / 2, this.x, this.y + this.size / 2);
            a07_Canvas.crc2.bezierCurveTo(this.x - this.size, this.y + this.size / 4, this.x - this.size / 2, this.y - this.size / 2, this.x, this.y - this.size / 2);
            a07_Canvas.crc2.strokeStyle = "black";
            a07_Canvas.crc2.stroke();
            a07_Canvas.crc2.closePath();
            //Kopf
            a07_Canvas.crc2.beginPath();
            a07_Canvas.crc2.moveTo(this.x - 1, this.y + this.size / 2);
            a07_Canvas.crc2.bezierCurveTo(this.x - this.size, this.y, this.x - 5, this.y - this.size / 2, this.x - 1, this.y - this.size / 2);
            a07_Canvas.crc2.fillStyle = "black";
            a07_Canvas.crc2.fill();
            a07_Canvas.crc2.closePath();
            //Streifen
            a07_Canvas.crc2.beginPath();
            a07_Canvas.crc2.moveTo(this.x + 0.25, this.y + this.size / 2);
            a07_Canvas.crc2.lineTo(this.x, this.y - this.size / 2);
            a07_Canvas.crc2.strokeStyle = "black";
            a07_Canvas.crc2.stroke();
            a07_Canvas.crc2.closePath();
            a07_Canvas.crc2.beginPath();
            a07_Canvas.crc2.moveTo(this.x + 2.25, this.y + this.size / 2);
            a07_Canvas.crc2.lineTo(this.x + 2.25, this.y - this.size / 2);
            a07_Canvas.crc2.strokeStyle = "black";
            a07_Canvas.crc2.stroke();
        }
        move() {
            this.x += Math.random() * 5 - 3;
            this.y += Math.random() * 4 - 2;
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
        setRandomStyle() {
            this.size = Math.random() * 30 + 10;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }
    }
    a07_Canvas.Bee = Bee;
})(a07_Canvas || (a07_Canvas = {}));
//# sourceMappingURL=bienen.js.map