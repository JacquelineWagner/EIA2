namespace abschluss_Canvas {

    export class Ameisen {
        x: number;
        y: number;


        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;

        }


        update(_x: number, _y: number): void {
            this.drawfisch(0, 0);

        }


        //       
        drawfisch(_x: number, _y: number): void {

            crc2.beginPath();
            crc2.moveTo(_x + 4, _y);
            crc2.strokeStyle = "#58006F";
            crc2.fillStyle = "#58006F";
            crc2.lineTo(_x + 8, _y - 6);
            crc2.lineTo(_x + 8, _y + 4);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(_x, _y - 10 / 2);
            crc2.bezierCurveTo(_x + 10, _y - 10 / 2, _x + 10 / 2, _y + 10 / 2, _x, _y + 10 / 2);
            crc2.bezierCurveTo(_x - 10, _y + 10 / 2, _x - 10 / 2, _y - 10 / 2, _x, _y - 10 / 2);
            crc2.fillStyle = "#58006F";
            crc2.fill();
            crc2.closePath();

        }



    }
