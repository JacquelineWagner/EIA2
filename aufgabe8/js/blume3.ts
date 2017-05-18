namespace a08_Canvas {

    export class Blume3 extends Blumen {

        constructor(_x: number, _y: number, _flowerType: string) {
            super(_x, _y, _flowerType);
        }


        draw(): void {
            switch (this.flowerType) {
                case "blume3":
                    this.blume3(this.x - 25, this.y - 6);
                    break;
            }

        }


 

        blume3(_x: number, _y: number): void {
            //        Stiel + Blatt
            crc2.beginPath();
            crc2.moveTo(_x - 0.5, _y + 5);
            crc2.strokeStyle = "#013713";
            crc2.fillStyle = "#013713";
            crc2.lineTo(_x - 0.5, _y + 18);
            crc2.lineTo(_x + 1, _y + 18);
            crc2.lineTo(_x + 1, _y);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();



            //Blüte
            crc2.beginPath();
            crc2.moveTo(_x, _y);
            crc2.strokeStyle = "#9D5AA4";
            crc2.fillStyle = "#9D5AA4";
            crc2.arc(_x, _y, 6, 0, Math.PI, false);
            crc2.moveTo(_x - 5.7, _y + 1);
            crc2.lineTo(_x - 5.7, _y - 5);
            crc2.lineTo(_x - 1, _y + 1);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(_x - 3, _y + 1);
            crc2.lineTo(_x, _y - 4);
            crc2.lineTo(_x + 3, _y + 1);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(_x, _y);
            crc2.strokeStyle = "#9D5AA4";
            crc2.fillStyle = "#9D5AA4   ";
            crc2.arc(_x, _y, 6, 0, Math.PI, false);
            crc2.moveTo(_x + 6, _y + 1);
            crc2.lineTo(_x + 6, _y - 5);
            crc2.lineTo(_x - 1, _y + 1);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();



        }
    }
}