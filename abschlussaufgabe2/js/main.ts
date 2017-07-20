//
//Aufgabe: Abschlussaufgabe
//Name: Jacqueline Wagner
//Matrikelnummer: 254786
//Datum: 20
//20.07.2017
//    

//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
//Er wurde nicht kopiert und auch nicht diktiert.


namespace a2_Canvas {
    export var crc2: CanvasRenderingContext2D;
    var canvas: HTMLCanvasElement;


    export let ameisenData: Ameisen[] = [];
    export let n: number = 10;
    let imgData: ImageData;
    export let fischData: Fisch[] = [];


    window.addEventListener("load", init);
    function init(_event: Event): void {


        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        //Wiese
        crc2.fillStyle = "#8ACA36";
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        //Himmel
        var ombre: any = crc2.createLinearGradient(10, 20, -2, 100);
        ombre.addColorStop(0, "#A9D0F5");
        ombre.addColorStop(1, "white");
        crc2.fillStyle = ombre;
        crc2.fillRect(0, 0, canvas.width, 150);
        let s: Hintergrund2 = new Hintergrund2(0, 0);

        for (var i: number = 0; i < 2; i++) {
            let s: Hintergrund2 = new Hintergrund2(0, 0);
            let f: Fisch = new Fisch(0, 0);


            s.drawlake(30, 305);
            s.drawSun(580, 30);
            s. drawCloud(80, 50);
            s. drawCloud(200, 80);
            s. drawCloud(230, 85);
            s. drawCloud(480, 70);
            s. drawCloud(380, 85);
            s.drawBird(220, 36);
            s.drawBird(314, 58);
            s.drawBird(160, 82);
            s.drawBird(460, 82);
            s.drawAnthill(225, 360);
            s.drawBlanket(430, 210);
            s.drawBush(120, 170);
            s.drawBush(140, 175);
            s. drawPlateSmall(440, 235);
            s. drawPlateSmall(500, 245);
            s. drawPlateSmall(460, 310);
            s. drawPlateSmall(490, 320);
            s.drawBasket(510, 290);
            s.drawFlower(220, 260);
            s.drawFlower(260, 300);
            s.drawFlower(320, 360);
            s.drawFlower(350, 220);
            s.drawFlower(310, 240);
            s.drawFlower(360, 280);
            s.drawFlower(400, 400);
            s.drawFlower(490, 390);
            s.drawFlower(480, 200);
            s.drawWorm(180, 210);
            s.drawPlateBig(465, 270);

            s.drawCake(465, 270);
            s.drawsBubble(190, 170);
        }


        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        window.setTimeout(animate, 30);
        document.getElementById("ameise").addEventListener("click", addAmeise);

        document.getElementById("ameise").addEventListener("touchstart", addAmeise);
        document.getElementById("fischis").addEventListener("click", addFisch);
        document.getElementById("fischis").addEventListener("touchstart", addFisch);
        document.getElementById("entfernen").addEventListener("click", addAmeiseEntfernen);
    }

    
    
    

    //Funktionen

    function addAmeiseEntfernen(): void {
        for (let i: number = 0; i < ameisenData.length; i++) {
            ameisenData.splice(i, 1);
            console.log(ameisenData);
        }
    }




    function animate(): void {
        crc2.putImageData(imgData, 0, 0);

        for (let i: number = 0; i < ameisenData.length; i++) {
            let b: Ameisen = ameisenData[i];
            ameisenData[i].update();
        }
        for (let i: number = 0; i < fischData.length; i++) {
            let f: Fisch = fischData[i];
            fischData[i].update();
        }
        window.setTimeout(animate, 30);
    }




    function addAmeise(): void {
        console.log("test");
        ameisenData.push(new Ameisen(225, 360));
        console.log(ameisenData);
    }


    function addFisch(): void {
        let _x: number = (Math.random() * (0 + 140)) + 0;
        let _y: number = (Math.random() * (300 - 150)) + 200;
        fischData.push(new Fisch(_x, _y));
        n++;
    }

}