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


namespace a07_Canvas {  

export class Flower2 {
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
               
            }

        }
        
        
        update(): void {
            this.draw();
        }

//       
        blume(_x: number, _y: number, _size: number): void {
          

            //        Bl�ten
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



    }
}