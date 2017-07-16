var a08_Canvas;
(function (a08_Canvas) {
    class DummeBienen extends a08_Canvas.Bienen {
        constructor(_x, _y, _size, _color) {
            super(_x, _y, _size, _color);
        }
        //        update(): void {
        //            this.move(); 
        //            this.draw();
        //        }
        draw() {
            //Flügel
            a08_Canvas.crc2.beginPath();
            a08_Canvas.crc2.moveTo(this.x + 3, this.y - this.size / 2 - 3 - 3 / 2);
            a08_Canvas.crc2.bezierCurveTo(this.x + 3 + 10 / 2, this.y - this.size / 2 - 3 - 3 / 2, this.x + 3 + 10 / 2, this.y - this.size / 2 - 3 + 3 / 2, this.x + 3, this.y - 3 + 3 / 2);
            a08_Canvas.crc2.bezierCurveTo(this.x + 3 - 10 / 2, this.y - this.size / 2 - 3 + 3 / 2, this.x + 3 - 10 / 2, this.y - this.size / 2 - 3 - 3 / 2, this.x + 3, this.y - 3 - 5 / 2);
            a08_Canvas.crc2.fillStyle = "rgba(255,255,255, 0.8)";
            a08_Canvas.crc2.fill();
            a08_Canvas.crc2.closePath();
            //Körper der Biene
            a08_Canvas.crc2.beginPath();
            a08_Canvas.crc2.moveTo(this.x, this.y - this.size / 2);
            a08_Canvas.crc2.bezierCurveTo(this.x + this.size, this.y - this.size / 2, this.x + this.size / 2, this.y + this.size / 2, this.x, this.y + this.size / 2);
            a08_Canvas.crc2.bezierCurveTo(this.x - this.size, this.y + this.size / 2, this.x - this.size / 2, this.y - this.size / 2, this.x, this.y - this.size / 2);
            a08_Canvas.crc2.fillStyle = this.color;
            a08_Canvas.crc2.fill();
            a08_Canvas.crc2.closePath();
            a08_Canvas.crc2.beginPath();
            a08_Canvas.crc2.moveTo(this.x, this.y - this.size / 2);
            a08_Canvas.crc2.bezierCurveTo(this.x + this.size, this.y - this.size / 4, this.x + this.size / 2, this.y + this.size / 2, this.x, this.y + this.size / 2);
            a08_Canvas.crc2.bezierCurveTo(this.x - this.size, this.y + this.size / 4, this.x - this.size / 2, this.y - this.size / 2, this.x, this.y - this.size / 2);
            a08_Canvas.crc2.strokeStyle = "black";
            a08_Canvas.crc2.stroke();
            a08_Canvas.crc2.closePath();
            //Kopf
            a08_Canvas.crc2.beginPath();
            a08_Canvas.crc2.moveTo(this.x - 1, this.y + this.size / 2);
            a08_Canvas.crc2.bezierCurveTo(this.x - this.size, this.y, this.x - 5, this.y - this.size / 2, this.x - 1, this.y - this.size / 2);
            a08_Canvas.crc2.fillStyle = "black";
            a08_Canvas.crc2.fill();
            a08_Canvas.crc2.closePath();
            //Streifen
            a08_Canvas.crc2.beginPath();
            a08_Canvas.crc2.moveTo(this.x + 0.25, this.y + this.size / 2);
            a08_Canvas.crc2.lineTo(this.x, this.y - this.size / 2);
            a08_Canvas.crc2.strokeStyle = "black";
            a08_Canvas.crc2.stroke();
            a08_Canvas.crc2.closePath();
            a08_Canvas.crc2.beginPath();
            a08_Canvas.crc2.moveTo(this.x + 2.25, this.y + this.size / 2);
            a08_Canvas.crc2.lineTo(this.x + 2.25, this.y - this.size / 2);
            a08_Canvas.crc2.strokeStyle = "black";
            a08_Canvas.crc2.stroke();
        }
        move() {
            this.x += Math.random() * 5 - 3;
            this.y += Math.random() * 4 - 2;
            if (this.x < 0) {
                this.x = 400;
            }
            if (this.y < 0) {
                this.y = 250;
            }
            if (this.y > 300) {
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
    a08_Canvas.DummeBienen = DummeBienen;
})(a08_Canvas || (a08_Canvas = {}));
//# sourceMappingURL=dummebienen.js.map