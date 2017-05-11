var a07_Canvas;
(function (a07_Canvas) {
    class Bee {
        constructor(_x, _y, _size, _color) {
            console.log("Hey, I'm Bob!");
            this.x = _x;
            this.y = _y;
            this.size = _size;
            this.color = _color;
        }
        update() {
            this.move();
            this.draw();
        }
        draw() {
            //Fl�gel
            a07_Canvas.crc2.beginPath();
            a07_Canvas.crc2.moveTo(this.x + 3, this.y - this.size / 2 - 3 - 3 / 2);
            a07_Canvas.crc2.bezierCurveTo(this.x + 3 + 10 / 2, this.y - this.size / 2 - 3 - 3 / 2, this.x + 3 + 10 / 2, this.y - this.size / 2 - 3 + 3 / 2, this.x + 3, this.y - 3 + 3 / 2);
            a07_Canvas.crc2.bezierCurveTo(this.x + 3 - 10 / 2, this.y - this.size / 2 - 3 + 3 / 2, this.x + 3 - 10 / 2, this.y - this.size / 2 - 3 - 3 / 2, this.x + 3, this.y - 3 - 5 / 2);
            a07_Canvas.crc2.fillStyle = "rgba(255,255,255, 0.8)";
            a07_Canvas.crc2.fill();
            a07_Canvas.crc2.closePath();
            //K�rper der Biene
            a07_Canvas.crc2.beginPath();
            a07_Canvas.crc2.moveTo(this.x, this.y - this.size / 2);
            a07_Canvas.crc2.bezierCurveTo(this.x + this.size, this.y - this.size / 2, this.x + this.size / 2, this.y + this.size / 2, this.x, this.y + this.size / 2);
            a07_Canvas.crc2.bezierCurveTo(this.x - this.size, this.y + this.size / 2, this.x - this.size / 2, this.y - this.size / 2, this.x, this.y - this.size / 2);
            a07_Canvas.crc2.fillStyle = this.color;
            a07_Canvas.crc2.fill();
            a07_Canvas.crc2.closePath();
            a07_Canvas.crc2.beginPath();
            a07_Canvas.crc2.moveTo(this.x, this.y - this.size / 2);
            a07_Canvas.crc2.bezierCurveTo(this.x + this.size, this.y - this.size / 4, this.x + this.size / 2, this.y + this.size / 2, this.x, this.y + this.size / 2);
            a07_Canvas.crc2.bezierCurveTo(this.x - this.size, this.y + this.size / 4, this.x - this.size / 2, this.y - this.size / 2, this.x, this.y - this.size / 2);
            a07_Canvas.crc2.strokeStyle = "black";
            a07_Canvas.crc2.stroke();
            a07_Canvas.crc2.closePath();
            //Kopf
            a07_Canvas.crc2.beginPath();
            a07_Canvas.crc2.moveTo(this.x - 1, this.y + this.size / 2);
            a07_Canvas.crc2.bezierCurveTo(this.x - this.size, this.y, this.x - 5, this.y - this.size / 2, this.x - 1, this.y - this.size / 2);
            a07_Canvas.crc2.fillStyle = "black";
            a07_Canvas.crc2.fill();
            a07_Canvas.crc2.closePath();
            //Streifen
            a07_Canvas.crc2.beginPath();
            a07_Canvas.crc2.moveTo(this.x + 0.25, this.y + this.size / 2);
            a07_Canvas.crc2.lineTo(this.x, this.y - this.size / 2);
            a07_Canvas.crc2.strokeStyle = "black";
            a07_Canvas.crc2.stroke();
            a07_Canvas.crc2.closePath();
            a07_Canvas.crc2.beginPath();
            a07_Canvas.crc2.moveTo(this.x + 2.25, this.y + this.size / 2);
            a07_Canvas.crc2.lineTo(this.x + 2.25, this.y - this.size / 2);
            a07_Canvas.crc2.strokeStyle = "black";
            a07_Canvas.crc2.stroke();
        }
        move() {
            this.x += Math.random() * 5 - 3;
            this.y += Math.random() * 4 - 2;
            if (this.x < 0) {
                this.x = 400;
            }
            if (this.y < 0) {
                this.y = 250;
            }
            if (this.y > 300) {
                this.y = 0;
            }
        }
        setRandomPosition() {
            this.x = Math.random() * 200;
            this.y = Math.random() * 200;
        }
        setRandomStyle() {
            this.size = Math.random() * 30 + 10;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }
    }
    a07_Canvas.Bee = Bee;
    class Flower {
        constructor(_x, _y, _size, _flowerType) {
            this.x = _x;
            this.y = _y;
            this.size = _size;
            this.flowerType = _flowerType;
        }
        blume3(_x, _y) {
            //        Stiel + Blatt
            a07_Canvas.crc2.beginPath();
            a07_Canvas.crc2.moveTo(_x - 0.5, _y + 5);
            a07_Canvas.crc2.strokeStyle = "#013713";
            a07_Canvas.crc2.fillStyle = "#013713";
            a07_Canvas.crc2.lineTo(_x - 0.5, _y + 18);
            a07_Canvas.crc2.lineTo(_x + 1, _y + 18);
            a07_Canvas.crc2.lineTo(_x + 1, _y);
            a07_Canvas.crc2.closePath();
            a07_Canvas.crc2.fill();
            a07_Canvas.crc2.stroke();
            //Bl�te
            a07_Canvas.crc2.beginPath();
            a07_Canvas.crc2.moveTo(_x, _y);
            a07_Canvas.crc2.strokeStyle = "#9D5AA4";
            a07_Canvas.crc2.fillStyle = "#9D5AA4";
            a07_Canvas.crc2.arc(_x, _y, 6, 0, Math.PI, false);
            a07_Canvas.crc2.moveTo(_x - 5.7, _y + 1);
            a07_Canvas.crc2.lineTo(_x - 5.7, _y - 5);
            a07_Canvas.crc2.lineTo(_x - 1, _y + 1);
            a07_Canvas.crc2.closePath();
            a07_Canvas.crc2.fill();
            a07_Canvas.crc2.stroke();
            a07_Canvas.crc2.beginPath();
            a07_Canvas.crc2.moveTo(_x - 3, _y + 1);
            a07_Canvas.crc2.lineTo(_x, _y - 4);
            a07_Canvas.crc2.lineTo(_x + 3, _y + 1);
            a07_Canvas.crc2.closePath();
            a07_Canvas.crc2.fill();
            a07_Canvas.crc2.stroke();
            a07_Canvas.crc2.beginPath();
            a07_Canvas.crc2.moveTo(_x, _y);
            a07_Canvas.crc2.strokeStyle = "#9D5AA4";
            a07_Canvas.crc2.fillStyle = "#9D5AA4   ";
            a07_Canvas.crc2.arc(_x, _y, 6, 0, Math.PI, false);
            a07_Canvas.crc2.moveTo(_x + 6, _y + 1);
            a07_Canvas.crc2.lineTo(_x + 6, _y - 5);
            a07_Canvas.crc2.lineTo(_x - 1, _y + 1);
            a07_Canvas.crc2.closePath();
            a07_Canvas.crc2.fill();
            a07_Canvas.crc2.stroke();
        }
        blume(_x, _y, _size) {
            //        Stiel 
            a07_Canvas.crc2.beginPath();
            a07_Canvas.crc2.moveTo(_x, _y);
            a07_Canvas.crc2.strokeStyle = "#013713";
            a07_Canvas.crc2.fillStyle = "#013713";
            a07_Canvas.crc2.lineTo(_x, _y - 15);
            a07_Canvas.crc2.lineTo(_x + 1, _y - 15);
            a07_Canvas.crc2.lineTo(_x + 1, _y);
            a07_Canvas.crc2.closePath();
            a07_Canvas.crc2.fill();
            a07_Canvas.crc2.stroke();
            // Blatt
            a07_Canvas.crc2.beginPath();
            a07_Canvas.crc2.moveTo(_x + 1, _y - 5);
            a07_Canvas.crc2.strokeStyle = "#013713";
            a07_Canvas.crc2.fillStyle = "#013713";
            a07_Canvas.crc2.lineTo(_x + 7, _y - 10);
            a07_Canvas.crc2.lineTo(_x + 1, _y);
            a07_Canvas.crc2.closePath();
            a07_Canvas.crc2.fill();
            a07_Canvas.crc2.stroke();
            a07_Canvas.crc2.beginPath();
            a07_Canvas.crc2.moveTo(_x + 1, _y - 5);
            a07_Canvas.crc2.arcTo(_x + 1, _y - 5, _x + 7, _y - 10, 20);
            a07_Canvas.crc2.closePath();
            a07_Canvas.crc2.fill();
            a07_Canvas.crc2.stroke();
            //        Bl�ten
            a07_Canvas.crc2.beginPath();
            a07_Canvas.crc2.moveTo(_x + 0.5, _y - 15);
            a07_Canvas.crc2.strokeStyle = "#F72041";
            a07_Canvas.crc2.fillStyle = "#F72041";
            a07_Canvas.crc2.arc(_x - 2, _y - 14, 3, 0, Math.PI * 2, true);
            a07_Canvas.crc2.arc(_x - 4, _y - 17, 3, 0, Math.PI * 2, true);
            a07_Canvas.crc2.arc(_x - 3, _y - 20, 3, 0, Math.PI * 2, true);
            a07_Canvas.crc2.arc(_x + 1.5, _y - 20, 3, 0, Math.PI * 2, true);
            a07_Canvas.crc2.arc(_x + 3, _y - 17, 3, 0, Math.PI * 2, true);
            a07_Canvas.crc2.arc(_x + 3, _y - 17, 2, 0, Math.PI * 2, true);
            a07_Canvas.crc2.arc(_x + 2, _y - 14, 3, 0, Math.PI * 2, true);
            a07_Canvas.crc2.closePath();
            a07_Canvas.crc2.fill();
            a07_Canvas.crc2.stroke();
            a07_Canvas.crc2.beginPath();
            a07_Canvas.crc2.moveTo(_x - 0.3, _y - 17);
            a07_Canvas.crc2.strokeStyle = "#E0813D";
            a07_Canvas.crc2.fillStyle = "#E0813D";
            a07_Canvas.crc2.arc(_x - 0.3, _y - 17, 2, 0, Math.PI * 2, true);
            a07_Canvas.crc2.closePath();
            a07_Canvas.crc2.fill();
            a07_Canvas.crc2.stroke();
        }
        tulpe(_x, _y) {
            //        Stiel 
            a07_Canvas.crc2.beginPath();
            a07_Canvas.crc2.moveTo(_x - 0.5, _y - 5);
            a07_Canvas.crc2.strokeStyle = "#013713";
            a07_Canvas.crc2.fillStyle = "#0137#13";
            a07_Canvas.crc2.lineTo(_x + 0.5, _y - 5);
            a07_Canvas.crc2.lineTo(_x + 0.5, _y + 10);
            a07_Canvas.crc2.lineTo(_x - 0.5, _y + 10);
            a07_Canvas.crc2.closePath();
            a07_Canvas.crc2.fill();
            a07_Canvas.crc2.stroke();
            // Blatt
            a07_Canvas.crc2.beginPath();
            a07_Canvas.crc2.moveTo(_x - 2, _y - 5);
            a07_Canvas.crc2.strokeStyle = "#D4A5D3";
            a07_Canvas.crc2.fillStyle = "#D4A5D3";
            a07_Canvas.crc2.lineTo(_x - 2, _y - 9);
            a07_Canvas.crc2.lineTo(_x, _y - 6);
            a07_Canvas.crc2.lineTo(_x + 2, _y - 9);
            a07_Canvas.crc2.lineTo(_x + 2, _y - 5);
            a07_Canvas.crc2.closePath();
            a07_Canvas.crc2.fill();
            a07_Canvas.crc2.stroke();
            a07_Canvas.crc2.beginPath();
            a07_Canvas.crc2.moveTo(_x - 0.5, _y - 5);
            a07_Canvas.crc2.strokeStyle = "#8A0651";
            a07_Canvas.crc2.fillStyle = "#8A0651";
            a07_Canvas.crc2.lineTo(_x + 0.5, _y - 5);
            a07_Canvas.crc2.lineTo(_x + 0.5, _y + 1);
            a07_Canvas.crc2.lineTo(_x - 0.5, _y + 1);
            a07_Canvas.crc2.closePath();
            a07_Canvas.crc2.fill();
            a07_Canvas.crc2.stroke();
            a07_Canvas.crc2.beginPath();
            a07_Canvas.crc2.moveTo(_x + 1, _y - 5);
            a07_Canvas.crc2.strokeStyle = "#8A0651";
            a07_Canvas.crc2.fillStyle = "#8A0651";
            a07_Canvas.crc2.lineTo(_x + 7, _y - 8);
            a07_Canvas.crc2.lineTo(_x + 1, _y);
            a07_Canvas.crc2.closePath();
            a07_Canvas.crc2.fill();
            a07_Canvas.crc2.stroke();
            a07_Canvas.crc2.beginPath();
            a07_Canvas.crc2.moveTo(_x + 1, _y - 5);
            a07_Canvas.crc2.arcTo(_x + 1, _y - 5, _x + 7, _y - 8, 20);
            a07_Canvas.crc2.closePath();
            a07_Canvas.crc2.fill();
            a07_Canvas.crc2.stroke();
            a07_Canvas.crc2.beginPath();
            a07_Canvas.crc2.moveTo(_x - 1, _y - 5);
            a07_Canvas.crc2.strokeStyle = "#8A06513";
            a07_Canvas.crc2.fillStyle = "#8A0651";
            a07_Canvas.crc2.lineTo(_x - 7, _y - 8);
            a07_Canvas.crc2.lineTo(_x - 1, _y);
            a07_Canvas.crc2.closePath();
            a07_Canvas.crc2.fill();
            a07_Canvas.crc2.stroke();
            a07_Canvas.crc2.beginPath();
            a07_Canvas.crc2.moveTo(_x - 1, _y - 5);
            a07_Canvas.crc2.arcTo(_x - 1, _y - 5, _x - 7, _y - 8, 20);
            a07_Canvas.crc2.closePath();
            a07_Canvas.crc2.fill();
            a07_Canvas.crc2.stroke();
        }
        draw() {
            switch (this.flowerType) {
                case 1:
                    this.blume(this.x - 25, this.y - 6, 5);
                    break;
                case 2:
                    this.tulpe(this.x + 40, this.y - 5);
                    break;
            }
        }
        update() {
            this.draw();
        }
    }
    a07_Canvas.Flower = Flower;
})(a07_Canvas || (a07_Canvas = {}));
//# sourceMappingURL=aufgabe7-2.js.map