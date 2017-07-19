//
//Aufgabe: 7
//Name: Jacqueline Wagner
//Matrikel: 254786
//Datum: 20
//13.05.2017
//    

//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
//Er wurde nicht kopiert und auch nicht diktiert.


//Die Aufgabe wurde in Zusammenarbeit mit Selina Mazzaro und Jana Burger erstellt.*/






namespace a2_Canvas {

    export class Fisch {
        x: number;
        y: number;


        constructor(_x: number, _y: number) {
            console.log("Hey, I'm jessy!");
            this.x = _x;
            this.y = _y;

        }

        update(): void {
            this.move();
            this.drawfisch();
        }


        //       
        drawfisch(): void {

            crc2.beginPath();
            crc2.moveTo(this.x + 4, this.y);
            crc2.strokeStyle = "#58006F";
            crc2.fillStyle = "#58006F";
            crc2.lineTo(this.x + 8, this.y - 6);
            crc2.lineTo(this.x + 8, this.y + 4);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.x, this.y - 10 / 2);
            crc2.bezierCurveTo(this.x + 10, this.y - 10 / 2, this.x + 10 / 2, this.y + 10 / 2, this.x, this.y + 10 / 2);
            crc2.bezierCurveTo(this.x - 10, this.y + 10 / 2, this.x - 10 / 2, this.y - 10 / 2, this.x, this.y - 10 / 2);
            crc2.fillStyle = "#58006F";
            crc2.fill();
            crc2.closePath();

        }

        move(): void {
            this.x += Math.random() * 5 - 3;
            this.y += Math.random() * 4 - 2;


        }

        setRandomPosition(): void {
            this.x = Math.random() * 200;
            this.y = Math.random() * 200;
        }

    }
}