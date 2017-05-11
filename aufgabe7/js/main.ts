namespace a07_Canvas {
    export var crc2: CanvasRenderingContext2D;
    var canvas: HTMLCanvasElement;

    let blume: Flower;
    let tulpe: Flower;
    let flower: Flower[] = [tulpe, blume];

    let beeData: Bee[] = [];
    let n: number = 10;
    let imgData: ImageData;

    window.addEventListener("load", init);
    function init(_event: Event): void {
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        //Wiese
        crc2.fillStyle = "#1C8913";
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        //Himmel
        var ombre: any = crc2.createLinearGradient(0, 10, 0, 100);
        ombre.addColorStop(0, "#A9D0F5");
        ombre.addColorStop(1, "white");
        crc2.fillStyle = ombre;
        crc2.fillRect(0, 0, canvas.width, 80);

        drawberg1(0, 80);
        drawberg2(40, 80);
        drawberg1(65, 80);
        drawsonne(360, 30);
        drawhaus(220, 143);
        drawbaum(320, 120);
        drawvogel(220, 36);
        drawvogel(284, 58);
        drawwolke(140, 40);
        drawvogel(180, 62);
        drawBienenkorb(320, 150);

        for (var i: number = 0; i < 2; i++) {
            let randomFlower: number = Math.floor((Math.random() * 3) + 0);
            let _x: number = (Math.random() * (240 + 20)) + 0;
            let _y: number = (Math.random() * (240 - 130)) + 130;

            let s: Flower = new Flower(0, 0, 0, 0);

            s.blume(_x - 25, _y - 6, 5);
            s.blume(_x - 10, _y + 5, 6);
            s.blume(_x + 10, _y - 5, 4);
            s.tulpe(_x + 40, _y - 5);
            s.blume3(370, 200);
        }

        /**************************************************************************************************************************
        *Aufgabe 6a
        **************************************************************************************************************************/

        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        for (let i: number = 0; i < 10; i++) {
            beeData.push(new Bee(310, 150, Math.random() * 10 + 5, "hsl(" + Math.random() * 180 + ", 80%, 50%)"));
        }
        window.setTimeout(animate, 30);
        canvas.addEventListener("click", addBee);
        canvas.addEventListener("push", addBee);

        for (let i: number = 0; i < 5; i++) {
            let z: number = Math.random() * (2 - 1 + 1) + 1;
            if (z == 1 || 2) {
                let s: Flower = new Flower(0, 0, 0, Math.random() * (2 - 1 + 1) + 1);
                s.draw();
            }
        }
        window.setTimeout(animateFolwer, 0);
    }

    //Funktionen 

    function animate(): void {
        crc2.putImageData(imgData, 0, 0);
        for (let i: number = 0; i < beeData.length; i++) {
            beeData[i].update();
        }

        window.setTimeout(animate, 20);
    }

    function addBee(): void {
        beeData.push(new Bee(310, 150, Math.random() * 10 + 5, "hsl(" + Math.random() * 180 + ", 80%, 50%)"));
        n++;
    }



    function animateFolwer(): void {
        crc2.putImageData(imgData, 0, 0);
        for (let i: number = 0; i < flower.length; i++) {
            flower[i].update();
        }

        window.setTimeout(animate, 20);
    }
    /********************************************************************************************************
    *Aufgabe 4
    **********************************************************************************************************/
    function drawBienenkorb(_x: number, _y: number): void {


        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.fillStyle = "#DD9A43";
        crc2.fillRect(_x - 13.5, _y + 2 + 10, 20, -17)
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



    function drawblume2(_x: number, _y: number): void {

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




    function drawblume1(_x: number, _y: number): void {

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



    function drawvogel(_x: number, _y: number): void {


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




    function drawwolke(_x: number, _y: number): void {


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



    function drawbaum(_x: number, _y: number): void {

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

    function drawhaus(_x: number, _y: number): void {

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



    function drawberg1(_x: number, _y: number): void {
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


    function drawberg2(_x: number, _y: number): void {
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

    function drawsonne(_x: number, _y: number): void {
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