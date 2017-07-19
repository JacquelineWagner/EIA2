namespace a2_Canvas {


    export class DummeAmeisen extends Ameisen {

        xPosition: number;
        yPosition: number;
        speed: number;

        constructor(_x: number, _y: number) {
            super(_x, _y);
            this.speed = 0.02;
            this.setAnfangPosition();
            this.setRandomPosition();





        }

        //        update(): void {
        //            this.move(); 
        //            this.draw();
        //        }

        draw(): void {
            //K�rper 
            crc2.beginPath();
            crc2.moveTo(this.x, this.y - 5 / 2);
            crc2.bezierCurveTo(this.x + 5, this.y - 5 / 2, this.x + 5 / 2, this.y + 5 / 2, this.x, this.y + 5 / 2);
            crc2.bezierCurveTo(this.x - 5, this.y + 5 / 2, this.x - 5 / 2, this.y - 5 / 2, this.x, this.y - 5 / 2);
            crc2.fillStyle = "brown";

            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.moveTo(this.x, this.y - 5 / 2);
            crc2.bezierCurveTo(this.x + 5, this.y - 5 / 4, this.x + 5 / 2, this.y + 5 / 2, this.x, this.y + 5 / 2);
            crc2.bezierCurveTo(this.x - 5, this.y + 5 / 4, this.x - 5 / 2, this.y - 5 / 2, this.x, this.y - 5 / 2);
            crc2.strokeStyle = "brown";
            crc2.stroke();
            crc2.closePath();


            crc2.beginPath();
            crc2.moveTo(this.x + 7, this.y);
            crc2.strokeStyle = "brown";
            crc2.fillStyle = "brown";
            crc2.arc(this.x + 4, this.y, 2, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            //            Kopf
            crc2.beginPath();
            crc2.moveTo(this.x + 7, this.y - 2);
            crc2.strokeStyle = "brown";
            crc2.fillStyle = "brown";
            crc2.arc(this.x + 7, this.y - 2, 1.5, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.x + 6, this.y - 2);
            crc2.strokeStyle = "brown";
            crc2.fillStyle = "brown";
            crc2.lineTo(this.x + 9, this.y - 6);
            crc2.moveTo(this.x + 10, this.y - 2);
            crc2.lineTo(this.x + 11, this.y - 4);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();


            //            Beine

            crc2.beginPath();
            crc2.moveTo(this.x, this.y + 2);
            crc2.strokeStyle = "brown";
            crc2.fillStyle = "brown";
            crc2.lineTo(this.x - 1, this.y + 5);
            crc2.moveTo(this.x + 3, this.y + 2);
            crc2.lineTo(this.x + 2, this.y + 5);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

        }

        move(): void {
            let xMove: number = this.xPosition - this.x;
            let yMove: number = this.yPosition - this.y;
            if (Math.abs(xMove) < 0.5 && Math.abs(yMove) < 0.5)
                this.setRandomPosition();
            else {
                this.x += xMove * this.speed;
                this.y += yMove * this.speed;
            }
        }



        setRandomPosition(): void {

            this.xPosition = 465;
            this.yPosition = 270;

        }
        setAnfangPosition(): void {
            this.x = 225;
            this.y = 360;
        }

        //        setRandomStyle(): void {
        //            this.size = Math.random() * 30 + 10;
        //            this.color = "hsl(" + Math.random() * 360 + ", 100;
        //        }


    }




}