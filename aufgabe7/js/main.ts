namespace a07_Canvas {
    export var crc2: CanvasRenderingContext2D;
    var canvas: HTMLCanvasElement;


    let flower: Flower[] = [];

    let beeData: Bee[] = [];
    let n: number = 10;
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

        for (var i: number = 0; i < 2; i++) {
            let s: Hintergrund = new Hintergrund(0, 0);


            s.drawvogel(220, 36);
            s.drawvogel(284, 58);
            s.drawvogel(180, 62);
            s.drawberg1(0, 80);
            s.drawberg2(40, 80);
            s.drawberg1(65, 80);
            s.drawsonne(360, 30);
            s.drawhaus(220, 143);
            s.drawbaum(320, 120);
            s.drawwolke(140, 40);
            s.drawBienenkorb(320, 150);

        }

        //Flowers
        for (let i: number = 0; i < n; i++) {
            y = Math.floor(Math.random() * ((canvas.height / 2 + canvas.height / 5) - (canvas.height / 2 + 20) + 1)) + canvas.height / 2 + 20;

            switch (Math.floor((Math.random() * 4) + 0)) {
                case 0:
                    new Flower(Math.floor(Math.random() * (canvas.width - 0 + 1)), y, "blume");
                    break;
                case 1:
                    new Flower(Math.floor(Math.random() * (canvas.width - 0 + 1)), y, "tulpe");
                    break;
                default:
                    break;
            }
        }

        console.log(flower);

        //        for (var i: number = 0; i < 2; i++) {
        //            let randomFlower: number = Math.floor((Math.random() * 3) + 0);
        //            let _x: number = (Math.random() * (240 + 20)) + 0;
        //            let _y: number = (Math.random() * (240 - 130)) + 130;
        //
        //            let s: Flower = new Flower(0, 0, "");
        //
        //            s.blume(_x - 25, _y - 6, 5);
        //            s.blume(_x - 10, _y + 5, 6);
        //            s.blume(_x + 10, _y - 5, 4);
        //            s.tulpe(_x + 40, _y - 5);
        //            s.blume3(370, 200);
        //        }


        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);



        flower.push(new Flower((Math.random() * (240 + 20)) + 0, (Math.random() * (240 - 130)) + 130, "tulpe"));
        flower.push(new Flower((Math.random() * (240 + 20)) + 0, (Math.random() * (240 - 130)) + 130, "blume"));



        for (let i: number = 0; i < 10; i++) {
            beeData.push(new Bee(310, 150, Math.random() * 10 + 5, "hsl(" + Math.random() * 180 + ", 80%, 50%)"));
        }
        window.setTimeout(animate, 30);
        canvas.addEventListener("click", addBee);
        canvas.addEventListener("push", addBee);

    }

    //Funktionen 

    function animate(): void {
        crc2.putImageData(imgData, 0, 0);

        for (let i: number = 0; i < flower.length; i++) {
            let s: Flower = flower[i];
            s.update();


        }



        for (let i: number = 0; i < beeData.length; i++) {
            beeData[i].update();
        }

        window.setTimeout(animate, 20);
    }

    function addBee(): void {
        beeData.push(new Bee(310, 150, Math.random() * 10 + 5, "hsl(" + Math.random() * 180 + ", 80%, 50%)"));
        n++;
    }





















}