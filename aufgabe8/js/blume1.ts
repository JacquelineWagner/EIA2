//
//Aufgabe: 8
//Name: Jacqueline Wagner
//Matrikel: 254786
//Datum: 20
//13.05.2017
//    

//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
//Er wurde nicht kopiert und auch nicht diktiert.


//Die Aufgabe wurde in Zusammenarbeit mit Selina Mazzaro und Jana Burger erstellt.*/


namespace a08_Canvas {  

export class Blume1 extends Blumen {

        constructor(_x: number, _y: number, _flowerType: string) {
            super (_x, _y, _flowerType);          
        }  


        draw(): void {
           
//            //        Stiel 
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.strokeStyle = "#013713";
            crc2.fillStyle = "#013713";
            crc2.lineTo(this.x, this.y - 15);
            crc2.lineTo(this.x + 1, this.y - 15);
            crc2.lineTo(this.x + 1, this.y);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();


            // Blatt
            crc2.beginPath();
            crc2.moveTo(this.x + 1, this.y - 5);
            crc2.strokeStyle = "#013713";
            crc2.fillStyle = "#013713";
            crc2.lineTo(this.x + 7, this.y - 10);
            crc2.lineTo(this.x + 1, this.y);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            crc2.beginPath();
            crc2.moveTo(this.x + 1, this.y - 5);
            crc2.arcTo(this.x + 1, this.y - 5, this.x + 7, this.y - 10, 20);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();


            //        Blüten
            crc2.beginPath();
            crc2.moveTo(this.x + 0.5, this.y - 15);
            crc2.strokeStyle = "#F72041";
            crc2.fillStyle = "#F72041";
            crc2.arc(this.x - 2, this.y - 14, 3, 0, Math.PI * 2, true);
            crc2.arc(this.x - 4, this.y - 17, 3, 0, Math.PI * 2, true);
            crc2.arc(this.x - 3, this.y - 20, 3, 0, Math.PI * 2, true);
            crc2.arc(this.x + 1.5, this.y - 20, 3, 0, Math.PI * 2, true);
            crc2.arc(this.x + 3, this.y - 17, 3, 0, Math.PI * 2, true);
            crc2.arc(this.x + 3, this.y - 17, 2, 0, Math.PI * 2, true);
            crc2.arc(this.x + 2, this.y - 14, 3, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();


            crc2.beginPath();
            crc2.moveTo(this.x - 0.3, this.y - 17);
            crc2.strokeStyle = "#E0813D";
            crc2.fillStyle = "#E0813D";
            crc2.arc(this.x - 0.3, this.y - 17, 2, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }

        
           


    }
}