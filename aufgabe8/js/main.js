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
var a08_Canvas;
(function (a08_Canvas) {
    var canvas;
    a08_Canvas.flower = [];
    a08_Canvas.beeData = [];
    a08_Canvas.n = 10;
    let imgData;
    window.addEventListener("load", init);
    function init(_event) {
        let x;
        let y;
        canvas = document.getElementsByTagName("canvas")[0];
        a08_Canvas.crc2 = canvas.getContext("2d");
        //Wiese
        a08_Canvas.crc2.fillStyle = "#1C8913";
        a08_Canvas.crc2.fillRect(0, 0, canvas.width, canvas.height);
        //Himmel
        var ombre = a08_Canvas.crc2.createLinearGradient(0, 10, 0, 100);
        ombre.addColorStop(0, "#A9D0F5");
        ombre.addColorStop(1, "white");
        a08_Canvas.crc2.fillStyle = ombre;
        a08_Canvas.crc2.fillRect(0, 0, canvas.width, 80);
        let s = new a08_Canvas.Hintergrund2(0, 0);
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
        console.log(a08_Canvas.flower);
        for (var i = 0; i < 10; i++) {
            let randomFlower = Math.floor((Math.random() * 3) + 0);
            let _x = (Math.random() * (240 + 20)) + 0;
            let _y = (Math.random() * (240 - 130)) + 130;
            let blume1 = new a08_Canvas.Blume1(_x + 10, _y, "blume1");
            a08_Canvas.flower.push(blume1);
            blume1.draw();
            let tulpe = new a08_Canvas.Tulpe(_x - 15, _y, "tulpe");
            a08_Canvas.flower.push(tulpe);
            tulpe.draw();
            let blume3 = new a08_Canvas.Blume3(_x + 20, _y, "blume3");
            a08_Canvas.flower.push(blume3);
            blume3.draw();
        }
        imgData = a08_Canvas.crc2.getImageData(0, 0, canvas.width, canvas.height);
        //        flower.push(new Blumen((Math.random() * (240 + 20)) + 0, (Math.random() * (240 - 130)) + 130, "blume"));
        //        flower.push(new Blumen((Math.random() * (240 + 20)) + 0, (Math.random() * (240 - 130)) + 130, "tulpe"));
        //        flower.push(new Blumen((Math.random() * (240 + 20)) + 0, (Math.random() * (240 - 130)) + 130, "tulpe"));
        //        flower.push(new Blumen((Math.random() * (240 + 20)) + 0, (Math.random() * (240 - 130)) + 130, "blume"));
        //        flower.push(new Blumen((Math.random() * (240 + 20)) + 0, (Math.random() * (240 - 130)) + 130, "tulpe"));
        //        flower.push(new Blumen((Math.random() * (240 + 20)) + 0, (Math.random() * (240 - 130)) + 130, "blume"));
        //        flower.push(new Blumen((Math.random() * (240 + 20)) + 0, (Math.random() * (240 - 130)) + 130, "blume3"));
        //        flower.push(new Blumen((Math.random() * (240  0random() * (240 - 130)) + 130, "blume3"));
        for (let i = 0; i < 5; i++) {
            var r = new a08_Canvas.Honeybees(325, 120, Math.random() * 10 + 5, "yellow");
            a08_Canvas.beeData.push(r);
            var b = new a08_Canvas.DummeBienen(325, 120, Math.random() * 10 + 5, "yellow");
            a08_Canvas.beeData.push(b);
        }
        window.setTimeout(animate, 20);
        canvas.addEventListener("click", addBee);
        canvas.addEventListener("push", addBee);
    }
    //Funktionen
    function animate() {
        a08_Canvas.crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < a08_Canvas.beeData.length; i++) {
            let b = a08_Canvas.beeData[i];
            a08_Canvas.beeData[i].update();
        }
        window.setTimeout(animate, 20);
    }
    function addBee() {
        a08_Canvas.beeData.push(new a08_Canvas.DummeBienen(310, 150, Math.random() * 10 + 5, "hsl(" + Math.random() * 180 + ", 80%, 50%)"));
        a08_Canvas.n++;
    }
})(a08_Canvas || (a08_Canvas = {}));
//# sourceMappingURL=main.js.map