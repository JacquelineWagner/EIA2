namespace a08_Canvas {
    export class Hintergrund2 {
        x: number;
        y: number;


        constructor(_x: number, _y: number) {
            console.log("Hey, I'm Bob!");
            this.x = _x;
            this.y = _y;

        }

        drawBienenkorb(_x: number, _y: number): void {


            crc2.beginPath();
            crc2.moveTo(_x, _y);
            crc2.fillStyle = "#DD9A43";
            crc2.fillRect(_x - 13.5, _y + 2 + 10, 20, -17);
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.moveTo(_x, _y - 5);
            crc2.fillStyle = "#DD9A43";
            crc2.arc(_x - 5, _y - 5, 10, 0, Math.PI, true);
            crc2.moveTo(_x - 5.7, _y + 1);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.moveTo(_x + 16, _y - 3);
            crc2.arc(_x - 15, _y - 3, 4, 0, (Math.PI) * 2, false);
            crc2.moveTo(_x + 16, _y - 3);
            crc2.arc(_x - 15, _y + 2, 4, 0, (Math.PI) * 2, false);
            crc2.moveTo(_x + 16, _y - 3);
            crc2.arc(_x - 15, _y + 8, 4, 0, (Math.PI) * 2, false);
            crc2.moveTo(_x + 16, _y - 3);
            crc2.arc(_x + 5, _y - 3, 4, 0, (Math.PI) * 2, false);
            crc2.moveTo(_x + 16, _y - 3);
            crc2.arc(_x + 5, _y + 2, 4, 0, (Math.PI) * 2, false);
            crc2.moveTo(_x + 16, _y - 3);
            crc2.arc(_x + 5, _y + 8, 4, 0, (Math.PI) * 2, false);
            crc2.fillStyle = "#DD9A43";
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.moveTo(_x - 10, _y + 4);
            crc2.fillStyle = "#2C190A";
            crc2.arc(_x - 10, _y + 4, 3, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.fill();
        }
        
        drawvogel(_x: number, _y: number): void {


        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.strokeStyle = "#000000";
        crc2.fillStyle = "#000000";
        crc2.arcTo(_x + 5, _y - 20, _x + 8, _y - 20, 20);
        crc2.arcTo(_x + 8, _y - 25, _x, _y, 20);
        crc2.arcTo(_x - 5, _y - 20, _x - 8, _y - 20, 20);
        crc2.arcTo(_x - 8, _y - 25, _x, _y, 15);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

    }
        
        
        drawwolke(_x: number, _y: number): void {


        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.strokeStyle = "#ffffff";
        crc2.fillStyle = "#ffffff";
        crc2.arc(_x - 4, _y, 15, 0, Math.PI * 2, true);
        crc2.arc(_x - 10, _y - 12, 15, 0, Math.PI * 2, true);
        crc2.arc(_x + 2, _y - 22, 15, 0, Math.PI * 2, true);
        crc2.arc(_x + 20, _y - 17, 15, 0, Math.PI * 2, true);
        crc2.arc(_x + 20, _y - 17, 14, 0, Math.PI * 2, true);
        crc2.arc(_x + 28, _y - 8, 15, 0, Math.PI * 2, true);
        crc2.arc(_x + 28, _y - 8, 14, 0, Math.PI * 2, true);
        crc2.arc(_x + 18, _y, 15, 0, Math.PI * 2, true);
        crc2.arc(_x + 18, _y, 14, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

    }



    drawbaum(_x: number, _y: number): void {

        //        Stamm
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.strokeStyle = "#2C190A";
        crc2.fillStyle = "#2C190A";
        crc2.lineTo(_x, _y + 70);
        crc2.lineTo(_x + 20, _y + 70);
        crc2.lineTo(_x + 20, _y);

        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        //        Krone
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.strokeStyle = "#013713";
        crc2.fillStyle = "#013713";
        crc2.arc(_x - 4, _y, 20, 0, Math.PI * 2, true);
        crc2.arc(_x - 11, _y - 16, 18, 0, Math.PI * 2, true);
        crc2.arc(_x - 2, _y - 32, 18, 0, Math.PI * 2, true);
        crc2.arc(_x + 13, _y - 34, 18, 0, Math.PI * 2, true);
        crc2.arc(_x + 25, _y - 25, 18, 0, Math.PI * 2, true);
        crc2.arc(_x + 25, _y - 25, 16, 0, Math.PI * 2, true);
        crc2.arc(_x + 26, _y - 11, 19, 0, Math.PI * 2, true);
        crc2.arc(_x + 26, _y - 11, 20, 0, Math.PI * 2, true);
        crc2.arc(_x + 21, _y, 20, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }

     drawhaus(_x: number, _y: number): void {

        //        Gebäude
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.strokeStyle = "#D8C8AE";
        crc2.fillStyle = "#D8C8AE";
        crc2.lineTo(_x, _y - 50);
        crc2.lineTo(_x + 40, _y - 50);
        crc2.lineTo(_x + 40, _y);
        crc2.fill();
        crc2.stroke();


        //        Kamin
        crc2.beginPath();
        crc2.moveTo(_x + 30, _y - 60);
        crc2.strokeStyle = "#3F130A";
        crc2.fillStyle = "#3F130A";
        crc2.lineTo(_x + 30, _y - 70);
        crc2.lineTo(_x + 35, _y - 70);
        crc2.lineTo(_x + 35, _y - 60);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();


        //        Dach
        crc2.beginPath();
        crc2.moveTo(_x, _y - 50);
        crc2.strokeStyle = "#ff0000";
        crc2.fillStyle = "#ff0000";
        crc2.lineTo(_x + 20, _y - 85);
        crc2.lineTo(_x + 40, _y - 50);
        crc2.lineTo(_x, _y - 50);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();



        //        Tür
        crc2.beginPath();
        crc2.moveTo(_x + 5, _y);
        crc2.strokeStyle = "#3F130A";
        crc2.fillStyle = "#3F130A";
        crc2.lineTo(_x + 5, _y - 20);
        crc2.lineTo(_x + 15, _y - 20);
        crc2.lineTo(_x + 15, _y);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();


        //        Fenster
        crc2.beginPath();
        crc2.moveTo(_x + 25, _y - 30);
        crc2.strokeStyle = "#3F130A";
        crc2.fillStyle = "#3F130A";
        crc2.lineTo(_x + 25, _y - 40);
        crc2.lineTo(_x + 35, _y - 40);
        crc2.lineTo(_x + 35, _y - 30);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();


    }



     drawberg1(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.strokeStyle = "#666666";
        crc2.fillStyle = "#666666";
        crc2.lineTo(_x + 30, _y - 60);
        crc2.lineTo(_x + 60, _y - 0);

        //        crc2.arcTo(_x + 5 , _y - 25,  _x + 10, _y - 25, 20);
        //        crc2.lineTo(_x + 22, _y - 20 );
        //        crc2.strokeStyle = "#ff0000";
        //        crc2.arcTo(_x + 22 , _y - 20,  _x + 5, _y, 20);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

    }


     drawberg2(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.strokeStyle = "#666666";
        crc2.fillStyle = "#666666";
        crc2.lineTo(_x + 25, _y - 50);
        crc2.lineTo(_x + 50, _y - 0);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();


    }

     drawsonne(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.strokeStyle = "#FFFF00";
        crc2.fillStyle = "#FFFF00";
        crc2.arc(_x, _y, 15, 0, Math.PI * 2, true); // Kreis

        //        Sonnenstrahlen
        crc2.moveTo(_x, _y);
        crc2.moveTo(_x - 22, _y);
        crc2.lineTo(_x - 40, _y + 3);
        crc2.moveTo(_x, _y);

        crc2.moveTo(_x - 19, _y - 10);
        crc2.lineTo(_x - 35, _y - 18);


        crc2.moveTo(_x - 10, _y - 18);
        crc2.lineTo(_x - 30, _y - 50);


        crc2.moveTo(_x + 2, _y - 20);
        crc2.lineTo(_x - 22, _y - 410);



        crc2.moveTo(_x + 15, _y - 15);
        crc2.lineTo(_x + 48, _y - 50);


        crc2.moveTo(_x + 20, _y - 6);
        crc2.lineTo(_x + 40, _y - 10);

        crc2.moveTo(_x + 22, _y + 4);
        crc2.lineTo(_x + 40, _y + 6);

        crc2.moveTo(_x + 18, _y + 14);
        crc2.lineTo(_x + 35, _y + 25);


        crc2.moveTo(_x + 8, _y + 20);
        crc2.lineTo(_x + 15, _y + 38);


        crc2.moveTo(_x - 4, _y + 20);
        crc2.lineTo(_x - 7, _y + 38);

        crc2.moveTo(_x - 15, _y + 15);
        crc2.lineTo(_x - 30, _y + 25);


        crc2.closePath();
        crc2.fill();
        crc2.stroke();


    }



    }
}