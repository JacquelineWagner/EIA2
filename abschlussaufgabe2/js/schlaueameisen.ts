namespace a_Canvas {

    export class schlaueAmeisen extends Ameisen {

        xPosition: number;
        yPosition: number;
        speed: number;

        constructor(_x: number, _y: number, _size: number, _color: string) {
            super(_x, _y, _size, _color);
            this.speed = 0.03;
            this.setAnfangPosition();
            this.setRandomPosition();
        }

        //        update(): void {
        //            this.move();
        //            this.draw();
        //        }

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
            let randomFlower: number = Math.round(Math.random() * (flower.length - 1));
            this.xPosition = flower[randomFlower].x;
            this.yPosition = flower[randomFlower].y;
         
        }
        setAnfangPosition(): void {
            this.x = 325;
            this.y = 120;
        }



        setRandomStyle(): void {
            this.size = Math.random() * 30 + 10;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }


    }




}