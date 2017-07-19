var a2_Canvas;
(function (a2_Canvas) {
    class Kuchen {
        constructor(_x, _y) {
            console.log("Hey, I'm Bob!");
            this.x = _x;
            this.y = _y;
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
    }
    a2_Canvas.Kuchen = Kuchen;
})(a2_Canvas || (a2_Canvas = {}));
//# sourceMappingURL=kuchen.js.map