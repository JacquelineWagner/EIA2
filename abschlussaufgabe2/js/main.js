//
//Aufgabe: Abschlussaufgabe
//Name: Jacqueline Wagner
//Matrikelnummer: 254786
//Datum: 20
//20.07.2017
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
            s.drawSun(580, 30);
            s.drawCloud(80, 50);
            s.drawCloud(200, 80);
            s.drawCloud(230, 85);
            s.drawCloud(480, 70);
            s.drawCloud(380, 85);
            s.drawBird(220, 36);
            s.drawBird(314, 58);
            s.drawBird(160, 82);
            s.drawBird(460, 82);
            s.drawAnthill(225, 360);
            s.drawBlanket(430, 210);
            s.drawBush(120, 170);
            s.drawBush(140, 175);
            s.drawPlateSmall(440, 235);
            s.drawPlateSmall(500, 245);
            s.drawPlateSmall(460, 310);
            s.drawPlateSmall(490, 320);
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
        imgData = a2_Canvas.crc2.getImageData(0, 0, canvas.width, canvas.height);
        window.setTimeout(animate, 30);
        document.getElementById("ameise").addEventListener("click", addAmeise);
        document.getElementById("ameise").addEventListener("touchstart", addAmeise);
        document.getElementById("fischis").addEventListener("click", addFisch);
        document.getElementById("fischis").addEventListener("touchstart", addFisch);
        document.getElementById("entfernen").addEventListener("click", addAmeiseEntfernen);
    }
    //Funktionen
    function addAmeiseEntfernen() {
        for (let i = 0; i < a2_Canvas.ameisenData.length; i++) {
            a2_Canvas.ameisenData.splice(i, 1);
            console.log(a2_Canvas.ameisenData);
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
        console.log(a2_Canvas.ameisenData);
    }
    function addFisch() {
        let _x = (Math.random() * (0 + 140)) + 0;
        let _y = (Math.random() * (300 - 150)) + 200;
        a2_Canvas.fischData.push(new a2_Canvas.Fisch(_x, _y));
        a2_Canvas.n++;
    }
})(a2_Canvas || (a2_Canvas = {}));
//# sourceMappingURL=main.js.map