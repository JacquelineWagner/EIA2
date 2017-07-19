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

namespace a2_Canvas {
    export class Ameisen {
        x: number;
        y: number;
        




        constructor(_x: number, _y: number) {
            console.log("Hey, I'm Bob!");
            this.setRandomPosition();

            this.x = _x;
            this.y = _y;

        }

        update(): void {
            this.move();
            this.draw();
        }

        
        
        
        draw(): void {
            //         Draw Funktion
        }

        
        move(): void {
            //        Move Funktion
        }
        
        

        setRandomPosition(): void {
            //        Move Funktion
        }
        setRandomStyle(): void {
            //setRandomStyle Funktion

        }

     
    }

}