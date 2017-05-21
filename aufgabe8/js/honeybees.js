var a08_Canvas;
(function (a08_Canvas) {
    class Honeybees extends a08_Canvas.Bienen {
        constructor(_x, _y, _size, _color) {
            super(_x, _y, _size, _color);
            this.speed = 0.03;
            this.setAnfangPosition();
            this.setRandomPosition();
        }
        //        update(): void {
        //            this.move();
        //            this.draw();
        //        }
        draw() {
            //Fl�gel
            a08_Canvas.crc2.beginPath();
            a08_Canvas.crc2.moveTo(this.x + 3, this.y - this.size / 2 - 3 - 3 / 2);
            a08_Canvas.crc2.bezierCurveTo(this.x + 3 + 10 / 2, this.y - this.size / 2 - 3 - 3 / 2, this.x + 3 + 10 / 2, this.y - this.size / 2 - 3 + 3 / 2, this.x + 3, this.y - 3 + 3 / 2);
            a08_Canvas.crc2.bezierCurveTo(this.x + 3 - 10 / 2, this.y - this.size / 2 - 3 + 3 / 2, this.x + 3 - 10 / 2, this.y - this.size / 2 - 3 - 3 / 2, this.x + 3, this.y - 3 - 5 / 2);
            a08_Canvas.crc2.fillStyle = "rgba(255,255,255, 0.8)";
            a08_Canvas.crc2.fill();
            a08_Canvas.crc2.closePath();
            //K�rper der Biene
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
            let xMove = this.xPosition - this.x;
            let yMove = this.yPosition - this.y;
            if (Math.abs(xMove) < 0.5 && Math.abs(yMove) < 0.5)
                this.setRandomPosition();
            else {
                this.x += xMove * this.speed;
                this.y += yMove * this.speed;
            }
        }
        setRandomPosition() {
            let randomFlower = Math.round(Math.random() * (a08_Canvas.flower.length - 1));
            this.xPosition = a08_Canvas.flower[randomFlower].x;
            this.yPosition = a08_Canvas.flower[randomFlower].y;
        }
        setAnfangPosition() {
            this.x = 325;
            this.y = 120;
        }
        setRandomStyle() {
            this.size = Math.random() * 30 + 10;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }
    }
    a08_Canvas.Honeybees = Honeybees;
})(a08_Canvas || (a08_Canvas = {}));
//# sourceMappingURL=honeybees.js.map