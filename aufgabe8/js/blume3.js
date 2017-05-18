var a08_Canvas;
(function (a08_Canvas) {
    class Blume3 extends a08_Canvas.Blumen {
        constructor(_x, _y, _flowerType) {
            super(_x, _y, _flowerType);
        }
        draw() {
            switch (this.flowerType) {
                case "blume3":
                    this.blume3(this.x - 25, this.y - 6);
                    break;
            }
        }
        blume3(_x, _y) {
            //        Stiel + Blatt
            a08_Canvas.crc2.beginPath();
            a08_Canvas.crc2.moveTo(_x - 0.5, _y + 5);
            a08_Canvas.crc2.strokeStyle = "#013713";
            a08_Canvas.crc2.fillStyle = "#013713";
            a08_Canvas.crc2.lineTo(_x - 0.5, _y + 18);
            a08_Canvas.crc2.lineTo(_x + 1, _y + 18);
            a08_Canvas.crc2.lineTo(_x + 1, _y);
            a08_Canvas.crc2.closePath();
            a08_Canvas.crc2.fill();
            a08_Canvas.crc2.stroke();
            //Bl�te
            a08_Canvas.crc2.beginPath();
            a08_Canvas.crc2.moveTo(_x, _y);
            a08_Canvas.crc2.strokeStyle = "#9D5AA4";
            a08_Canvas.crc2.fillStyle = "#9D5AA4";
            a08_Canvas.crc2.arc(_x, _y, 6, 0, Math.PI, false);
            a08_Canvas.crc2.moveTo(_x - 5.7, _y + 1);
            a08_Canvas.crc2.lineTo(_x - 5.7, _y - 5);
            a08_Canvas.crc2.lineTo(_x - 1, _y + 1);
            a08_Canvas.crc2.closePath();
            a08_Canvas.crc2.fill();
            a08_Canvas.crc2.stroke();
            a08_Canvas.crc2.beginPath();
            a08_Canvas.crc2.moveTo(_x - 3, _y + 1);
            a08_Canvas.crc2.lineTo(_x, _y - 4);
            a08_Canvas.crc2.lineTo(_x + 3, _y + 1);
            a08_Canvas.crc2.closePath();
            a08_Canvas.crc2.fill();
            a08_Canvas.crc2.stroke();
            a08_Canvas.crc2.beginPath();
            a08_Canvas.crc2.moveTo(_x, _y);
            a08_Canvas.crc2.strokeStyle = "#9D5AA4";
            a08_Canvas.crc2.fillStyle = "#9D5AA4   ";
            a08_Canvas.crc2.arc(_x, _y, 6, 0, Math.PI, false);
            a08_Canvas.crc2.moveTo(_x + 6, _y + 1);
            a08_Canvas.crc2.lineTo(_x + 6, _y - 5);
            a08_Canvas.crc2.lineTo(_x - 1, _y + 1);
            a08_Canvas.crc2.closePath();
            a08_Canvas.crc2.fill();
            a08_Canvas.crc2.stroke();
        }
    }
    a08_Canvas.Blume3 = Blume3;
})(a08_Canvas || (a08_Canvas = {}));
//# sourceMappingURL=blume3.js.map