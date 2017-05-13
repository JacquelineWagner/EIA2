namespace a07_Canvas {  

export class Flower {
        x: number;
        y: number;
        flowerType: string;

        constructor(_x: number, _y: number, _flowerType: string) {
            this.x = _x;
            this.y = _y;
            this.flowerType = _flowerType;
            this.draw();
        }


        draw(): void {
            switch (this.flowerType) {
                case "blume":
                    this.blume(this.x - 25, this.y - 6, 5);
                    break;
                case "tulpe":
                    this.tulpe(this.x + 40, this.y - 5);
                    break;
            }

        }
        
        
        update(): void {
            this.draw();
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

        blume(_x: number, _y: number, _size: number): void {
            //        Stiel 
            crc2.beginPath();
            crc2.moveTo(_x, _y);
            crc2.strokeStyle = "#013713";
            crc2.fillStyle = "#013713";
            crc2.lineTo(_x, _y - 15);
            crc2.lineTo(_x + 1, _y - 15);
            crc2.lineTo(_x + 1, _y);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();


            // Blatt
            crc2.beginPath();
            crc2.moveTo(_x + 1, _y - 5);
            crc2.strokeStyle = "#013713";
            crc2.fillStyle = "#013713";
            crc2.lineTo(_x + 7, _y - 10);
            crc2.lineTo(_x + 1, _y);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            crc2.beginPath();
            crc2.moveTo(_x + 1, _y - 5);
            crc2.arcTo(_x + 1, _y - 5, _x + 7, _y - 10, 20);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();


            //        Blüten
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