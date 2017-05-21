namespace a08_Canvas {

    export class Blume3 extends Blumen {

        constructor(_x: number, _y: number, _flowerType: string) {
            super(_x, _y, _flowerType);
        }


        draw(): void {

            //        Stiel + Blatt
            crc2.beginPath();
            crc2.moveTo(this.x - 0.5, this.y + 5);
            crc2.strokeStyle = "#013713";
            crc2.fillStyle = "#013713";
            crc2.lineTo(this.x - 0.5, this.y + 18);
            crc2.lineTo(this.x + 1, this.y + 18);
            crc2.lineTo(this.x + 1, this.y);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();



            //Blüte
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.strokeStyle = "#9D5AA4";
            crc2.fillStyle = "#9D5AA4";
            crc2.arc(this.x, this.y, 6, 0, Math.PI, false);
            crc2.moveTo(this.x - 5.7, this.y + 1);
            crc2.lineTo(this.x - 5.7, this.y - 5);
            crc2.lineTo(this.x - 1, this.y + 1);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.x - 3, this.y + 1);
            crc2.lineTo(this.x, this.y - 4);
            crc2.lineTo(this.x + 3, this.y + 1);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.strokeStyle = "#9D5AA4";
            crc2.fillStyle = "#9D5AA4   ";
            crc2.arc(this.x, this.y, 6, 0, Math.PI, false);
            crc2.moveTo(this.x + 6, this.y + 1);
            crc2.lineTo(this.x + 6, this.y - 5);
            crc2.lineTo(this.x - 1, this.y + 1);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();



        }
    }
}