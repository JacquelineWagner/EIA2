//
//Aufgabe: Abschlussaufgabe
//Name: Jacqueline Wagner
//Matrikelnummer: 254786
//Datum: 20
//21.05.2017
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
//Er wurde nicht kopiert und auch nicht diktiert.
var a2_Canvas;
(function (a2_Canvas) {
    var canvas;
    a2_Canvas.ameisenData = [];
    a2_Canvas.n = 10;
    let imgData;
    a2_Canvas.fischData = [];
    window.addEventListener("load", init);
    function init(_event) {
        //        let x: number;
        //        let y: number;
        canvas = document.getElementsByTagName("canvas")[0];
        a2_Canvas.crc2 = canvas.getContext("2d");
        //        //Wiese
        //        crc2.fillStyle = "#8ACA36";
        //        crc2.fillRect(0, 0, canvas.width, canvas.height);
        //        //Himmel
        //        var ombre: any = crc2.createLinearGradient(10, 20, -2, 100);
        //        ombre.addColorStop(0, "#A9D0F5");
        //        ombre.addColorStop(1, "white");
        //        crc2.fillStyle = ombre;
        //        crc2.fillRect(0, 0, canvas.width, 150);
        let s = new a2_Canvas.Hintergrund2(0, 0);
        for (var i = 0; i < 2; i++) {
            let s = new a2_Canvas.Hintergrund2(0, 0);
            let f = new a2_Canvas.Fisch(0, 0);
            //            s.drawlake(30, 305);
            //            s.drawsonne(580, 30);
            //            s.drawwolke(80, 50);
            //            s.drawwolke(200, 80);
            //            s.drawwolke(230, 85);
            //            s.drawwolke(480, 70);
            //            s.drawwolke(380, 85);
            //            s.drawvogel(220, 36);
            s.drawvogel(314, 58);
        }
        imgData = a2_Canvas.crc2.getImageData(0, 0, canvas.width, canvas.height);
        //
        //        for (let i: number = 0; i < 3; i++) {
        //
        //            //            var r: Honeybees = new Honeybees(325, 120, Math.random() * 10 + 5, "yellow");
        //            //            ameisenData.push(r);
        //
        //            var b: DummeAmeisen = new DummeAmeisen(225, 360);
        //            ameisenData.push(b);
        //        }
        window.setTimeout(animate, 50);
        document.getElementById("ameise").addEventListener("click", addAmeise);
        document.getElementById("ameise").addEventListener("touchstart", addAmeise);
        document.getElementById("fischis").addEventListener("click", addFisch);
        document.getElementById("fischis").addEventListener("touchstart", addFisch);
        document.getElementById("vogel").addEventListener("click", addAmeise);
        document.getElementById("vogel").addEventListener("touchstart", addAmeise);
    }
    //Funktionen
    function animate() {
        a2_Canvas.crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < a2_Canvas.ameisenData.length; i++) {
            let b = a2_Canvas.ameisenData[i];
            a2_Canvas.ameisenData[i].update();
        }
        for (let i = 0; i < a2_Canvas.fischData.length; i++) {
            let f = a2_Canvas.fischData[i];
            a2_Canvas.fischData[i].update();
        }
        window.setTimeout(animate, 50);
    }
    function addAmeise() {
        a2_Canvas.ameisenData.push(new a2_Canvas.DummeAmeisen(225, 360));
        a2_Canvas.n++;
    }
    function addFisch() {
        //         let randomFlower: number = Math.floor((Math.random() * 3) + 0);
        console.log("funktioniert");
        let _x = (Math.random() * (0 + 140)) + 0;
        let _y = (Math.random() * (300 - 150)) + 200;
        a2_Canvas.fischData.push(new a2_Canvas.Fisch(_x, _y));
        a2_Canvas.n++;
    }
})(a2_Canvas || (a2_Canvas = {}));
//# sourceMappingURL=main.js.map