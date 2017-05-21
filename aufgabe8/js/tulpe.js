var a08_Canvas;
(function (a08_Canvas) {
    class Tulpe extends a08_Canvas.Blumen {
        constructor(_x, _y, _flowerType) {
            super(_x, _y, _flowerType);
        }
        draw() {
            //        Stiel 
            a08_Canvas.crc2.beginPath();
            a08_Canvas.crc2.moveTo(this.x - 0.5, this.y - 5);
            a08_Canvas.crc2.strokeStyle = "#013713";
            a08_Canvas.crc2.fillStyle = "#0137#13";
            a08_Canvas.crc2.lineTo(this.x + 0.5, this.y - 5);
            a08_Canvas.crc2.lineTo(this.x + 0.5, this.y + 10);
            a08_Canvas.crc2.lineTo(this.x - 0.5, this.y + 10);
            a08_Canvas.crc2.closePath();
            a08_Canvas.crc2.fill();
            a08_Canvas.crc2.stroke();
            // Blatt
            a08_Canvas.crc2.beginPath();
            a08_Canvas.crc2.moveTo(this.x - 2, this.y - 5);
            a08_Canvas.crc2.strokeStyle = "#D4A5D3";
            a08_Canvas.crc2.fillStyle = "#D4A5D3";
            a08_Canvas.crc2.lineTo(this.x - 2, this.y - 9);
            a08_Canvas.crc2.lineTo(this.x, this.y - 6);
            a08_Canvas.crc2.lineTo(this.x + 2, this.y - 9);
            a08_Canvas.crc2.lineTo(this.x + 2, this.y - 5);
            a08_Canvas.crc2.closePath();
            a08_Canvas.crc2.fill();
            a08_Canvas.crc2.stroke();
            a08_Canvas.crc2.beginPath();
            a08_Canvas.crc2.moveTo(this.x - 0.5, this.y - 5);
            a08_Canvas.crc2.strokeStyle = "#8A0651";
            a08_Canvas.crc2.fillStyle = "#8A0651";
            a08_Canvas.crc2.lineTo(this.x + 0.5, this.y - 5);
            a08_Canvas.crc2.lineTo(this.x + 0.5, this.y + 1);
            a08_Canvas.crc2.lineTo(this.x - 0.5, this.y + 1);
            a08_Canvas.crc2.closePath();
            a08_Canvas.crc2.fill();
            a08_Canvas.crc2.stroke();
            a08_Canvas.crc2.beginPath();
            a08_Canvas.crc2.moveTo(this.x + 1, this.y - 5);
            a08_Canvas.crc2.strokeStyle = "#8A0651";
            a08_Canvas.crc2.fillStyle = "#8A0651";
            a08_Canvas.crc2.lineTo(this.x + 7, this.y - 8);
            a08_Canvas.crc2.lineTo(this.x + 1, this.y);
            a08_Canvas.crc2.closePath();
            a08_Canvas.crc2.fill();
            a08_Canvas.crc2.stroke();
            a08_Canvas.crc2.beginPath();
            a08_Canvas.crc2.moveTo(this.x + 1, this.y - 5);
            a08_Canvas.crc2.arcTo(this.x + 1, this.y - 5, this.x + 7, this.y - 8, 20);
            a08_Canvas.crc2.closePath();
            a08_Canvas.crc2.fill();
            a08_Canvas.crc2.stroke();
            a08_Canvas.crc2.beginPath();
            a08_Canvas.crc2.moveTo(this.x - 1, this.y - 5);
            a08_Canvas.crc2.strokeStyle = "#8A06513";
            a08_Canvas.crc2.fillStyle = "#8A0651";
            a08_Canvas.crc2.lineTo(this.x - 7, this.y - 8);
            a08_Canvas.crc2.lineTo(this.x - 1, this.y);
            a08_Canvas.crc2.closePath();
            a08_Canvas.crc2.fill();
            a08_Canvas.crc2.stroke();
            a08_Canvas.crc2.beginPath();
            a08_Canvas.crc2.moveTo(this.x - 1, this.y - 5);
            a08_Canvas.crc2.arcTo(this.x - 1, this.y - 5, this.x - 7, this.y - 8, 20);
            a08_Canvas.crc2.closePath();
            a08_Canvas.crc2.fill();
            a08_Canvas.crc2.stroke();
        }
    }
    a08_Canvas.Tulpe = Tulpe;
})(a08_Canvas || (a08_Canvas = {}));
//# sourceMappingURL=tulpe.js.map