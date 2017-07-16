namespace abschluss_Canvas {
    export class Hintergrund2 {
        x: number;
        y: number;


        constructor(_x: number, _y: number) {
            console.log("Hey, I'm Bob!");
            this.x = _x;
            this.y = _y;

        }

        drawAmeisenhaufen(_x: number, _y: number): void {


            crc2.beginPath();
            crc2.moveTo(_x, _y);
            crc2.fillStyle = "#825A40";
            crc2.fillRect(_x - 13.5, _y + 2 + 10, 20, -17);
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.moveTo(_x, _y - 5);
            crc2.fillStyle = "#825A40";
            crc2.arc(_x - 5, _y - 5, 25, 0, Math.PI, true);
            crc2.moveTo(_x - 5.7, _y + 1);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.moveTo(_x + 16, _y - 3);
            crc2.arc(_x - 18, _y - 3, 15, 0, (Math.PI) * 2, false);
            crc2.moveTo(_x + 16, _y - 3);
            crc2.arc(_x - 19, _y, 15, 0, (Math.PI) * 2, false);
            crc2.moveTo(_x + 16, _y);
            crc2.arc(_x - 23, _y + 8, 15, 0, (Math.PI) * 2, false);
            crc2.moveTo(_x + 16, _y - 3);
            crc2.arc(_x + 9, _y - 6, 15, 0, (Math.PI) * 2, false);
            crc2.moveTo(_x + 16, _y - 3);
            crc2.arc(_x + 13, _y + 5, 16, 0, (Math.PI) * 2, false);
            crc2.moveTo(_x + 16, _y - 3);
            crc2.arc(_x + 8, _y + 8, 15, 0, (Math.PI) * 2, false);
            crc2.moveTo(_x + 16, _y - 3);
            crc2.arc(_x - 1, _y + 7, 16, 0, (Math.PI) * 2, false);
            crc2.arc(_x - 14, _y + 7, 16, 0, (Math.PI) * 2, false);
            crc2.moveTo(_x + 16, _y - 3);
            crc2.arc(_x, _y + 4, 11, 0, (Math.PI) * 2, false);
            crc2.moveTo(_x + 16, _y - 3);
            crc2.arc(_x - 15, _y + 4, 10, 0, (Math.PI) * 2, false);
            crc2.moveTo(_x + 16, _y - 3);
            crc2.arc(_x + 6, _y + 4, 10, 0, (Math.PI) * 2, false);
            crc2.fillStyle = "#825A403";
            crc2.fill();
            crc2.closePath();


        }


        drawDecke(_x: number, _y: number): void {

            crc2.beginPath();
            crc2.moveTo(_x, _y);
            crc2.strokeStyle = "#BF2D40";
            crc2.fillStyle = "#BF2D40";
            crc2.lineTo(_x - 20, _y + 140);

            crc2.lineTo(_x + 150, _y + 140);
            crc2.lineTo(_x + 160, _y);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();



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

        drawKorb(_x: number, _y: number): void {
            crc2.beginPath();
            crc2.moveTo(_x, _y);
            crc2.strokeStyle = "#B19158";
            crc2.fillStyle = "#B19158";
            crc2.lineTo(_x, _y - 23);
            crc2.lineTo(_x + 45, _y - 23);
            crc2.lineTo(_x + 45, _y);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            crc2.beginPath();
            crc2.moveTo(_x + 22, _y - 22);
            crc2.strokeStyle = "#B19158";
            crc2.fillStyle = "#B19158";
            crc2.arc(_x + 22, _y - 22, 12, 0, Math.PI, true);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            crc2.beginPath();
            crc2.moveTo(_x + 22, _y - 22);
            crc2.strokeStyle = "#BF2D40";
            crc2.fillStyle = "#BF2D40";
            crc2.arc(_x + 22, _y - 22, 8, 0, Math.PI, true);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            //           


        }

        blume(_x: number, _y: number): void {


            //        Bl�ten
            crc2.beginPath();
            crc2.moveTo(_x + 0.5, _y - 15);
            crc2.strokeStyle = "#F72041";
            crc2.fillStyle = "#F72041";
            crc2.arc(_x - 2, _y - 14, 3, 0, Math.PI * 2, true);
            crc2.arc(_x - 4, _y - 17, 3, 0, Math.PI * 2, true);
            crc2.arc(_x - 3, _y - 20, 3, 0, Math.PI * 2, true);
            crc2.arc(_x + 1.5, _y - 20, 3, 0, Math.PI * 2, true);
            crc2.arc(_x + 3, _y - 17, 3, 0, Math.PI * 2, true);
            crc2.arc(_x + 3, _y - 17, 2, 0, Math.PI * 2, true);
            crc2.arc(_x + 2, _y - 14, 3, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();


            crc2.beginPath();
            crc2.moveTo(_x - 0.3, _y - 17);
            crc2.strokeStyle = "#E0813D";
            crc2.fillStyle = "#E0813D";
            crc2.arc(_x - 0.3, _y - 17, 2, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }


        drawTeller(_x: number, _y: number): void {
            crc2.beginPath();
            crc2.moveTo(_x, _y - 20 / 2);
            crc2.bezierCurveTo(_x + 20, _y - 20 / 2, _x + 20 / 2, _y + 20 / 2, _x, _y + 20 / 2);
            crc2.bezierCurveTo(_x - 20, _y + 20 / 2, _x - 20 / 2, _y - 20 / 2, _x, _y - 20 / 2);
            crc2.fillStyle = "#C9C9C9";
            crc2.fill();
            crc2.closePath();


        }

        drawvogel(_x: number, _y: number): void {


            crc2.beginPath();
            crc2.moveTo(_x, _y);
            crc2.strokeStyle = "#000000";
            crc2.fillStyle = "#000000";
            crc2.arcTo(_x + 5, _y - 20, _x + 8, _y - 20, 20);
            crc2.arcTo(_x + 8, _y - 25, _x, _y, 20);
            crc2.arcTo(_x - 5, _y - 20, _x - 8, _y - 20, 20);
            crc2.arcTo(_x - 8, _y - 25, _x, _y, 15);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

        }


        drawwolke(_x: number, _y: number): void {


            crc2.beginPath();
            crc2.moveTo(_x, _y);
            crc2.strokeStyle = "#ffffff";
            crc2.fillStyle = "#ffffff";
            crc2.arc(_x - 4, _y, 15, 0, Math.PI * 2, true);
            crc2.arc(_x - 10, _y - 12, 15, 0, Math.PI * 2, true);
            crc2.arc(_x + 2, _y - 22, 15, 0, Math.PI * 2, true);
            crc2.arc(_x + 20, _y - 17, 15, 0, Math.PI * 2, true);
            crc2.arc(_x + 20, _y - 17, 14, 0, Math.PI * 2, true);
            crc2.arc(_x + 28, _y - 8, 15, 0, Math.PI * 2, true);
            crc2.arc(_x + 28, _y - 8, 14, 0, Math.PI * 2, true);
            crc2.arc(_x + 18, _y, 15, 0, Math.PI * 2, true);
            crc2.arc(_x + 18, _y, 14, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

        }


        drawlake(_x: number, _y: number): void {
            crc2.beginPath();
            crc2.moveTo(_x, _y);
            crc2.strokeStyle = "#9ACEDC";
            crc2.fillStyle = "#9ACEDC";
            crc2.arc(_x - 4, _y, 155, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }

        drawbusch(_x: number, _y: number): void {
            crc2.beginPath();
            crc2.moveTo(_x, _y);
            crc2.strokeStyle = "#5C7139";
            crc2.fillStyle = "#5C7139";
            crc2.arc(_x - 4, _y, 20, 0, Math.PI * 2, true);
            crc2.arc(_x - 11, _y - 16, 18, 0, Math.PI * 2, true);
            crc2.arc(_x - 2, _y - 32, 18, 0, Math.PI * 2, true);
            crc2.arc(_x + 13, _y - 34, 18, 0, Math.PI * 2, true);
            crc2.arc(_x + 25, _y - 25, 18, 0, Math.PI * 2, true);
            crc2.arc(_x + 25, _y - 25, 16, 0, Math.PI * 2, true);
            crc2.arc(_x + 26, _y - 11, 19, 0, Math.PI * 2, true);
            crc2.arc(_x + 26, _y - 11, 20, 0, Math.PI * 2, true);
            crc2.arc(_x + 21, _y, 20, 0, Math.PI * 2, true);
            crc2.arc(_x + 10, _y, 20, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }

        drawsonne(_x: number, _y: number): void {
            crc2.beginPath();
            crc2.strokeStyle = "#FFFF00";
            crc2.fillStyle = "#FFFF00";
            crc2.arc(_x, _y, 15, 0, Math.PI * 2, true); // Kreis

            //        Sonnenstrahlen
            crc2.moveTo(_x, _y);
            crc2.moveTo(_x - 22, _y);
            crc2.lineTo(_x - 40, _y + 3);
            crc2.moveTo(_x, _y);

            crc2.moveTo(_x - 19, _y - 10);
            crc2.lineTo(_x - 35, _y - 18);


            crc2.moveTo(_x - 10, _y - 18);
            crc2.lineTo(_x - 30, _y - 50);


            crc2.moveTo(_x + 2, _y - 20);
            crc2.lineTo(_x - 22, _y - 410);



            crc2.moveTo(_x + 15, _y - 15);
            crc2.lineTo(_x + 48, _y - 50);


            crc2.moveTo(_x + 20, _y - 6);
            crc2.lineTo(_x + 40, _y - 10);

            crc2.moveTo(_x + 22, _y + 4);
            crc2.lineTo(_x + 40, _y + 6);

            crc2.moveTo(_x + 18, _y + 14);
            crc2.lineTo(_x + 35, _y + 25);


            crc2.moveTo(_x + 8, _y + 20);
            crc2.lineTo(_x + 15, _y + 38);


            crc2.moveTo(_x - 4, _y + 20);
            crc2.lineTo(_x - 7, _y + 38);

            crc2.moveTo(_x - 15, _y + 15);
            crc2.lineTo(_x - 30, _y + 25);


            crc2.closePath();
            crc2.fill();
            crc2.stroke();


        }



    }
}