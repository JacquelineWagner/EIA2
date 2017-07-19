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
        //Wiese
        a2_Canvas.crc2.fillStyle = "#8ACA36";
        a2_Canvas.crc2.fillRect(0, 0, canvas.width, canvas.height);
        //Himmel
        var ombre = a2_Canvas.crc2.createLinearGradient(10, 20, -2, 100);
        ombre.addColorStop(0, "#A9D0F5");
        ombre.addColorStop(1, "white");
        a2_Canvas.crc2.fillStyle = ombre;
        a2_Canvas.crc2.fillRect(0, 0, canvas.width, 150);
        let s = new a2_Canvas.Hintergrund2(0, 0);
        for (var i = 0; i < 2; i++) {
            let s = new a2_Canvas.Hintergrund2(0, 0);
            let f = new a2_Canvas.Fisch(0, 0);
            s.drawlake(30, 305);
            s.drawsonne(580, 30);
            s.drawwolke(80, 50);
            s.drawwolke(200, 80);
            s.drawwolke(230, 85);
            s.drawwolke(480, 70);
            s.drawwolke(380, 85);
            s.drawvogel(220, 36);
            s.drawvogel(314, 58);
            s.drawvogel(160, 82);
            s.drawvogel(460, 82);
            s.drawAmeisenhaufen(225, 360);
            s.drawDecke(430, 210);
            s.drawbusch(120, 170);
            s.drawbusch(140, 175);
            s.drawTellerklein(440, 235);
            s.drawTellerklein(500, 245);
            s.drawTellerklein(460, 310);
            s.drawTellerklein(490, 320);
            s.drawKorb(510, 290);
            s.blume(220, 260);
            s.blume(260, 300);
            s.blume(320, 360);
            s.blume(350, 220);
            s.blume(310, 240);
            s.blume(360, 280);
            s.blume(400, 400);
            s.blume(490, 390);
            s.blume(480, 200);
            s.drawRaube(180, 210);
            s.drawTellerGross(465, 270);
            s.drawKuchen(465, 270);
            s.drawsBubble(190, 170);
        }
        imgData = a2_Canvas.crc2.getImageData(0, 0, canvas.width, canvas.height);
        window.setTimeout(animate, 30);
        document.getElementById("ameise").addEventListener("click", addAmeise);
        document.getElementById("ameise").addEventListener("touchstart", addAmeise);
        document.getElementById("fischis").addEventListener("click", addFisch);
        document.getElementById("fischis").addEventListener("touchstart", addFisch);
        document.getElementById("entfernen").addEventListener("click", addAmeiseEntfernen);
        //        document.getElementById("vogel").addEventListener("touchstart", addAmeise);
    }
    //Funktionen
    function addAmeiseEntfernen() {
        for (let i = 0; i < a2_Canvas.ameisenData.length; i++) {
            a2_Canvas.ameisenData.splice(i, 1);
        }
    }
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
        window.setTimeout(animate, 30);
    }
    function addAmeise() {
        console.log("test");
        a2_Canvas.ameisenData.push(new a2_Canvas.Ameisen(225, 360));
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