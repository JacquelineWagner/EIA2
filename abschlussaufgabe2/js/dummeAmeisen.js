var a2_Canvas;
(function (a2_Canvas) {
    class DummeAmeisen extends a2_Canvas.Ameisen {
        constructor(_x, _y) {
            super(_x, _y);
        }
        //        update(): void {
        //            this.move(); 
        //            this.draw();
        //        }
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
    a2_Canvas.DummeAmeisen = DummeAmeisen;
})(a2_Canvas || (a2_Canvas = {}));
//# sourceMappingURL=dummeAmeisen.js.map