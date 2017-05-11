namespace a07_Canvas {
    export class Bee {
        x: number;
        y: number;
        size: number;
        color: string;

        constructor(_x: number, _y: number, _size: number, _color: string) {
            console.log("Hey, I'm Bob!");
            this.x = _x;
            this.y = _y;
            this.size = _size;
            this.color = _color;
        }

        update(): void {
            this.move();
            this.draw();
        }

        draw(): void {
            //Flügel
            crc2.beginPath();
            crc2.moveTo(this.x + 3, this.y - this.size / 2 - 3 - 3 / 2);
            crc2.bezierCurveTo(this.x + 3 + 10 / 2, this.y - this.size / 2 - 3 - 3 / 2, this.x + 3 + 10 / 2, this.y - this.size / 2 - 3 + 3 / 2, this.x + 3, this.y - 3 + 3 / 2);
            crc2.bezierCurveTo(this.x + 3 - 10 / 2, this.y - this.size / 2 - 3 + 3 / 2, this.x + 3 - 10 / 2, this.y - this.size / 2 - 3 - 3 / 2, this.x + 3, this.y - 3 - 5 / 2);
            crc2.fillStyle = "rgba(255,255,255, 0.8)";
            crc2.fill();
            crc2.closePath();
            //Körper der Biene
            crc2.beginPath();
            crc2.moveTo(this.x, this.y - this.size / 2);
            crc2.bezierCurveTo(this.x + this.size, this.y - this.size / 2, this.x + this.size / 2, this.y + this.size / 2, this.x, this.y + this.size / 2);
            crc2.bezierCurveTo(this.x - this.size, this.y + this.size / 2, this.x - this.size / 2, this.y - this.size / 2, this.x, this.y - this.size / 2);
            crc2.fillStyle = this.color;
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.moveTo(this.x, this.y - this.size / 2);
            crc2.bezierCurveTo(this.x + this.size, this.y - this.size / 4, this.x + this.size / 2, this.y + this.size / 2, this.x, this.y + this.size / 2);
            crc2.bezierCurveTo(this.x - this.size, this.y + this.size / 4, this.x - this.size / 2, this.y - this.size / 2, this.x, this.y - this.size / 2);
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.closePath();
            //Kopf
            crc2.beginPath();
            crc2.moveTo(this.x - 1, this.y + this.size / 2);
            crc2.bezierCurveTo(this.x - this.size, this.y, this.x - 5, this.y - this.size / 2, this.x - 1, this.y - this.size / 2);
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.closePath();
            //Streifen
            crc2.beginPath();
            crc2.moveTo(this.x + 0.25, this.y + this.size / 2);
            crc2.lineTo(this.x, this.y - this.size / 2);
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.closePath();
            crc2.beginPath();
            crc2.moveTo(this.x + 2.25, this.y + this.size / 2);
            crc2.lineTo(this.x + 2.25, this.y - this.size / 2);
            crc2.strokeStyle = "black";
            crc2.stroke();
        }

        move(): void {
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

        setRandomPosition(): void {
            this.x = Math.random() * 200;
            this.y = Math.random() * 200;
        }

        setRandomStyle(): void {
            this.size = Math.random() * 30 + 10;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }
    }

    export class Flower {
        x: number;
        y: number;
        size: number;
        color: string;
        pointColor: string;
        flowerType: number;

        constructor(_x: number, _y: number, _size: number, _flowerType: number) {
            this.x = _x;
            this.y = _y;
            this.size = _size;
            this.flowerType = _flowerType;
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

        draw(): void {
            switch (this.flowerType) {
                case 1:
                    this.blume(this.x - 25, this.y - 6, 5);
                    break;
                case 2:
                    this.tulpe(this.x + 40, this.y - 5);
                    break;
            }

        }

        update(): void {
            this.draw();
        }
    }
}
