namespace a08_Canvas {

    export class Tulpe extends Blumen {

        constructor(_x: number, _y: number, _flowerType: string) {
            super(_x, _y, _flowerType);
        }


        draw(): void {
            switch (this.flowerType) {
                case "tulpe":
                    this.tulpe(this.x + 40, this.y - 5);
                    break;
            }
 
        }


        tulpe(_x: number, _y: number): void {
            //        Stiel 
            crc2.beginPath();
            crc2.moveTo(_x - 0.5, _y - 5);
            crc2.strokeStyle = "#013713";
            crc2.fillStyle = "#0137#13";
            crc2.lineTo(_x + 0.5, _y - 5);
            crc2.lineTo(_x + 0.5, _y + 10);
            crc2.lineTo(_x - 0.5, _y + 10);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();


            // Blatt
            crc2.beginPath();
            crc2.moveTo(_x - 2, _y - 5);
            crc2.strokeStyle = "#D4A5D3";
            crc2.fillStyle = "#D4A5D3";
            crc2.lineTo(_x - 2, _y - 9);
            crc2.lineTo(_x, _y - 6);
            crc2.lineTo(_x + 2, _y - 9);
            crc2.lineTo(_x + 2, _y - 5);

            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(_x - 0.5, _y - 5);
            crc2.strokeStyle = "#8A0651";
            crc2.fillStyle = "#8A0651";
            crc2.lineTo(_x + 0.5, _y - 5);
            crc2.lineTo(_x + 0.5, _y + 1);
            crc2.lineTo(_x - 0.5, _y + 1);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(_x + 1, _y - 5);
            crc2.strokeStyle = "#8A0651";
            crc2.fillStyle = "#8A0651";
            crc2.lineTo(_x + 7, _y - 8);
            crc2.lineTo(_x + 1, _y);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            crc2.beginPath();
            crc2.moveTo(_x + 1, _y - 5);
            crc2.arcTo(_x + 1, _y - 5, _x + 7, _y - 8, 20);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(_x - 1, _y - 5);
            crc2.strokeStyle = "#8A06513";
            crc2.fillStyle = "#8A0651";
            crc2.lineTo(_x - 7, _y - 8);
            crc2.lineTo(_x - 1, _y);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            crc2.beginPath();
            crc2.moveTo(_x - 1, _y - 5);
            crc2.arcTo(_x - 1, _y - 5, _x - 7, _y - 8, 20);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

        }


    }
}