var a08_Canvas;
(function (a08_Canvas) {
    class Tulpe extends a08_Canvas.Blumen {
        constructor(_x, _y, _flowerType) {
            super(_x, _y, _flowerType);
        }
        draw() {
            switch (this.flowerType) {
                case "tulpe":
                    this.tulpe(this.x + 40, this.y - 5);
                    break;
            }
        }
        tulpe(_x, _y) {
            //        Stiel 
            a08_Canvas.crc2.beginPath();
            a08_Canvas.crc2.moveTo(_x - 0.5, _y - 5);
            a08_Canvas.crc2.strokeStyle = "#013713";
            a08_Canvas.crc2.fillStyle = "#0137#13";
            a08_Canvas.crc2.lineTo(_x + 0.5, _y - 5);
            a08_Canvas.crc2.lineTo(_x + 0.5, _y + 10);
            a08_Canvas.crc2.lineTo(_x - 0.5, _y + 10);
            a08_Canvas.crc2.closePath();
            a08_Canvas.crc2.fill();
            a08_Canvas.crc2.stroke();
            // Blatt
            a08_Canvas.crc2.beginPath();
            a08_Canvas.crc2.moveTo(_x - 2, _y - 5);
            a08_Canvas.crc2.strokeStyle = "#D4A5D3";
            a08_Canvas.crc2.fillStyle = "#D4A5D3";
            a08_Canvas.crc2.lineTo(_x - 2, _y - 9);
            a08_Canvas.crc2.lineTo(_x, _y - 6);
            a08_Canvas.crc2.lineTo(_x + 2, _y - 9);
            a08_Canvas.crc2.lineTo(_x + 2, _y - 5);
            a08_Canvas.crc2.closePath();
            a08_Canvas.crc2.fill();
            a08_Canvas.crc2.stroke();
            a08_Canvas.crc2.beginPath();
            a08_Canvas.crc2.moveTo(_x - 0.5, _y - 5);
            a08_Canvas.crc2.strokeStyle = "#8A0651";
            a08_Canvas.crc2.fillStyle = "#8A0651";
            a08_Canvas.crc2.lineTo(_x + 0.5, _y - 5);
            a08_Canvas.crc2.lineTo(_x + 0.5, _y + 1);
            a08_Canvas.crc2.lineTo(_x - 0.5, _y + 1);
            a08_Canvas.crc2.closePath();
            a08_Canvas.crc2.fill();
            a08_Canvas.crc2.stroke();
            a08_Canvas.crc2.beginPath();
            a08_Canvas.crc2.moveTo(_x + 1, _y - 5);
            a08_Canvas.crc2.strokeStyle = "#8A0651";
            a08_Canvas.crc2.fillStyle = "#8A0651";
            a08_Canvas.crc2.lineTo(_x + 7, _y - 8);
            a08_Canvas.crc2.lineTo(_x + 1, _y);
            a08_Canvas.crc2.closePath();
            a08_Canvas.crc2.fill();
            a08_Canvas.crc2.stroke();
            a08_Canvas.crc2.beginPath();
            a08_Canvas.crc2.moveTo(_x + 1, _y - 5);
            a08_Canvas.crc2.arcTo(_x + 1, _y - 5, _x + 7, _y - 8, 20);
            a08_Canvas.crc2.closePath();
            a08_Canvas.crc2.fill();
            a08_Canvas.crc2.stroke();
            a08_Canvas.crc2.beginPath();
            a08_Canvas.crc2.moveTo(_x - 1, _y - 5);
            a08_Canvas.crc2.strokeStyle = "#8A06513";
            a08_Canvas.crc2.fillStyle = "#8A0651";
            a08_Canvas.crc2.lineTo(_x - 7, _y - 8);
            a08_Canvas.crc2.lineTo(_x - 1, _y);
            a08_Canvas.crc2.closePath();
            a08_Canvas.crc2.fill();
            a08_Canvas.crc2.stroke();
            a08_Canvas.crc2.beginPath();
            a08_Canvas.crc2.moveTo(_x - 1, _y - 5);
            a08_Canvas.crc2.arcTo(_x - 1, _y - 5, _x - 7, _y - 8, 20);
            a08_Canvas.crc2.closePath();
            a08_Canvas.crc2.fill();
            a08_Canvas.crc2.stroke();
        }
    }
    a08_Canvas.Tulpe = Tulpe;
})(a08_Canvas || (a08_Canvas = {}));
//# sourceMappingURL=tulpe.js.map