namespace a2_Canvas {
    export class Kuchen {
        x: number;
        y: number;


        constructor(_x: number, _y: number) {
            console.log("Hey, I'm Bob!");
            this.x = _x;
            this.y = _y;

        }


        drawKuchen(_x: number, _y: number): void {

            crc2.beginPath();
            crc2.moveTo(_x, _y - 10 / 2);
            crc2.bezierCurveTo(_x + 10, _y - 10 / 2, _x + 10 / 2, _y + 10 / 2, _x, _y + 10 / 2);
            crc2.bezierCurveTo(_x - 10, _y + 10 / 2, _x - 10 / 2, _y - 10 / 2, _x, _y - 10 / 2);
            crc2.fillStyle = "#362217";
            crc2.fill();
            crc2.closePath();





        }

    }
}