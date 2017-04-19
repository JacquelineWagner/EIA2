//
//Aufgabe: 4
//Name: Jacqueline Wagner
//Matrikel: 254786
//Datum: 13.04.2017
//    

//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
//Er wurde nicht kopiert und auch nicht diktiert.*/


namespace L4_Canvas {
    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;

    function init(_event: Event): void {
        console.log("Hallo");
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];

        crc2 = canvas.getContext("2d");
        console.log(crc2);

        crc2.fillStyle = "#1C8913";
        crc2.fillRect(0, 0, canvas.width, canvas.height);

        crc2.fillStyle = "#43A3FA";
        crc2.fillRect(0, 0, canvas.width, 90);



        berg1(0, 90);
        berg2(40, 90);
        berg1(65, 90);
        sonne(360, 30);
        haus(220, 143);
        baum(320, 150);
        vogel(220, 36);
        vogel(284, 58);
        wolke(140, 40);
        vogel(180, 62);
        blume1(200, 200);
        blume1(100, 150);
        blume2(120, 180);
        blume2(60, 220);
        blume3(370, 200);
        blume3(300, 180);

    }

    function blume3(_x: number, _y: number): void {
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



        //Bl�te
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
    function blume2(_x: number, _y: number): void {

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




    function blume1(_x: number, _y: number): void {

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



    function vogel(_x: number, _y: number): void {


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




    function wolke(_x: number, _y: number): void {


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



    function baum(_x: number, _y: number): void {

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

    function haus(_x: number, _y: number): void {

        //        Geb�ude
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



        //        T�r
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



    function berg1(_x: number, _y: number): void {
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


    function berg2(_x: number, _y: number): void {
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

    function sonne(_x: number, _y: number): void {
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