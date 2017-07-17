var a_Canvas;
(function (a_Canvas) {
    class Hintergrund2 {
        constructor(_x, _y) {
            console.log("Hey, I'm Bob!");
            this.x = _x;
            this.y = _y;
        }
        drawRaube(_x, _y) {
            a_Canvas.crc2.beginPath();
            a_Canvas.crc2.moveTo(_x, _y);
            a_Canvas.crc2.strokeStyle = "green";
            a_Canvas.crc2.fillStyle = "green";
            a_Canvas.crc2.arc(_x, _y, 2, 0, Math.PI * 2, true);
            a_Canvas.crc2.arc(_x + 4, _y - 2.5, 2, 0, Math.PI * 2, true);
            a_Canvas.crc2.arc(_x + 8, _y, 2, 0, Math.PI * 2, true);
            a_Canvas.crc2.arc(_x + 10, _y - 2.5, 2, 0, Math.PI * 2, true);
            a_Canvas.crc2.moveTo(_x + 9, _y - 3);
            a_Canvas.crc2.lineTo(_x + 10, _y - 7);
            a_Canvas.crc2.moveTo(_x + 12, _y - 3);
            a_Canvas.crc2.lineTo(_x + 13, _y - 7);
            a_Canvas.crc2.closePath();
            a_Canvas.crc2.fill();
            a_Canvas.crc2.stroke();
        }
        drawAmeisenhaufen(_x, _y) {
            a_Canvas.crc2.beginPath();
            a_Canvas.crc2.moveTo(_x, _y);
            a_Canvas.crc2.fillStyle = "#825A40";
            a_Canvas.crc2.fillRect(_x - 13.5, _y + 2 + 10, 20, -17);
            a_Canvas.crc2.fill();
            a_Canvas.crc2.closePath();
            a_Canvas.crc2.beginPath();
            a_Canvas.crc2.moveTo(_x, _y - 5);
            a_Canvas.crc2.fillStyle = "#825A40";
            a_Canvas.crc2.arc(_x - 5, _y - 5, 25, 0, Math.PI, true);
            a_Canvas.crc2.moveTo(_x - 5.7, _y + 1);
            a_Canvas.crc2.closePath();
            a_Canvas.crc2.fill();
            a_Canvas.crc2.beginPath();
            a_Canvas.crc2.moveTo(_x + 16, _y - 3);
            a_Canvas.crc2.arc(_x - 18, _y - 3, 15, 0, (Math.PI) * 2, false);
            a_Canvas.crc2.moveTo(_x + 16, _y - 3);
            a_Canvas.crc2.arc(_x - 19, _y, 15, 0, (Math.PI) * 2, false);
            a_Canvas.crc2.moveTo(_x + 16, _y);
            a_Canvas.crc2.arc(_x - 23, _y + 8, 15, 0, (Math.PI) * 2, false);
            a_Canvas.crc2.moveTo(_x + 16, _y - 3);
            a_Canvas.crc2.arc(_x + 9, _y - 6, 15, 0, (Math.PI) * 2, false);
            a_Canvas.crc2.moveTo(_x + 16, _y - 3);
            a_Canvas.crc2.arc(_x + 13, _y + 5, 16, 0, (Math.PI) * 2, false);
            a_Canvas.crc2.moveTo(_x + 16, _y - 3);
            a_Canvas.crc2.arc(_x + 8, _y + 8, 15, 0, (Math.PI) * 2, false);
            a_Canvas.crc2.moveTo(_x + 16, _y - 3);
            a_Canvas.crc2.arc(_x - 1, _y + 7, 16, 0, (Math.PI) * 2, false);
            a_Canvas.crc2.arc(_x - 14, _y + 7, 16, 0, (Math.PI) * 2, false);
            a_Canvas.crc2.moveTo(_x + 16, _y - 3);
            a_Canvas.crc2.arc(_x, _y + 4, 11, 0, (Math.PI) * 2, false);
            a_Canvas.crc2.moveTo(_x + 16, _y - 3);
            a_Canvas.crc2.arc(_x - 15, _y + 4, 10, 0, (Math.PI) * 2, false);
            a_Canvas.crc2.moveTo(_x + 16, _y - 3);
            a_Canvas.crc2.arc(_x + 6, _y + 4, 10, 0, (Math.PI) * 2, false);
            a_Canvas.crc2.fillStyle = "#825A403";
            a_Canvas.crc2.fill();
            a_Canvas.crc2.closePath();
        }
        drawDecke(_x, _y) {
            a_Canvas.crc2.beginPath();
            a_Canvas.crc2.moveTo(_x, _y);
            a_Canvas.crc2.strokeStyle = "#F8ADFB";
            a_Canvas.crc2.fillStyle = "#F8ADFB";
            a_Canvas.crc2.lineTo(_x - 20, _y + 140);
            a_Canvas.crc2.lineTo(_x + 150, _y + 140);
            a_Canvas.crc2.lineTo(_x + 160, _y);
            a_Canvas.crc2.closePath();
            a_Canvas.crc2.fill();
            a_Canvas.crc2.stroke();
        }
        drawKuchen(_x, _y) {
            a_Canvas.crc2.beginPath();
            a_Canvas.crc2.moveTo(_x, _y - 10 / 2);
            a_Canvas.crc2.bezierCurveTo(_x + 10, _y - 10 / 2, _x + 10 / 2, _y + 10 / 2, _x, _y + 10 / 2);
            a_Canvas.crc2.bezierCurveTo(_x - 10, _y + 10 / 2, _x - 10 / 2, _y - 10 / 2, _x, _y - 10 / 2);
            a_Canvas.crc2.fillStyle = "#362217";
            a_Canvas.crc2.fill();
            a_Canvas.crc2.closePath();
        }
        drawKorb(_x, _y) {
            a_Canvas.crc2.beginPath();
            a_Canvas.crc2.moveTo(_x, _y);
            a_Canvas.crc2.strokeStyle = "#B19158";
            a_Canvas.crc2.fillStyle = "#B19158";
            a_Canvas.crc2.lineTo(_x, _y - 23);
            a_Canvas.crc2.lineTo(_x + 45, _y - 23);
            a_Canvas.crc2.lineTo(_x + 45, _y);
            a_Canvas.crc2.closePath();
            a_Canvas.crc2.fill();
            a_Canvas.crc2.stroke();
            a_Canvas.crc2.beginPath();
            a_Canvas.crc2.moveTo(_x + 22, _y - 22);
            a_Canvas.crc2.strokeStyle = "#B19158";
            a_Canvas.crc2.fillStyle = "#B19158";
            a_Canvas.crc2.arc(_x + 22, _y - 22, 12, 0, Math.PI, true);
            a_Canvas.crc2.closePath();
            a_Canvas.crc2.fill();
            a_Canvas.crc2.stroke();
            a_Canvas.crc2.beginPath();
            a_Canvas.crc2.moveTo(_x + 22, _y - 22);
            a_Canvas.crc2.strokeStyle = "#F8ADFB";
            a_Canvas.crc2.fillStyle = "#F8ADFB";
            a_Canvas.crc2.arc(_x + 22, _y - 22, 8, 0, Math.PI, true);
            a_Canvas.crc2.closePath();
            a_Canvas.crc2.fill();
            a_Canvas.crc2.stroke();
            //           
        }
        blume(_x, _y) {
            //        Bl�ten
            a_Canvas.crc2.beginPath();
            a_Canvas.crc2.moveTo(_x + 0.5, _y - 15);
            a_Canvas.crc2.strokeStyle = "#F72041";
            a_Canvas.crc2.fillStyle = "#F72041";
            a_Canvas.crc2.arc(_x - 2, _y - 14, 3, 0, Math.PI * 2, true);
            a_Canvas.crc2.arc(_x - 4, _y - 17, 3, 0, Math.PI * 2, true);
            a_Canvas.crc2.arc(_x - 3, _y - 20, 3, 0, Math.PI * 2, true);
            a_Canvas.crc2.arc(_x + 1.5, _y - 20, 3, 0, Math.PI * 2, true);
            a_Canvas.crc2.arc(_x + 3, _y - 17, 3, 0, Math.PI * 2, true);
            a_Canvas.crc2.arc(_x + 3, _y - 17, 2, 0, Math.PI * 2, true);
            a_Canvas.crc2.arc(_x + 2, _y - 14, 3, 0, Math.PI * 2, true);
            a_Canvas.crc2.closePath();
            a_Canvas.crc2.fill();
            a_Canvas.crc2.stroke();
            a_Canvas.crc2.beginPath();
            a_Canvas.crc2.moveTo(_x - 0.3, _y - 17);
            a_Canvas.crc2.strokeStyle = "#E0813D";
            a_Canvas.crc2.fillStyle = "#E0813D";
            a_Canvas.crc2.arc(_x - 0.3, _y - 17, 2, 0, Math.PI * 2, true);
            a_Canvas.crc2.closePath();
            a_Canvas.crc2.fill();
            a_Canvas.crc2.stroke();
        }
        drawTeller(_x, _y) {
            a_Canvas.crc2.beginPath();
            a_Canvas.crc2.moveTo(_x, _y - 20 / 2);
            a_Canvas.crc2.bezierCurveTo(_x + 20, _y - 20 / 2, _x + 20 / 2, _y + 20 / 2, _x, _y + 20 / 2);
            a_Canvas.crc2.bezierCurveTo(_x - 20, _y + 20 / 2, _x - 20 / 2, _y - 20 / 2, _x, _y - 20 / 2);
            a_Canvas.crc2.fillStyle = "#94959A";
            a_Canvas.crc2.fill();
            a_Canvas.crc2.closePath();
        }
        drawvogel(_x, _y) {
            a_Canvas.crc2.beginPath();
            a_Canvas.crc2.moveTo(_x, _y);
            a_Canvas.crc2.strokeStyle = "#000000";
            a_Canvas.crc2.fillStyle = "#000000";
            a_Canvas.crc2.arcTo(_x + 5, _y - 20, _x + 8, _y - 20, 20);
            a_Canvas.crc2.arcTo(_x + 8, _y - 25, _x, _y, 20);
            a_Canvas.crc2.arcTo(_x - 5, _y - 20, _x - 8, _y - 20, 20);
            a_Canvas.crc2.arcTo(_x - 8, _y - 25, _x, _y, 15);
            a_Canvas.crc2.closePath();
            a_Canvas.crc2.fill();
            a_Canvas.crc2.stroke();
        }
        drawwolke(_x, _y) {
            a_Canvas.crc2.beginPath();
            a_Canvas.crc2.moveTo(_x, _y);
            a_Canvas.crc2.strokeStyle = "#ffffff";
            a_Canvas.crc2.fillStyle = "#ffffff";
            a_Canvas.crc2.arc(_x - 4, _y, 15, 0, Math.PI * 2, true);
            a_Canvas.crc2.arc(_x - 10, _y - 12, 15, 0, Math.PI * 2, true);
            a_Canvas.crc2.arc(_x + 2, _y - 22, 15, 0, Math.PI * 2, true);
            a_Canvas.crc2.arc(_x + 20, _y - 17, 15, 0, Math.PI * 2, true);
            a_Canvas.crc2.arc(_x + 20, _y - 17, 14, 0, Math.PI * 2, true);
            a_Canvas.crc2.arc(_x + 28, _y - 8, 15, 0, Math.PI * 2, true);
            a_Canvas.crc2.arc(_x + 28, _y - 8, 14, 0, Math.PI * 2, true);
            a_Canvas.crc2.arc(_x + 18, _y, 15, 0, Math.PI * 2, true);
            a_Canvas.crc2.arc(_x + 18, _y, 14, 0, Math.PI * 2, true);
            a_Canvas.crc2.closePath();
            a_Canvas.crc2.fill();
            a_Canvas.crc2.stroke();
        }
        drawlake(_x, _y) {
            a_Canvas.crc2.beginPath();
            a_Canvas.crc2.moveTo(_x, _y);
            a_Canvas.crc2.strokeStyle = "#9ACEDC";
            a_Canvas.crc2.fillStyle = "#9ACEDC";
            a_Canvas.crc2.arc(_x - 4, _y, 155, 0, Math.PI * 2, true);
            a_Canvas.crc2.closePath();
            a_Canvas.crc2.fill();
            a_Canvas.crc2.stroke();
        }
        drawbusch(_x, _y) {
            a_Canvas.crc2.beginPath();
            a_Canvas.crc2.moveTo(_x, _y);
            a_Canvas.crc2.strokeStyle = "#5C7139";
            a_Canvas.crc2.fillStyle = "#5C7139";
            a_Canvas.crc2.arc(_x - 4, _y, 20, 0, Math.PI * 2, true);
            a_Canvas.crc2.arc(_x - 11, _y - 16, 18, 0, Math.PI * 2, true);
            a_Canvas.crc2.arc(_x - 2, _y - 32, 18, 0, Math.PI * 2, true);
            a_Canvas.crc2.arc(_x + 13, _y - 34, 18, 0, Math.PI * 2, true);
            a_Canvas.crc2.arc(_x + 25, _y - 25, 18, 0, Math.PI * 2, true);
            a_Canvas.crc2.arc(_x + 25, _y - 25, 16, 0, Math.PI * 2, true);
            a_Canvas.crc2.arc(_x + 26, _y - 11, 19, 0, Math.PI * 2, true);
            a_Canvas.crc2.arc(_x + 26, _y - 11, 20, 0, Math.PI * 2, true);
            a_Canvas.crc2.arc(_x + 21, _y, 20, 0, Math.PI * 2, true);
            a_Canvas.crc2.arc(_x + 10, _y, 20, 0, Math.PI * 2, true);
            a_Canvas.crc2.closePath();
            a_Canvas.crc2.fill();
            a_Canvas.crc2.stroke();
        }
        drawsonne(_x, _y) {
            a_Canvas.crc2.beginPath();
            a_Canvas.crc2.strokeStyle = "#FFFF00";
            a_Canvas.crc2.fillStyle = "#FFFF00";
            a_Canvas.crc2.arc(_x, _y, 15, 0, Math.PI * 2, true); // Kreis
            //        Sonnenstrahlen
            a_Canvas.crc2.moveTo(_x, _y);
            a_Canvas.crc2.moveTo(_x - 22, _y);
            a_Canvas.crc2.lineTo(_x - 40, _y + 3);
            a_Canvas.crc2.moveTo(_x, _y);
            a_Canvas.crc2.moveTo(_x - 19, _y - 10);
            a_Canvas.crc2.lineTo(_x - 35, _y - 18);
            a_Canvas.crc2.moveTo(_x - 10, _y - 18);
            a_Canvas.crc2.lineTo(_x - 30, _y - 50);
            a_Canvas.crc2.moveTo(_x + 2, _y - 20);
            a_Canvas.crc2.lineTo(_x - 22, _y - 410);
            a_Canvas.crc2.moveTo(_x + 15, _y - 15);
            a_Canvas.crc2.lineTo(_x + 48, _y - 50);
            a_Canvas.crc2.moveTo(_x + 20, _y - 6);
            a_Canvas.crc2.lineTo(_x + 40, _y - 10);
            a_Canvas.crc2.moveTo(_x + 22, _y + 4);
            a_Canvas.crc2.lineTo(_x + 40, _y + 6);
            a_Canvas.crc2.moveTo(_x + 18, _y + 14);
            a_Canvas.crc2.lineTo(_x + 35, _y + 25);
            a_Canvas.crc2.moveTo(_x + 8, _y + 20);
            a_Canvas.crc2.lineTo(_x + 15, _y + 38);
            a_Canvas.crc2.moveTo(_x - 4, _y + 20);
            a_Canvas.crc2.lineTo(_x - 7, _y + 38);
            a_Canvas.crc2.moveTo(_x - 15, _y + 15);
            a_Canvas.crc2.lineTo(_x - 30, _y + 25);
            a_Canvas.crc2.closePath();
            a_Canvas.crc2.fill();
            a_Canvas.crc2.stroke();
        }
        drawsBubble(_x, _y) {
            var r = _x + 310;
            var b = _y + 20;
            a_Canvas.crc2.beginPath();
            a_Canvas.crc2.strokeStyle = "#FFFFFF";
            a_Canvas.crc2.fillStyle = "#FFFFFF";
            a_Canvas.crc2.lineTo(_x + 3, _y);
            a_Canvas.crc2.lineTo(r - 5, _y);
            a_Canvas.crc2.quadraticCurveTo(r, _y, r, _y + 5);
            a_Canvas.crc2.lineTo(r, _y + 20 - 5);
            a_Canvas.crc2.quadraticCurveTo(r, b, r - 5, b);
            a_Canvas.crc2.lineTo(_x + 5, b);
            a_Canvas.crc2.quadraticCurveTo(_x, b, _x, b - 5);
            a_Canvas.crc2.lineTo(_x, _y + 5);
            a_Canvas.crc2.quadraticCurveTo(_x, _y, _x + 5, _y);
            //            crc2.fillText("Was passiet, wenn man auf den Ameisenhaufen, die Fische oder auf die Vögel klickt?",10,50);
            a_Canvas.crc2.fill();
            a_Canvas.crc2.stroke();
            a_Canvas.crc2.closePath();
            a_Canvas.crc2.beginPath();
            a_Canvas.crc2.strokeStyle = "#FFFFFF";
            a_Canvas.crc2.fillStyle = "#FFFFFF";
            a_Canvas.crc2.moveTo(_x + 10, _y);
            a_Canvas.crc2.lineTo(_x + 7, _y + 28);
            a_Canvas.crc2.lineTo(_x + 28, _y);
            a_Canvas.crc2.lineTo(_x + 10, _y);
            a_Canvas.crc2.fill();
            a_Canvas.crc2.stroke();
            a_Canvas.crc2.closePath();
            a_Canvas.crc2.beginPath();
            a_Canvas.crc2.strokeStyle = "#000000";
            a_Canvas.crc2.fillStyle = "#000000";
            //             crc2.moveTo(_x + 100, _y + 40);
            a_Canvas.crc2.textAlign = "start";
            //            crc2.measureText("Was passiet, wenn man auf den Ameisenhaufen, die Fische oder auf die Vögel klickt?");
            a_Canvas.crc2.fillText("Klick mal auf den Ameisenhaufen, die Fische oder auf die Vögel!", 190, 182);
            a_Canvas.crc2.fill();
            a_Canvas.crc2.stroke();
            a_Canvas.crc2.closePath();
        }
    }
    a_Canvas.Hintergrund2 = Hintergrund2;
})(a_Canvas || (a_Canvas = {}));
//# sourceMappingURL=hintergrund.js.map