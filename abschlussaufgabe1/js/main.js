//
//Aufgabe: Abschlussaufgabe
//Name: Jacqueline Wagner
//Matrikel: 254786
//Datum: 20
//21.05.2017
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
//Er wurde nicht kopiert und auch nicht diktiert.
var a_Canvas;
(function (a_Canvas) {
    var canvas;
    a_Canvas.beeData = [];
    a_Canvas.n = 10;
    let imgData;
    window.addEventListener("load", init);
    function init(_event) {
        let x;
        let y;
        canvas = document.getElementsByTagName("canvas")[0];
        a_Canvas.crc2 = canvas.getContext("2d");
        //Wiese
        a_Canvas.crc2.fillStyle = "#8ACA36";
        a_Canvas.crc2.fillRect(0, 0, canvas.width, canvas.height);
        //Himmel
        var ombre = a_Canvas.crc2.createLinearGradient(10, 20, -2, 100);
        ombre.addColorStop(0, "#A9D0F5");
        ombre.addColorStop(1, "white");
        a_Canvas.crc2.fillStyle = ombre;
        a_Canvas.crc2.fillRect(0, 0, canvas.width, 150);
        let s = new a_Canvas.Hintergrund2(0, 0);
        for (var i = 0; i < 2; i++) {
            let s = new a_Canvas.Hintergrund2(0, 0);
            let f = new a_Canvas.Fisch(0, 0);
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
            s.drawTeller(440, 235);
            s.drawTeller(480, 265);
            s.drawTeller(460, 310);
            s.drawTeller(490, 320);
            s.drawKorb(510, 290);
            s.blume(200, 200);
            s.blume(220, 260);
            s.blume(260, 300);
            s.blume(320, 360);
            s.blume(350, 210);
            s.blume(310, 240);
            s.blume(360, 280);
            s.blume(400, 400);
            s.blume(490, 390);
            s.blume(480, 200);
            s.drawRaube(180, 220);
            s.drawKuchen(440, 236);
            f.drawfisch(120, 320);
        }
        imgData = a_Canvas.crc2.getImageData(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < 5; i++) {
            //            var r: Honeybees = new Honeybees(325, 120, Math.random() * 10 + 5, "yellow");
            //            beeData.push(r);
            var b = new a_Canvas.DummeBienen(225, 360);
            a_Canvas.beeData.push(b);
        }
        window.setTimeout(animate, 50);
        canvas.addEventListener("click", addBee);
        canvas.addEventListener("push", addBee);
    }
    //Funktionen
    function animate() {
        a_Canvas.crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < a_Canvas.beeData.length; i++) {
            let b = a_Canvas.beeData[i];
            a_Canvas.beeData[i].update();
        }
        window.setTimeout(animate, 50);
    }
    function addBee() {
        a_Canvas.beeData.push(new a_Canvas.DummeBienen(225, 360));
        a_Canvas.n++;
    }
})(a_Canvas || (a_Canvas = {}));
//# sourceMappingURL=main.js.map