var a07_Canvas;
(function (a07_Canvas) {
    class Hintergrund {
        constructor(_x, _y) {
            console.log("Hey, I'm Bob!");
            this.x = _x;
            this.y = _y;
        }
        drawBienenkorb(_x, _y) {
            a07_Canvas.crc2.beginPath();
            a07_Canvas.crc2.moveTo(_x, _y);
            a07_Canvas.crc2.fillStyle = "#DD9A43";
            a07_Canvas.crc2.fillRect(_x - 13.5, _y + 2 + 10, 20, -17);
            a07_Canvas.crc2.fill();
            a07_Canvas.crc2.closePath();
            a07_Canvas.crc2.beginPath();
            a07_Canvas.crc2.moveTo(_x, _y - 5);
            a07_Canvas.crc2.fillStyle = "#DD9A43";
            a07_Canvas.crc2.arc(_x - 5, _y - 5, 10, 0, Math.PI, true);
            a07_Canvas.crc2.moveTo(_x - 5.7, _y + 1);
            a07_Canvas.crc2.closePath();
            a07_Canvas.crc2.fill();
            a07_Canvas.crc2.beginPath();
            a07_Canvas.crc2.moveTo(_x + 16, _y - 3);
            a07_Canvas.crc2.arc(_x - 15, _y - 3, 4, 0, (Math.PI) * 2, false);
            a07_Canvas.crc2.moveTo(_x + 16, _y - 3);
            a07_Canvas.crc2.arc(_x - 15, _y + 2, 4, 0, (Math.PI) * 2, false);
            a07_Canvas.crc2.moveTo(_x + 16, _y - 3);
            a07_Canvas.crc2.arc(_x - 15, _y + 8, 4, 0, (Math.PI) * 2, false);
            a07_Canvas.crc2.moveTo(_x + 16, _y - 3);
            a07_Canvas.crc2.arc(_x + 5, _y - 3, 4, 0, (Math.PI) * 2, false);
            a07_Canvas.crc2.moveTo(_x + 16, _y - 3);
            a07_Canvas.crc2.arc(_x + 5, _y + 2, 4, 0, (Math.PI) * 2, false);
            a07_Canvas.crc2.moveTo(_x + 16, _y - 3);
            a07_Canvas.crc2.arc(_x + 5, _y + 8, 4, 0, (Math.PI) * 2, false);
            a07_Canvas.crc2.fillStyle = "#DD9A43";
            a07_Canvas.crc2.fill();
            a07_Canvas.crc2.closePath();
            a07_Canvas.crc2.beginPath();
            a07_Canvas.crc2.moveTo(_x - 10, _y + 4);
            a07_Canvas.crc2.fillStyle = "#2C190A";
            a07_Canvas.crc2.arc(_x - 10, _y + 4, 3, 0, Math.PI * 2, true);
            a07_Canvas.crc2.closePath();
            a07_Canvas.crc2.fill();
        }
        drawvogel(_x, _y) {
            a07_Canvas.crc2.beginPath();
            a07_Canvas.crc2.moveTo(_x, _y);
            a07_Canvas.crc2.strokeStyle = "#000000";
            a07_Canvas.crc2.fillStyle = "#000000";
            a07_Canvas.crc2.arcTo(_x + 5, _y - 20, _x + 8, _y - 20, 20);
            a07_Canvas.crc2.arcTo(_x + 8, _y - 25, _x, _y, 20);
            a07_Canvas.crc2.arcTo(_x - 5, _y - 20, _x - 8, _y - 20, 20);
            a07_Canvas.crc2.arcTo(_x - 8, _y - 25, _x, _y, 15);
            a07_Canvas.crc2.closePath();
            a07_Canvas.crc2.fill();
            a07_Canvas.crc2.stroke();
        }
        drawwolke(_x, _y) {
            a07_Canvas.crc2.beginPath();
            a07_Canvas.crc2.moveTo(_x, _y);
            a07_Canvas.crc2.strokeStyle = "#ffffff";
            a07_Canvas.crc2.fillStyle = "#ffffff";
            a07_Canvas.crc2.arc(_x - 4, _y, 15, 0, Math.PI * 2, true);
            a07_Canvas.crc2.arc(_x - 10, _y - 12, 15, 0, Math.PI * 2, true);
            a07_Canvas.crc2.arc(_x + 2, _y - 22, 15, 0, Math.PI * 2, true);
            a07_Canvas.crc2.arc(_x + 20, _y - 17, 15, 0, Math.PI * 2, true);
            a07_Canvas.crc2.arc(_x + 20, _y - 17, 14, 0, Math.PI * 2, true);
            a07_Canvas.crc2.arc(_x + 28, _y - 8, 15, 0, Math.PI * 2, true);
            a07_Canvas.crc2.arc(_x + 28, _y - 8, 14, 0, Math.PI * 2, true);
            a07_Canvas.crc2.arc(_x + 18, _y, 15, 0, Math.PI * 2, true);
            a07_Canvas.crc2.arc(_x + 18, _y, 14, 0, Math.PI * 2, true);
            a07_Canvas.crc2.closePath();
            a07_Canvas.crc2.fill();
            a07_Canvas.crc2.stroke();
        }
        drawbaum(_x, _y) {
            //        Stamm
            a07_Canvas.crc2.beginPath();
            a07_Canvas.crc2.moveTo(_x, _y);
            a07_Canvas.crc2.strokeStyle = "#2C190A";
            a07_Canvas.crc2.fillStyle = "#2C190A";
            a07_Canvas.crc2.lineTo(_x, _y + 70);
            a07_Canvas.crc2.lineTo(_x + 20, _y + 70);
            a07_Canvas.crc2.lineTo(_x + 20, _y);
            a07_Canvas.crc2.closePath();
            a07_Canvas.crc2.fill();
            a07_Canvas.crc2.stroke();
            //        Krone
            a07_Canvas.crc2.beginPath();
            a07_Canvas.crc2.moveTo(_x, _y);
            a07_Canvas.crc2.strokeStyle = "#013713";
            a07_Canvas.crc2.fillStyle = "#013713";
            a07_Canvas.crc2.arc(_x - 4, _y, 20, 0, Math.PI * 2, true);
            a07_Canvas.crc2.arc(_x - 11, _y - 16, 18, 0, Math.PI * 2, true);
            a07_Canvas.crc2.arc(_x - 2, _y - 32, 18, 0, Math.PI * 2, true);
            a07_Canvas.crc2.arc(_x + 13, _y - 34, 18, 0, Math.PI * 2, true);
            a07_Canvas.crc2.arc(_x + 25, _y - 25, 18, 0, Math.PI * 2, true);
            a07_Canvas.crc2.arc(_x + 25, _y - 25, 16, 0, Math.PI * 2, true);
            a07_Canvas.crc2.arc(_x + 26, _y - 11, 19, 0, Math.PI * 2, true);
            a07_Canvas.crc2.arc(_x + 26, _y - 11, 20, 0, Math.PI * 2, true);
            a07_Canvas.crc2.arc(_x + 21, _y, 20, 0, Math.PI * 2, true);
            a07_Canvas.crc2.closePath();
            a07_Canvas.crc2.fill();
            a07_Canvas.crc2.stroke();
        }
        drawhaus(_x, _y) {
            //        Geb�ude
            a07_Canvas.crc2.beginPath();
            a07_Canvas.crc2.moveTo(_x, _y);
            a07_Canvas.crc2.strokeStyle = "#D8C8AE";
            a07_Canvas.crc2.fillStyle = "#D8C8AE";
            a07_Canvas.crc2.lineTo(_x, _y - 50);
            a07_Canvas.crc2.lineTo(_x + 40, _y - 50);
            a07_Canvas.crc2.lineTo(_x + 40, _y);
            a07_Canvas.crc2.fill();
            a07_Canvas.crc2.stroke();
            //        Kamin
            a07_Canvas.crc2.beginPath();
            a07_Canvas.crc2.moveTo(_x + 30, _y - 60);
            a07_Canvas.crc2.strokeStyle = "#3F130A";
            a07_Canvas.crc2.fillStyle = "#3F130A";
            a07_Canvas.crc2.lineTo(_x + 30, _y - 70);
            a07_Canvas.crc2.lineTo(_x + 35, _y - 70);
            a07_Canvas.crc2.lineTo(_x + 35, _y - 60);
            a07_Canvas.crc2.closePath();
            a07_Canvas.crc2.fill();
            a07_Canvas.crc2.stroke();
            //        Dach
            a07_Canvas.crc2.beginPath();
            a07_Canvas.crc2.moveTo(_x, _y - 50);
            a07_Canvas.crc2.strokeStyle = "#ff0000";
            a07_Canvas.crc2.fillStyle = "#ff0000";
            a07_Canvas.crc2.lineTo(_x + 20, _y - 85);
            a07_Canvas.crc2.lineTo(_x + 40, _y - 50);
            a07_Canvas.crc2.lineTo(_x, _y - 50);
            a07_Canvas.crc2.closePath();
            a07_Canvas.crc2.fill();
            a07_Canvas.crc2.stroke();
            //        T�r
            a07_Canvas.crc2.beginPath();
            a07_Canvas.crc2.moveTo(_x + 5, _y);
            a07_Canvas.crc2.strokeStyle = "#3F130A";
            a07_Canvas.crc2.fillStyle = "#3F130A";
            a07_Canvas.crc2.lineTo(_x + 5, _y - 20);
            a07_Canvas.crc2.lineTo(_x + 15, _y - 20);
            a07_Canvas.crc2.lineTo(_x + 15, _y);
            a07_Canvas.crc2.closePath();
            a07_Canvas.crc2.fill();
            a07_Canvas.crc2.stroke();
            //        Fenster
            a07_Canvas.crc2.beginPath();
            a07_Canvas.crc2.moveTo(_x + 25, _y - 30);
            a07_Canvas.crc2.strokeStyle = "#3F130A";
            a07_Canvas.crc2.fillStyle = "#3F130A";
            a07_Canvas.crc2.lineTo(_x + 25, _y - 40);
            a07_Canvas.crc2.lineTo(_x + 35, _y - 40);
            a07_Canvas.crc2.lineTo(_x + 35, _y - 30);
            a07_Canvas.crc2.closePath();
            a07_Canvas.crc2.fill();
            a07_Canvas.crc2.stroke();
        }
        drawberg1(_x, _y) {
            a07_Canvas.crc2.beginPath();
            a07_Canvas.crc2.moveTo(_x, _y);
            a07_Canvas.crc2.strokeStyle = "#666666";
            a07_Canvas.crc2.fillStyle = "#666666";
            a07_Canvas.crc2.lineTo(_x + 30, _y - 60);
            a07_Canvas.crc2.lineTo(_x + 60, _y - 0);
            //        crc2.arcTo(_x + 5 , _y - 25,  _x + 10, _y - 25, 20);
            //        crc2.lineTo(_x + 22, _y - 20 );
            //        crc2.strokeStyle = "#ff0000";
            //        crc2.arcTo(_x + 22 , _y - 20,  _x + 5, _y, 20);
            a07_Canvas.crc2.closePath();
            a07_Canvas.crc2.fill();
            a07_Canvas.crc2.stroke();
        }
        drawberg2(_x, _y) {
            a07_Canvas.crc2.beginPath();
            a07_Canvas.crc2.moveTo(_x, _y);
            a07_Canvas.crc2.strokeStyle = "#666666";
            a07_Canvas.crc2.fillStyle = "#666666";
            a07_Canvas.crc2.lineTo(_x + 25, _y - 50);
            a07_Canvas.crc2.lineTo(_x + 50, _y - 0);
            a07_Canvas.crc2.closePath();
            a07_Canvas.crc2.fill();
            a07_Canvas.crc2.stroke();
        }
        drawsonne(_x, _y) {
            a07_Canvas.crc2.beginPath();
            a07_Canvas.crc2.strokeStyle = "#FFFF00";
            a07_Canvas.crc2.fillStyle = "#FFFF00";
            a07_Canvas.crc2.arc(_x, _y, 15, 0, Math.PI * 2, true); // Kreis
            //        Sonnenstrahlen
            a07_Canvas.crc2.moveTo(_x, _y);
            a07_Canvas.crc2.moveTo(_x - 22, _y);
            a07_Canvas.crc2.lineTo(_x - 40, _y + 3);
            a07_Canvas.crc2.moveTo(_x, _y);
            a07_Canvas.crc2.moveTo(_x - 19, _y - 10);
            a07_Canvas.crc2.lineTo(_x - 35, _y - 18);
            a07_Canvas.crc2.moveTo(_x - 10, _y - 18);
            a07_Canvas.crc2.lineTo(_x - 30, _y - 50);
            a07_Canvas.crc2.moveTo(_x + 2, _y - 20);
            a07_Canvas.crc2.lineTo(_x - 22, _y - 410);
            a07_Canvas.crc2.moveTo(_x + 15, _y - 15);
            a07_Canvas.crc2.lineTo(_x + 48, _y - 50);
            a07_Canvas.crc2.moveTo(_x + 20, _y - 6);
            a07_Canvas.crc2.lineTo(_x + 40, _y - 10);
            a07_Canvas.crc2.moveTo(_x + 22, _y + 4);
            a07_Canvas.crc2.lineTo(_x + 40, _y + 6);
            a07_Canvas.crc2.moveTo(_x + 18, _y + 14);
            a07_Canvas.crc2.lineTo(_x + 35, _y + 25);
            a07_Canvas.crc2.moveTo(_x + 8, _y + 20);
            a07_Canvas.crc2.lineTo(_x + 15, _y + 38);
            a07_Canvas.crc2.moveTo(_x - 4, _y + 20);
            a07_Canvas.crc2.lineTo(_x - 7, _y + 38);
            a07_Canvas.crc2.moveTo(_x - 15, _y + 15);
            a07_Canvas.crc2.lineTo(_x - 30, _y + 25);
            a07_Canvas.crc2.closePath();
            a07_Canvas.crc2.fill();
            a07_Canvas.crc2.stroke();
        }
    }
    a07_Canvas.Hintergrund = Hintergrund;
})(a07_Canvas || (a07_Canvas = {}));
//# sourceMappingURL=hintergrund.js.map