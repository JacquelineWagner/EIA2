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
    export class Bienen {
        x: number;
        y: number;
        size: number;
        color: string;

        constructor(_x: number, _y: number, _size: number, _color: string) {
            console.log("Hey, I'm Bob!");
            this.setRandomPosition();
            this.setRandomStyle();
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