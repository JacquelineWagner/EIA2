namespace a08_Canvas {

    export class Tulpe extends Blumen {

        constructor(_x: number, _y: number, _flowerType: string) {
            super(_x, _y, _flowerType);
        }


        draw(): void {
           
            //        Stiel 
            crc2.beginPath();
            crc2.moveTo(this.x - 0.5, this.y - 5);
            crc2.strokeStyle = "#013713";
            crc2.fillStyle = "#0137#13";
            crc2.lineTo(this.x + 0.5, this.y - 5);
            crc2.lineTo(this.x + 0.5, this.y + 10);
            crc2.lineTo(this.x - 0.5, this.y + 10);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();


            // Blatt
            crc2.beginPath();
            crc2.moveTo(this.x - 2, this.y - 5);
            crc2.strokeStyle = "#D4A5D3";
            crc2.fillStyle = "#D4A5D3";
            crc2.lineTo(this.x - 2, this.y - 9);
            crc2.lineTo(this.x, this.y - 6);
            crc2.lineTo(this.x + 2, this.y - 9);
            crc2.lineTo(this.x + 2, this.y - 5);

            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.x - 0.5, this.y - 5);
            crc2.strokeStyle = "#8A0651";
            crc2.fillStyle = "#8A0651";
            crc2.lineTo(this.x + 0.5, this.y - 5);
            crc2.lineTo(this.x + 0.5, this.y + 1);
            crc2.lineTo(this.x - 0.5, this.y + 1);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.x + 1, this.y - 5);
            crc2.strokeStyle = "#8A0651";
            crc2.fillStyle = "#8A0651";
            crc2.lineTo(this.x + 7, this.y - 8);
            crc2.lineTo(this.x + 1, this.y);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            crc2.beginPath();
            crc2.moveTo(this.x + 1, this.y - 5);
            crc2.arcTo(this.x + 1, this.y - 5, this.x + 7, this.y - 8, 20);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.x - 1, this.y - 5);
            crc2.strokeStyle = "#8A06513";
            crc2.fillStyle = "#8A0651";
            crc2.lineTo(this.x - 7, this.y - 8);
            crc2.lineTo(this.x - 1, this.y);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            crc2.beginPath();
            crc2.moveTo(this.x - 1, this.y - 5);
            crc2.arcTo(this.x - 1, this.y - 5, this.x - 7, this.y - 8, 20);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

        }


    }
}