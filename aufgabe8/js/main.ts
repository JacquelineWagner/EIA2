//
//Aufgabe: 8
//Name: Jacqueline Wagner
//Matrikel: 254786
//Datum: 20
//21.05.2017
//    

//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
//Er wurde nicht kopiert und auch nicht diktiert.


//Die Aufgabe wurde in Zusammenarbeit mit Selina Mazzaro und Jana Burger erstellt.*/


namespace a08_Canvas {
    export var crc2: CanvasRenderingContext2D;
    var canvas: HTMLCanvasElement;


    export let flower: Blumen[] = [];

    export let beeData: Bienen[] = [];
    export let n: number = 10;
    let imgData: ImageData;





    window.addEventListener("load", init);
    function init(_event: Event): void {

        let x: number;
        let y: number;

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


        let s: Hintergrund2 = new Hintergrund2(0, 0);

        s.drawwolke(140, 40);
        s.drawvogel(220, 36);
        s.drawvogel(284, 58);
        s.drawvogel(180, 62);
        s.drawberg1(0, 80);
        s.drawberg2(40, 80);
        s.drawberg1(65, 80);
        s.drawsonne(360, 30);
        s.drawhaus(220, 143);
        s.drawbaum(320, 120);
        s.drawBienenkorb(320, 150);



        //        //Flowers
        //        for (let i: number = 0; i < n; i++) {
        //            y = Math.floor(Math.random() * ((canvas.height / 2 + canvas.height / 5) - (canvas.height / 2 + 20) + 1)) + canvas.height / 2 + 20;
        //
        //            switch (Math.floor((Math.random() * 4) + 0)) {
        //                case 0:
        //                    new Blumen(Math.floor(Math.random() * (canvas.width - 0 + 1)), y, "blume");
        //                    break;
        //                case 1:
        //                    new Blumen(Math.floor(Math.random() * (canvas.width - 0 + 1)), y, "tulpe");
        //                    break;
        //                default:
        //                    break;
        //            }
        //        }

        console.log(flower);

        for (var i: number = 0; i < 10; i++) {
            let randomFlower: number = Math.floor((Math.random() * 3) + 0);
            let _x: number = (Math.random() * (240 + 20)) + 0;
            let _y: number = (Math.random() * (240 - 130)) + 130;



            let blume1: Blumen = new Blume1(_x + 10, _y, "blume1");
            flower.push(blume1);
            blume1.draw();



            let tulpe: Blumen = new Tulpe(_x - 15, _y, "tulpe");
            flower.push(tulpe);
            tulpe.draw();



            let blume3: Blumen = new Blume3(_x + 20, _y, "blume3");
            flower.push(blume3);
            blume3.draw();




        }


        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);



        //        flower.push(new Blumen((Math.random() * (240 + 20)) + 0, (Math.random() * (240 - 130)) + 130, "blume"));
        //        flower.push(new Blumen((Math.random() * (240 + 20)) + 0, (Math.random() * (240 - 130)) + 130, "tulpe"));
        //        flower.push(new Blumen((Math.random() * (240 + 20)) + 0, (Math.random() * (240 - 130)) + 130, "tulpe"));
        //        flower.push(new Blumen((Math.random() * (240 + 20)) + 0, (Math.random() * (240 - 130)) + 130, "blume"));
        //        flower.push(new Blumen((Math.random() * (240 + 20)) + 0, (Math.random() * (240 - 130)) + 130, "tulpe"));
        //        flower.push(new Blumen((Math.random() * (240 + 20)) + 0, (Math.random() * (240 - 130)) + 130, "blume"));
        //        flower.push(new Blumen((Math.random() * (240 + 20)) + 0, (Math.random() * (240 - 130)) + 130, "blume3"));
        //        flower.push(new Blumen((Math.random() * (240  0random() * (240 - 130)) + 130, "blume3"));



        for (let i: number = 0; i < 5; i++) {

            var r: Honeybees = new Honeybees(325, 120, Math.random() * 10 + 5, "yellow");
            beeData.push(r);

            var b: DummeBienen = new DummeBienen(325, 120, Math.random() * 10 + 5, "yellow");
            beeData.push(b);
        }








        window.setTimeout(animate, 20);
        canvas.addEventListener("click", addBee);
        canvas.addEventListener("push", addBee);

    }






    //Funktionen


    function animate(): void {
        crc2.putImageData(imgData, 0, 0);




        for (let i: number = 0; i < beeData.length; i++) {
            let b: Bienen = beeData[i];
            beeData[i].update();
        }

        window.setTimeout(animate, 20);
    }

    function addBee(): void {
        beeData.push(new DummeBienen(310, 150, Math.random() * 10 + 5, "hsl(" + Math.random() * 180 + ", 80%, 50%)"));
        n++;
    }



}