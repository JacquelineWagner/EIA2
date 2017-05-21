var a08_Canvas;
(function (a08_Canvas) {
    class Blume3 extends a08_Canvas.Blumen {
        constructor(_x, _y, _flowerType) {
            super(_x, _y, _flowerType);
        }
        draw() {
            //        Stiel + Blatt
            a08_Canvas.crc2.beginPath();
            a08_Canvas.crc2.moveTo(this.x - 0.5, this.y + 5);
            a08_Canvas.crc2.strokeStyle = "#013713";
            a08_Canvas.crc2.fillStyle = "#013713";
            a08_Canvas.crc2.lineTo(this.x - 0.5, this.y + 18);
            a08_Canvas.crc2.lineTo(this.x + 1, this.y + 18);
            a08_Canvas.crc2.lineTo(this.x + 1, this.y);
            a08_Canvas.crc2.closePath();
            a08_Canvas.crc2.fill();
            a08_Canvas.crc2.stroke();
            //Bl�te
            a08_Canvas.crc2.beginPath();
            a08_Canvas.crc2.moveTo(this.x, this.y);
            a08_Canvas.crc2.strokeStyle = "#9D5AA4";
            a08_Canvas.crc2.fillStyle = "#9D5AA4";
            a08_Canvas.crc2.arc(this.x, this.y, 6, 0, Math.PI, false);
            a08_Canvas.crc2.moveTo(this.x - 5.7, this.y + 1);
            a08_Canvas.crc2.lineTo(this.x - 5.7, this.y - 5);
            a08_Canvas.crc2.lineTo(this.x - 1, this.y + 1);
            a08_Canvas.crc2.closePath();
            a08_Canvas.crc2.fill();
            a08_Canvas.crc2.stroke();
            a08_Canvas.crc2.beginPath();
            a08_Canvas.crc2.moveTo(this.x - 3, this.y + 1);
            a08_Canvas.crc2.lineTo(this.x, this.y - 4);
            a08_Canvas.crc2.lineTo(this.x + 3, this.y + 1);
            a08_Canvas.crc2.closePath();
            a08_Canvas.crc2.fill();
            a08_Canvas.crc2.stroke();
            a08_Canvas.crc2.beginPath();
            a08_Canvas.crc2.moveTo(this.x, this.y);
            a08_Canvas.crc2.strokeStyle = "#9D5AA4";
            a08_Canvas.crc2.fillStyle = "#9D5AA4   ";
            a08_Canvas.crc2.arc(this.x, this.y, 6, 0, Math.PI, false);
            a08_Canvas.crc2.moveTo(this.x + 6, this.y + 1);
            a08_Canvas.crc2.lineTo(this.x + 6, this.y - 5);
            a08_Canvas.crc2.lineTo(this.x - 1, this.y + 1);
            a08_Canvas.crc2.closePath();
            a08_Canvas.crc2.fill();
            a08_Canvas.crc2.stroke();
        }
    }
    a08_Canvas.Blume3 = Blume3;
})(a08_Canvas || (a08_Canvas = {}));
//# sourceMappingURL=blume3.js.map