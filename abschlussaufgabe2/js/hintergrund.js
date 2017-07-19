var a2_Canvas;
(function (a2_Canvas) {
    class Hintergrund2 {
        constructor(_x, _y) {
            console.log("Hey, I'm Bob!");
            this.x = _x;
            this.y = _y;
        }
        drawRaube(_x, _y) {
            a2_Canvas.crc2.beginPath();
            a2_Canvas.crc2.moveTo(_x, _y);
            a2_Canvas.crc2.strokeStyle = "green";
            a2_Canvas.crc2.fillStyle = "green";
            a2_Canvas.crc2.arc(_x, _y, 2, 0, Math.PI * 2, true);
            a2_Canvas.crc2.arc(_x + 4, _y - 2.5, 2, 0, Math.PI * 2, true);
            a2_Canvas.crc2.arc(_x + 8, _y, 2, 0, Math.PI * 2, true);
            a2_Canvas.crc2.arc(_x + 10, _y - 2.5, 2, 0, Math.PI * 2, true);
            a2_Canvas.crc2.moveTo(_x + 9, _y - 3);
            a2_Canvas.crc2.lineTo(_x + 10, _y - 7);
            a2_Canvas.crc2.moveTo(_x + 12, _y - 3);
            a2_Canvas.crc2.lineTo(_x + 13, _y - 7);
            a2_Canvas.crc2.closePath();
            a2_Canvas.crc2.fill();
            a2_Canvas.crc2.stroke();
        }
        drawAmeisenhaufen(_x, _y) {
            a2_Canvas.crc2.beginPath();
            a2_Canvas.crc2.moveTo(_x, _y);
            a2_Canvas.crc2.fillStyle = "#825A40";
            a2_Canvas.crc2.fillRect(_x - 13.5, _y + 2 + 10, 20, -17);
            a2_Canvas.crc2.fill();
            a2_Canvas.crc2.closePath();
            a2_Canvas.crc2.beginPath();
            a2_Canvas.crc2.moveTo(_x, _y - 5);
            a2_Canvas.crc2.fillStyle = "#825A40";
            a2_Canvas.crc2.arc(_x - 5, _y - 5, 25, 0, Math.PI, true);
            a2_Canvas.crc2.moveTo(_x - 5.7, _y + 1);
            a2_Canvas.crc2.closePath();
            a2_Canvas.crc2.fill();
            a2_Canvas.crc2.beginPath();
            a2_Canvas.crc2.moveTo(_x + 16, _y - 3);
            a2_Canvas.crc2.arc(_x - 18, _y - 3, 15, 0, (Math.PI) * 2, false);
            a2_Canvas.crc2.moveTo(_x + 16, _y - 3);
            a2_Canvas.crc2.arc(_x - 19, _y, 15, 0, (Math.PI) * 2, false);
            a2_Canvas.crc2.moveTo(_x + 16, _y);
            a2_Canvas.crc2.arc(_x - 23, _y + 8, 15, 0, (Math.PI) * 2, false);
            a2_Canvas.crc2.moveTo(_x + 16, _y - 3);
            a2_Canvas.crc2.arc(_x + 9, _y - 6, 15, 0, (Math.PI) * 2, false);
            a2_Canvas.crc2.moveTo(_x + 16, _y - 3);
            a2_Canvas.crc2.arc(_x + 13, _y + 5, 16, 0, (Math.PI) * 2, false);
            a2_Canvas.crc2.moveTo(_x + 16, _y - 3);
            a2_Canvas.crc2.arc(_x + 8, _y + 8, 15, 0, (Math.PI) * 2, false);
            a2_Canvas.crc2.moveTo(_x + 16, _y - 3);
            a2_Canvas.crc2.arc(_x - 1, _y + 7, 16, 0, (Math.PI) * 2, false);
            a2_Canvas.crc2.arc(_x - 14, _y + 7, 16, 0, (Math.PI) * 2, false);
            a2_Canvas.crc2.moveTo(_x + 16, _y - 3);
            a2_Canvas.crc2.arc(_x, _y + 4, 11, 0, (Math.PI) * 2, false);
            a2_Canvas.crc2.moveTo(_x + 16, _y - 3);
            a2_Canvas.crc2.arc(_x - 15, _y + 4, 10, 0, (Math.PI) * 2, false);
            a2_Canvas.crc2.moveTo(_x + 16, _y - 3);
            a2_Canvas.crc2.arc(_x + 6, _y + 4, 10, 0, (Math.PI) * 2, false);
            a2_Canvas.crc2.fillStyle = "#825A403";
            a2_Canvas.crc2.fill();
            a2_Canvas.crc2.closePath();
            //              crc2.beginPath();
            //            crc2.moveTo(_x, _y);
            //            crc2.fillStyle = "red";
            //           crc2.arc(_x , _y , 30, 0, Math.PI * 2, true);
            //    crc2.fillStyle = "red";
            //            crc2.fill();
            //            crc2.closePath();
        }
        drawDecke(_x, _y) {
            a2_Canvas.crc2.beginPath();
            a2_Canvas.crc2.moveTo(_x - 3.5, _y + 10);
            a2_Canvas.crc2.strokeStyle = "#F8ADFB";
            a2_Canvas.crc2.fillStyle = "#F8ADFB";
            a2_Canvas.crc2.lineTo(_x - 20, _y + 140);
            a2_Canvas.crc2.lineTo(_x + 150, _y + 140);
            a2_Canvas.crc2.lineTo(_x + 170, _y + 10);
            a2_Canvas.crc2.closePath();
            a2_Canvas.crc2.fill();
            a2_Canvas.crc2.stroke();
            //            Streifen
            a2_Canvas.crc2.beginPath();
            a2_Canvas.crc2.moveTo(_x + 10, _y + 10);
            a2_Canvas.crc2.strokeStyle = "#E79DC6";
            a2_Canvas.crc2.fillStyle = "#E79DC6";
            a2_Canvas.crc2.lineTo(_x - 10, _y + 140);
            a2_Canvas.crc2.lineTo(_x, _y + 140);
            a2_Canvas.crc2.lineTo(_x + 20, _y + 10);
            a2_Canvas.crc2.moveTo(_x + 30, _y + 10);
            a2_Canvas.crc2.lineTo(_x + 10, _y + 140);
            a2_Canvas.crc2.lineTo(_x + 20, _y + 140);
            a2_Canvas.crc2.lineTo(_x + 40, _y + 10);
            a2_Canvas.crc2.moveTo(_x + 50, _y + 10);
            a2_Canvas.crc2.lineTo(_x + 30, _y + 140);
            a2_Canvas.crc2.lineTo(_x + 40, _y + 140);
            a2_Canvas.crc2.lineTo(_x + 60, _y + 10);
            a2_Canvas.crc2.moveTo(_x + 70, _y + 10);
            a2_Canvas.crc2.lineTo(_x + 50, _y + 140);
            a2_Canvas.crc2.lineTo(_x + 60, _y + 140);
            a2_Canvas.crc2.lineTo(_x + 80, _y + 10);
            a2_Canvas.crc2.moveTo(_x + 90, _y + 10);
            a2_Canvas.crc2.lineTo(_x + 70, _y + 140);
            a2_Canvas.crc2.lineTo(_x + 80, _y + 140);
            a2_Canvas.crc2.lineTo(_x + 100, _y + 10);
            a2_Canvas.crc2.moveTo(_x + 110, _y + 10);
            a2_Canvas.crc2.lineTo(_x + 90, _y + 140);
            a2_Canvas.crc2.lineTo(_x + 100, _y + 140);
            a2_Canvas.crc2.lineTo(_x + 120, _y + 10);
            a2_Canvas.crc2.moveTo(_x + 130, _y + 10);
            a2_Canvas.crc2.lineTo(_x + 110, _y + 140);
            a2_Canvas.crc2.lineTo(_x + 120, _y + 140);
            a2_Canvas.crc2.lineTo(_x + 140, _y + 10);
            a2_Canvas.crc2.moveTo(_x + 150, _y + 10);
            a2_Canvas.crc2.lineTo(_x + 130, _y + 140);
            a2_Canvas.crc2.lineTo(_x + 140, _y + 140);
            a2_Canvas.crc2.lineTo(_x + 160, _y + 10);
            a2_Canvas.crc2.moveTo(_x - 19.5, _y + 130);
            a2_Canvas.crc2.lineTo(_x + 151.5, _y + 130);
            a2_Canvas.crc2.lineTo(_x + 153, _y + 120);
            a2_Canvas.crc2.lineTo(_x - 18, _y + 120);
            a2_Canvas.crc2.moveTo(_x - 17, _y + 110);
            a2_Canvas.crc2.lineTo(_x + 155, _y + 110);
            a2_Canvas.crc2.lineTo(_x + 156.5, _y + 100);
            a2_Canvas.crc2.lineTo(_x - 15.5, _y + 100);
            a2_Canvas.crc2.moveTo(_x - 14, _y + 90);
            a2_Canvas.crc2.lineTo(_x + 158, _y + 90);
            a2_Canvas.crc2.lineTo(_x + 159.5, _y + 80);
            a2_Canvas.crc2.lineTo(_x - 12.5, _y + 80);
            a2_Canvas.crc2.moveTo(_x - 12, _y + 70);
            a2_Canvas.crc2.lineTo(_x + 161, _y + 70);
            a2_Canvas.crc2.lineTo(_x + 162.5, _y + 60);
            a2_Canvas.crc2.lineTo(_x - 10.5, _y + 60);
            a2_Canvas.crc2.moveTo(_x - 9, _y + 50);
            a2_Canvas.crc2.lineTo(_x + 164, _y + 50);
            a2_Canvas.crc2.lineTo(_x + 165.5, _y + 40);
            a2_Canvas.crc2.lineTo(_x - 7.5, _y + 40);
            a2_Canvas.crc2.moveTo(_x - 6, _y + 30);
            a2_Canvas.crc2.lineTo(_x + 167, _y + 30);
            a2_Canvas.crc2.lineTo(_x + 168.5, _y + 20);
            a2_Canvas.crc2.lineTo(_x - 4.5, _y + 20);
            a2_Canvas.crc2.closePath();
            a2_Canvas.crc2.fill();
            a2_Canvas.crc2.stroke();
        }
        drawKuchen(_x, _y) {
            a2_Canvas.crc2.beginPath();
            a2_Canvas.crc2.moveTo(_x, _y - 10 / 2);
            a2_Canvas.crc2.bezierCurveTo(_x + 10, _y - 10 / 2, _x + 10 / 2, _y + 10 / 2, _x, _y + 10 / 2);
            a2_Canvas.crc2.bezierCurveTo(_x - 10, _y + 10 / 2, _x - 10 / 2, _y - 10 / 2, _x, _y - 10 / 2);
            a2_Canvas.crc2.fillStyle = "#362217";
            a2_Canvas.crc2.fill();
            a2_Canvas.crc2.closePath();
        }
        drawKorb(_x, _y) {
            a2_Canvas.crc2.beginPath();
            a2_Canvas.crc2.moveTo(_x, _y);
            a2_Canvas.crc2.strokeStyle = "#B19158";
            a2_Canvas.crc2.fillStyle = "#B19158";
            a2_Canvas.crc2.lineTo(_x, _y - 23);
            a2_Canvas.crc2.lineTo(_x + 45, _y - 23);
            a2_Canvas.crc2.lineTo(_x + 45, _y);
            a2_Canvas.crc2.closePath();
            a2_Canvas.crc2.fill();
            a2_Canvas.crc2.stroke();
            a2_Canvas.crc2.beginPath();
            a2_Canvas.crc2.moveTo(_x + 22, _y - 22);
            a2_Canvas.crc2.strokeStyle = "#B19158";
            a2_Canvas.crc2.fillStyle = "#B19158";
            a2_Canvas.crc2.arc(_x + 22, _y - 22, 12, 0, Math.PI, true);
            a2_Canvas.crc2.closePath();
            a2_Canvas.crc2.fill();
            a2_Canvas.crc2.stroke();
            a2_Canvas.crc2.beginPath();
            a2_Canvas.crc2.moveTo(_x + 22, _y - 22);
            a2_Canvas.crc2.strokeStyle = "#F8ADFB";
            a2_Canvas.crc2.fillStyle = "#F8ADFB";
            a2_Canvas.crc2.arc(_x + 22, _y - 22, 8, 0, Math.PI, true);
            a2_Canvas.crc2.closePath();
            a2_Canvas.crc2.fill();
            a2_Canvas.crc2.stroke();
            //           
        }
        blume(_x, _y) {
            //        Bl�ten
            a2_Canvas.crc2.beginPath();
            a2_Canvas.crc2.moveTo(_x + 0.5, _y - 15);
            a2_Canvas.crc2.strokeStyle = "#F72041";
            a2_Canvas.crc2.fillStyle = "#F72041";
            a2_Canvas.crc2.arc(_x - 2, _y - 14, 3, 0, Math.PI * 2, true);
            a2_Canvas.crc2.arc(_x - 4, _y - 17, 3, 0, Math.PI * 2, true);
            a2_Canvas.crc2.arc(_x - 3, _y - 20, 3, 0, Math.PI * 2, true);
            a2_Canvas.crc2.arc(_x + 1.5, _y - 20, 3, 0, Math.PI * 2, true);
            a2_Canvas.crc2.arc(_x + 3, _y - 17, 3, 0, Math.PI * 2, true);
            a2_Canvas.crc2.arc(_x + 3, _y - 17, 2, 0, Math.PI * 2, true);
            a2_Canvas.crc2.arc(_x + 2, _y - 14, 3, 0, Math.PI * 2, true);
            a2_Canvas.crc2.closePath();
            a2_Canvas.crc2.fill();
            a2_Canvas.crc2.stroke();
            a2_Canvas.crc2.beginPath();
            a2_Canvas.crc2.moveTo(_x - 0.3, _y - 17);
            a2_Canvas.crc2.strokeStyle = "#E0813D";
            a2_Canvas.crc2.fillStyle = "#E0813D";
            a2_Canvas.crc2.arc(_x - 0.3, _y - 17, 2, 0, Math.PI * 2, true);
            a2_Canvas.crc2.closePath();
            a2_Canvas.crc2.fill();
            a2_Canvas.crc2.stroke();
        }
        drawTeller(_x, _y) {
            a2_Canvas.crc2.beginPath();
            a2_Canvas.crc2.moveTo(_x, _y - 20 / 2);
            a2_Canvas.crc2.bezierCurveTo(_x + 20, _y - 20 / 2, _x + 20 / 2, _y + 20 / 2, _x, _y + 20 / 2);
            a2_Canvas.crc2.bezierCurveTo(_x - 20, _y + 20 / 2, _x - 20 / 2, _y - 20 / 2, _x, _y - 20 / 2);
            a2_Canvas.crc2.fillStyle = "#94959A";
            a2_Canvas.crc2.fill();
            a2_Canvas.crc2.closePath();
        }
        drawvogel(_x, _y) {
            a2_Canvas.crc2.beginPath();
            a2_Canvas.crc2.moveTo(_x, _y);
            a2_Canvas.crc2.strokeStyle = "#000000";
            a2_Canvas.crc2.fillStyle = "#000000";
            a2_Canvas.crc2.arcTo(_x + 5, _y - 20, _x + 8, _y - 20, 20);
            a2_Canvas.crc2.arcTo(_x + 8, _y - 25, _x, _y, 20);
            a2_Canvas.crc2.arcTo(_x - 5, _y - 20, _x - 8, _y - 20, 20);
            a2_Canvas.crc2.arcTo(_x - 8, _y - 25, _x, _y, 15);
            a2_Canvas.crc2.closePath();
            a2_Canvas.crc2.fill();
            a2_Canvas.crc2.stroke();
        }
        drawwolke(_x, _y) {
            a2_Canvas.crc2.beginPath();
            a2_Canvas.crc2.moveTo(_x, _y);
            a2_Canvas.crc2.strokeStyle = "#ffffff";
            a2_Canvas.crc2.fillStyle = "#ffffff";
            a2_Canvas.crc2.arc(_x - 4, _y, 15, 0, Math.PI * 2, true);
            a2_Canvas.crc2.arc(_x - 10, _y - 12, 15, 0, Math.PI * 2, true);
            a2_Canvas.crc2.arc(_x + 2, _y - 22, 15, 0, Math.PI * 2, true);
            a2_Canvas.crc2.arc(_x + 20, _y - 17, 15, 0, Math.PI * 2, true);
            a2_Canvas.crc2.arc(_x + 20, _y - 17, 14, 0, Math.PI * 2, true);
            a2_Canvas.crc2.arc(_x + 28, _y - 8, 15, 0, Math.PI * 2, true);
            a2_Canvas.crc2.arc(_x + 28, _y - 8, 14, 0, Math.PI * 2, true);
            a2_Canvas.crc2.arc(_x + 18, _y, 15, 0, Math.PI * 2, true);
            a2_Canvas.crc2.arc(_x + 18, _y, 14, 0, Math.PI * 2, true);
            a2_Canvas.crc2.closePath();
            a2_Canvas.crc2.fill();
            a2_Canvas.crc2.stroke();
        }
        drawlake(_x, _y) {
            a2_Canvas.crc2.beginPath();
            a2_Canvas.crc2.moveTo(_x, _y);
            a2_Canvas.crc2.strokeStyle = "#9ACEDC";
            a2_Canvas.crc2.fillStyle = "#9ACEDC";
            a2_Canvas.crc2.arc(_x - 4, _y, 155, 0, Math.PI * 2, true);
            a2_Canvas.crc2.closePath();
            a2_Canvas.crc2.fill();
            a2_Canvas.crc2.stroke();
        }
        drawbusch(_x, _y) {
            a2_Canvas.crc2.beginPath();
            a2_Canvas.crc2.moveTo(_x, _y);
            a2_Canvas.crc2.strokeStyle = "#5C7139";
            a2_Canvas.crc2.fillStyle = "#5C7139";
            a2_Canvas.crc2.arc(_x - 4, _y, 20, 0, Math.PI * 2, true);
            a2_Canvas.crc2.arc(_x - 11, _y - 16, 18, 0, Math.PI * 2, true);
            a2_Canvas.crc2.arc(_x - 2, _y - 32, 18, 0, Math.PI * 2, true);
            a2_Canvas.crc2.arc(_x + 13, _y - 34, 18, 0, Math.PI * 2, true);
            a2_Canvas.crc2.arc(_x + 25, _y - 25, 18, 0, Math.PI * 2, true);
            a2_Canvas.crc2.arc(_x + 25, _y - 25, 16, 0, Math.PI * 2, true);
            a2_Canvas.crc2.arc(_x + 26, _y - 11, 19, 0, Math.PI * 2, true);
            a2_Canvas.crc2.arc(_x + 26, _y - 11, 20, 0, Math.PI * 2, true);
            a2_Canvas.crc2.arc(_x + 21, _y, 20, 0, Math.PI * 2, true);
            a2_Canvas.crc2.arc(_x + 10, _y, 20, 0, Math.PI * 2, true);
            a2_Canvas.crc2.closePath();
            a2_Canvas.crc2.fill();
            a2_Canvas.crc2.stroke();
        }
        drawsonne(_x, _y) {
            a2_Canvas.crc2.beginPath();
            a2_Canvas.crc2.strokeStyle = "#FFFF00";
            a2_Canvas.crc2.fillStyle = "#FFFF00";
            a2_Canvas.crc2.arc(_x, _y, 15, 0, Math.PI * 2, true); // Kreis
            //        Sonnenstrahlen
            a2_Canvas.crc2.moveTo(_x, _y);
            a2_Canvas.crc2.moveTo(_x - 22, _y);
            a2_Canvas.crc2.lineTo(_x - 40, _y + 3);
            a2_Canvas.crc2.moveTo(_x, _y);
            a2_Canvas.crc2.moveTo(_x - 19, _y - 10);
            a2_Canvas.crc2.lineTo(_x - 35, _y - 18);
            a2_Canvas.crc2.moveTo(_x - 10, _y - 18);
            a2_Canvas.crc2.lineTo(_x - 30, _y - 50);
            a2_Canvas.crc2.moveTo(_x + 2, _y - 20);
            a2_Canvas.crc2.lineTo(_x - 22, _y - 410);
            a2_Canvas.crc2.moveTo(_x + 15, _y - 15);
            a2_Canvas.crc2.lineTo(_x + 48, _y - 50);
            a2_Canvas.crc2.moveTo(_x + 20, _y - 6);
            a2_Canvas.crc2.lineTo(_x + 40, _y - 10);
            a2_Canvas.crc2.moveTo(_x + 22, _y + 4);
            a2_Canvas.crc2.lineTo(_x + 40, _y + 6);
            a2_Canvas.crc2.moveTo(_x + 18, _y + 14);
            a2_Canvas.crc2.lineTo(_x + 35, _y + 25);
            a2_Canvas.crc2.moveTo(_x + 8, _y + 20);
            a2_Canvas.crc2.lineTo(_x + 15, _y + 38);
            a2_Canvas.crc2.moveTo(_x - 4, _y + 20);
            a2_Canvas.crc2.lineTo(_x - 7, _y + 38);
            a2_Canvas.crc2.moveTo(_x - 15, _y + 15);
            a2_Canvas.crc2.lineTo(_x - 30, _y + 25);
            a2_Canvas.crc2.closePath();
            a2_Canvas.crc2.fill();
            a2_Canvas.crc2.stroke();
        }
        drawsBubble(_x, _y) {
            var r = _x + 310;
            var b = _y + 20;
            a2_Canvas.crc2.beginPath();
            a2_Canvas.crc2.strokeStyle = "#FFFFFF";
            a2_Canvas.crc2.fillStyle = "#FFFFFF";
            a2_Canvas.crc2.lineTo(_x + 3, _y);
            a2_Canvas.crc2.lineTo(r - 5, _y);
            a2_Canvas.crc2.quadraticCurveTo(r, _y, r, _y + 5);
            a2_Canvas.crc2.lineTo(r, _y + 20 - 5);
            a2_Canvas.crc2.quadraticCurveTo(r, b, r - 5, b);
            a2_Canvas.crc2.lineTo(_x + 5, b);
            a2_Canvas.crc2.quadraticCurveTo(_x, b, _x, b - 5);
            a2_Canvas.crc2.lineTo(_x, _y + 5);
            a2_Canvas.crc2.quadraticCurveTo(_x, _y, _x + 5, _y);
            //            crc2.fillText("Was passiet, wenn man auf den Ameisenhaufen, die Fische oder auf die Vögel klickt?",10,50);
            a2_Canvas.crc2.fill();
            a2_Canvas.crc2.stroke();
            a2_Canvas.crc2.closePath();
            a2_Canvas.crc2.beginPath();
            a2_Canvas.crc2.strokeStyle = "#FFFFFF";
            a2_Canvas.crc2.fillStyle = "#FFFFFF";
            a2_Canvas.crc2.moveTo(_x + 10, _y);
            a2_Canvas.crc2.lineTo(_x + 7, _y + 28);
            a2_Canvas.crc2.lineTo(_x + 28, _y);
            a2_Canvas.crc2.lineTo(_x + 10, _y);
            a2_Canvas.crc2.fill();
            a2_Canvas.crc2.stroke();
            a2_Canvas.crc2.closePath();
            a2_Canvas.crc2.beginPath();
            a2_Canvas.crc2.strokeStyle = "#000000";
            a2_Canvas.crc2.fillStyle = "#000000";
            //             crc2.moveTo(_x + 100, _y + 40);
            a2_Canvas.crc2.textAlign = "start";
            //            crc2.measureText("Was passiet, wenn man auf den Ameisenhaufen, die Fische oder auf die Vögel klickt?");
            a2_Canvas.crc2.fillText("Klick mal auf den Ameisenhaufen, die Fische oder auf die Vögel!", 190, 182);
            a2_Canvas.crc2.fill();
            a2_Canvas.crc2.stroke();
            a2_Canvas.crc2.closePath();
        }
    }
    a2_Canvas.Hintergrund2 = Hintergrund2;
})(a2_Canvas || (a2_Canvas = {}));
//# sourceMappingURL=hintergrund.js.map