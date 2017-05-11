var a07_Canvas;
(function (a07_Canvas) {
    var canvas;
    let blume;
    let tulpe;
    let flower = [tulpe, blume];
    let beeData = [];
    let n = 10;
    let imgData;
    window.addEventListener("load", init);
    function init(_event) {
        canvas = document.getElementsByTagName("canvas")[0];
        a07_Canvas.crc2 = canvas.getContext("2d");
        //Wiese
        a07_Canvas.crc2.fillStyle = "#1C8913";
        a07_Canvas.crc2.fillRect(0, 0, canvas.width, canvas.height);
        //Himmel
        var ombre = a07_Canvas.crc2.createLinearGradient(0, 10, 0, 100);
        ombre.addColorStop(0, "#A9D0F5");
        ombre.addColorStop(1, "white");
        a07_Canvas.crc2.fillStyle = ombre;
        a07_Canvas.crc2.fillRect(0, 0, canvas.width, 80);
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
        for (var i = 0; i < 2; i++) {
            let randomFlower = Math.floor((Math.random() * 3) + 0);
            let _x = (Math.random() * (240 + 20)) + 0;
            let _y = (Math.random() * (240 - 130)) + 130;
            let s = new a07_Canvas.Flower(0, 0, 0, 0);
            s.blume(_x - 25, _y - 6, 5);
            s.blume(_x - 10, _y + 5, 6);
            s.blume(_x + 10, _y - 5, 4);
            s.tulpe(_x + 40, _y - 5);
            s.blume3(370, 200);
        }
        /**************************************************************************************************************************
        *Aufgabe 6a
        **************************************************************************************************************************/
        imgData = a07_Canvas.crc2.getImageData(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < 10; i++) {
            beeData.push(new a07_Canvas.Bee(310, 150, Math.random() * 10 + 5, "hsl(" + Math.random() * 180 + ", 80%, 50%)"));
        }
        window.setTimeout(animate, 30);
        canvas.addEventListener("click", addBee);
        canvas.addEventListener("push", addBee);
        for (let i = 0; i < 5; i++) {
            let z = Math.random() * (2 - 1 + 1) + 1;
            if (z == 1 || 2) {
                let s = new a07_Canvas.Flower(0, 0, 0, Math.random() * (2 - 1 + 1) + 1);
                s.draw();
            }
        }
        window.setTimeout(animateFolwer, 0);
    }
    //Funktionen 
    function animate() {
        a07_Canvas.crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < beeData.length; i++) {
            beeData[i].update();
        }
        window.setTimeout(animate, 20);
    }
    function addBee() {
        beeData.push(new a07_Canvas.Bee(310, 150, Math.random() * 10 + 5, "hsl(" + Math.random() * 180 + ", 80%, 50%)"));
        n++;
    }
    function animateFolwer() {
        a07_Canvas.crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < flower.length; i++) {
            flower[i].update();
        }
        window.setTimeout(animate, 20);
    }
    /********************************************************************************************************
    *Aufgabe 4
    **********************************************************************************************************/
    function drawBienenkorb(_x, _y) {
        a07_Canvas.crc2.beginPath();
        a07_Canvas.crc2.moveTo(_x, _y);
        a07_Canvas.crc2.fillStyle = "#DD9A43";
        a07_Canvas.crc2.fillRect(_x - 13.5, _y + 2 + 10, 20, -17);
        a07_Canvas.crc2.fill();
        a07_Canvas.crc2.closePath();
        a07_Canvas.crc2.beginPath();
        a07_Canvas.crc2.moveTo(_x, _y - 5);
        a07_Canvas.crc2.fillStyle = "#DD9A43";
        a07_Canvas.crc2.arc(_x - 5, _y - 5, 10, 0, Math.PI, true);
        a07_Canvas.crc2.moveTo(_x - 5.7, _y + 1);
        a07_Canvas.crc2.closePath();
        a07_Canvas.crc2.fill();
        a07_Canvas.crc2.beginPath();
        a07_Canvas.crc2.moveTo(_x + 16, _y - 3);
        a07_Canvas.crc2.arc(_x - 15, _y - 3, 4, 0, (Math.PI) * 2, false);
        a07_Canvas.crc2.moveTo(_x + 16, _y - 3);
        a07_Canvas.crc2.arc(_x - 15, _y + 2, 4, 0, (Math.PI) * 2, false);
        a07_Canvas.crc2.moveTo(_x + 16, _y - 3);
        a07_Canvas.crc2.arc(_x - 15, _y + 8, 4, 0, (Math.PI) * 2, false);
        a07_Canvas.crc2.moveTo(_x + 16, _y - 3);
        a07_Canvas.crc2.arc(_x + 5, _y - 3, 4, 0, (Math.PI) * 2, false);
        a07_Canvas.crc2.moveTo(_x + 16, _y - 3);
        a07_Canvas.crc2.arc(_x + 5, _y + 2, 4, 0, (Math.PI) * 2, false);
        a07_Canvas.crc2.moveTo(_x + 16, _y - 3);
        a07_Canvas.crc2.arc(_x + 5, _y + 8, 4, 0, (Math.PI) * 2, false);
        a07_Canvas.crc2.fillStyle = "#DD9A43";
        a07_Canvas.crc2.fill();
        a07_Canvas.crc2.closePath();
        a07_Canvas.crc2.beginPath();
        a07_Canvas.crc2.moveTo(_x - 10, _y + 4);
        a07_Canvas.crc2.fillStyle = "#2C190A";
        a07_Canvas.crc2.arc(_x - 10, _y + 4, 3, 0, Math.PI * 2, true);
        a07_Canvas.crc2.closePath();
        a07_Canvas.crc2.fill();
    }
    function drawblume2(_x, _y) {
        //        Stiel 
        a07_Canvas.crc2.beginPath();
        a07_Canvas.crc2.moveTo(_x - 0.5, _y - 5);
        a07_Canvas.crc2.strokeStyle = "#013713";
        a07_Canvas.crc2.fillStyle = "#0137#13";
        a07_Canvas.crc2.lineTo(_x + 0.5, _y - 5);
        a07_Canvas.crc2.lineTo(_x + 0.5, _y + 10);
        a07_Canvas.crc2.lineTo(_x - 0.5, _y + 10);
        a07_Canvas.crc2.closePath();
        a07_Canvas.crc2.fill();
        a07_Canvas.crc2.stroke();
        // Blatt
        a07_Canvas.crc2.beginPath();
        a07_Canvas.crc2.moveTo(_x - 2, _y - 5);
        a07_Canvas.crc2.strokeStyle = "#D4A5D3";
        a07_Canvas.crc2.fillStyle = "#D4A5D3";
        a07_Canvas.crc2.lineTo(_x - 2, _y - 9);
        a07_Canvas.crc2.lineTo(_x, _y - 6);
        a07_Canvas.crc2.lineTo(_x + 2, _y - 9);
        a07_Canvas.crc2.lineTo(_x + 2, _y - 5);
        a07_Canvas.crc2.closePath();
        a07_Canvas.crc2.fill();
        a07_Canvas.crc2.stroke();
        a07_Canvas.crc2.beginPath();
        a07_Canvas.crc2.moveTo(_x - 0.5, _y - 5);
        a07_Canvas.crc2.strokeStyle = "#8A0651";
        a07_Canvas.crc2.fillStyle = "#8A0651";
        a07_Canvas.crc2.lineTo(_x + 0.5, _y - 5);
        a07_Canvas.crc2.lineTo(_x + 0.5, _y + 1);
        a07_Canvas.crc2.lineTo(_x - 0.5, _y + 1);
        a07_Canvas.crc2.closePath();
        a07_Canvas.crc2.fill();
        a07_Canvas.crc2.stroke();
        a07_Canvas.crc2.beginPath();
        a07_Canvas.crc2.moveTo(_x + 1, _y - 5);
        a07_Canvas.crc2.strokeStyle = "#8A0651";
        a07_Canvas.crc2.fillStyle = "#8A0651";
        a07_Canvas.crc2.lineTo(_x + 7, _y - 8);
        a07_Canvas.crc2.lineTo(_x + 1, _y);
        a07_Canvas.crc2.closePath();
        a07_Canvas.crc2.fill();
        a07_Canvas.crc2.stroke();
        a07_Canvas.crc2.beginPath();
        a07_Canvas.crc2.moveTo(_x + 1, _y - 5);
        a07_Canvas.crc2.arcTo(_x + 1, _y - 5, _x + 7, _y - 8, 20);
        a07_Canvas.crc2.closePath();
        a07_Canvas.crc2.fill();
        a07_Canvas.crc2.stroke();
        a07_Canvas.crc2.beginPath();
        a07_Canvas.crc2.moveTo(_x - 1, _y - 5);
        a07_Canvas.crc2.strokeStyle = "#8A06513";
        a07_Canvas.crc2.fillStyle = "#8A0651";
        a07_Canvas.crc2.lineTo(_x - 7, _y - 8);
        a07_Canvas.crc2.lineTo(_x - 1, _y);
        a07_Canvas.crc2.closePath();
        a07_Canvas.crc2.fill();
        a07_Canvas.crc2.stroke();
        a07_Canvas.crc2.beginPath();
        a07_Canvas.crc2.moveTo(_x - 1, _y - 5);
        a07_Canvas.crc2.arcTo(_x - 1, _y - 5, _x - 7, _y - 8, 20);
        a07_Canvas.crc2.closePath();
        a07_Canvas.crc2.fill();
        a07_Canvas.crc2.stroke();
    }
    function drawblume1(_x, _y) {
        //        Stiel 
        a07_Canvas.crc2.beginPath();
        a07_Canvas.crc2.moveTo(_x, _y);
        a07_Canvas.crc2.strokeStyle = "#013713";
        a07_Canvas.crc2.fillStyle = "#013713";
        a07_Canvas.crc2.lineTo(_x, _y - 15);
        a07_Canvas.crc2.lineTo(_x + 1, _y - 15);
        a07_Canvas.crc2.lineTo(_x + 1, _y);
        a07_Canvas.crc2.closePath();
        a07_Canvas.crc2.fill();
        a07_Canvas.crc2.stroke();
        // Blatt
        a07_Canvas.crc2.beginPath();
        a07_Canvas.crc2.moveTo(_x + 1, _y - 5);
        a07_Canvas.crc2.strokeStyle = "#013713";
        a07_Canvas.crc2.fillStyle = "#013713";
        a07_Canvas.crc2.lineTo(_x + 7, _y - 10);
        a07_Canvas.crc2.lineTo(_x + 1, _y);
        a07_Canvas.crc2.closePath();
        a07_Canvas.crc2.fill();
        a07_Canvas.crc2.stroke();
        a07_Canvas.crc2.beginPath();
        a07_Canvas.crc2.moveTo(_x + 1, _y - 5);
        a07_Canvas.crc2.arcTo(_x + 1, _y - 5, _x + 7, _y - 10, 20);
        a07_Canvas.crc2.closePath();
        a07_Canvas.crc2.fill();
        a07_Canvas.crc2.stroke();
        //        Bl�ten
        a07_Canvas.crc2.beginPath();
        a07_Canvas.crc2.moveTo(_x + 0.5, _y - 15);
        a07_Canvas.crc2.strokeStyle = "#F72041";
        a07_Canvas.crc2.fillStyle = "#F72041";
        a07_Canvas.crc2.arc(_x - 2, _y - 14, 3, 0, Math.PI * 2, true);
        a07_Canvas.crc2.arc(_x - 4, _y - 17, 3, 0, Math.PI * 2, true);
        a07_Canvas.crc2.arc(_x - 3, _y - 20, 3, 0, Math.PI * 2, true);
        a07_Canvas.crc2.arc(_x + 1.5, _y - 20, 3, 0, Math.PI * 2, true);
        a07_Canvas.crc2.arc(_x + 3, _y - 17, 3, 0, Math.PI * 2, true);
        a07_Canvas.crc2.arc(_x + 3, _y - 17, 2, 0, Math.PI * 2, true);
        a07_Canvas.crc2.arc(_x + 2, _y - 14, 3, 0, Math.PI * 2, true);
        a07_Canvas.crc2.closePath();
        a07_Canvas.crc2.fill();
        a07_Canvas.crc2.stroke();
        a07_Canvas.crc2.beginPath();
        a07_Canvas.crc2.moveTo(_x - 0.3, _y - 17);
        a07_Canvas.crc2.strokeStyle = "#E0813D";
        a07_Canvas.crc2.fillStyle = "#E0813D";
        a07_Canvas.crc2.arc(_x - 0.3, _y - 17, 2, 0, Math.PI * 2, true);
        a07_Canvas.crc2.closePath();
        a07_Canvas.crc2.fill();
        a07_Canvas.crc2.stroke();
    }
    function drawvogel(_x, _y) {
        a07_Canvas.crc2.beginPath();
        a07_Canvas.crc2.moveTo(_x, _y);
        a07_Canvas.crc2.strokeStyle = "#000000";
        a07_Canvas.crc2.fillStyle = "#000000";
        a07_Canvas.crc2.arcTo(_x + 5, _y - 20, _x + 8, _y - 20, 20);
        a07_Canvas.crc2.arcTo(_x + 8, _y - 25, _x, _y, 20);
        a07_Canvas.crc2.arcTo(_x - 5, _y - 20, _x - 8, _y - 20, 20);
        a07_Canvas.crc2.arcTo(_x - 8, _y - 25, _x, _y, 15);
        a07_Canvas.crc2.closePath();
        a07_Canvas.crc2.fill();
        a07_Canvas.crc2.stroke();
    }
    function drawwolke(_x, _y) {
        a07_Canvas.crc2.beginPath();
        a07_Canvas.crc2.moveTo(_x, _y);
        a07_Canvas.crc2.strokeStyle = "#ffffff";
        a07_Canvas.crc2.fillStyle = "#ffffff";
        a07_Canvas.crc2.arc(_x - 4, _y, 15, 0, Math.PI * 2, true);
        a07_Canvas.crc2.arc(_x - 10, _y - 12, 15, 0, Math.PI * 2, true);
        a07_Canvas.crc2.arc(_x + 2, _y - 22, 15, 0, Math.PI * 2, true);
        a07_Canvas.crc2.arc(_x + 20, _y - 17, 15, 0, Math.PI * 2, true);
        a07_Canvas.crc2.arc(_x + 20, _y - 17, 14, 0, Math.PI * 2, true);
        a07_Canvas.crc2.arc(_x + 28, _y - 8, 15, 0, Math.PI * 2, true);
        a07_Canvas.crc2.arc(_x + 28, _y - 8, 14, 0, Math.PI * 2, true);
        a07_Canvas.crc2.arc(_x + 18, _y, 15, 0, Math.PI * 2, true);
        a07_Canvas.crc2.arc(_x + 18, _y, 14, 0, Math.PI * 2, true);
        a07_Canvas.crc2.closePath();
        a07_Canvas.crc2.fill();
        a07_Canvas.crc2.stroke();
    }
    function drawbaum(_x, _y) {
        //        Stamm
        a07_Canvas.crc2.beginPath();
        a07_Canvas.crc2.moveTo(_x, _y);
        a07_Canvas.crc2.strokeStyle = "#2C190A";
        a07_Canvas.crc2.fillStyle = "#2C190A";
        a07_Canvas.crc2.lineTo(_x, _y + 70);
        a07_Canvas.crc2.lineTo(_x + 20, _y + 70);
        a07_Canvas.crc2.lineTo(_x + 20, _y);
        a07_Canvas.crc2.closePath();
        a07_Canvas.crc2.fill();
        a07_Canvas.crc2.stroke();
        //        Krone
        a07_Canvas.crc2.beginPath();
        a07_Canvas.crc2.moveTo(_x, _y);
        a07_Canvas.crc2.strokeStyle = "#013713";
        a07_Canvas.crc2.fillStyle = "#013713";
        a07_Canvas.crc2.arc(_x - 4, _y, 20, 0, Math.PI * 2, true);
        a07_Canvas.crc2.arc(_x - 11, _y - 16, 18, 0, Math.PI * 2, true);
        a07_Canvas.crc2.arc(_x - 2, _y - 32, 18, 0, Math.PI * 2, true);
        a07_Canvas.crc2.arc(_x + 13, _y - 34, 18, 0, Math.PI * 2, true);
        a07_Canvas.crc2.arc(_x + 25, _y - 25, 18, 0, Math.PI * 2, true);
        a07_Canvas.crc2.arc(_x + 25, _y - 25, 16, 0, Math.PI * 2, true);
        a07_Canvas.crc2.arc(_x + 26, _y - 11, 19, 0, Math.PI * 2, true);
        a07_Canvas.crc2.arc(_x + 26, _y - 11, 20, 0, Math.PI * 2, true);
        a07_Canvas.crc2.arc(_x + 21, _y, 20, 0, Math.PI * 2, true);
        a07_Canvas.crc2.closePath();
        a07_Canvas.crc2.fill();
        a07_Canvas.crc2.stroke();
    }
    function drawhaus(_x, _y) {
        //        Geb�ude
        a07_Canvas.crc2.beginPath();
        a07_Canvas.crc2.moveTo(_x, _y);
        a07_Canvas.crc2.strokeStyle = "#D8C8AE";
        a07_Canvas.crc2.fillStyle = "#D8C8AE";
        a07_Canvas.crc2.lineTo(_x, _y - 50);
        a07_Canvas.crc2.lineTo(_x + 40, _y - 50);
        a07_Canvas.crc2.lineTo(_x + 40, _y);
        a07_Canvas.crc2.fill();
        a07_Canvas.crc2.stroke();
        //        Kamin
        a07_Canvas.crc2.beginPath();
        a07_Canvas.crc2.moveTo(_x + 30, _y - 60);
        a07_Canvas.crc2.strokeStyle = "#3F130A";
        a07_Canvas.crc2.fillStyle = "#3F130A";
        a07_Canvas.crc2.lineTo(_x + 30, _y - 70);
        a07_Canvas.crc2.lineTo(_x + 35, _y - 70);
        a07_Canvas.crc2.lineTo(_x + 35, _y - 60);
        a07_Canvas.crc2.closePath();
        a07_Canvas.crc2.fill();
        a07_Canvas.crc2.stroke();
        //        Dach
        a07_Canvas.crc2.beginPath();
        a07_Canvas.crc2.moveTo(_x, _y - 50);
        a07_Canvas.crc2.strokeStyle = "#ff0000";
        a07_Canvas.crc2.fillStyle = "#ff0000";
        a07_Canvas.crc2.lineTo(_x + 20, _y - 85);
        a07_Canvas.crc2.lineTo(_x + 40, _y - 50);
        a07_Canvas.crc2.lineTo(_x, _y - 50);
        a07_Canvas.crc2.closePath();
        a07_Canvas.crc2.fill();
        a07_Canvas.crc2.stroke();
        //        T�r
        a07_Canvas.crc2.beginPath();
        a07_Canvas.crc2.moveTo(_x + 5, _y);
        a07_Canvas.crc2.strokeStyle = "#3F130A";
        a07_Canvas.crc2.fillStyle = "#3F130A";
        a07_Canvas.crc2.lineTo(_x + 5, _y - 20);
        a07_Canvas.crc2.lineTo(_x + 15, _y - 20);
        a07_Canvas.crc2.lineTo(_x + 15, _y);
        a07_Canvas.crc2.closePath();
        a07_Canvas.crc2.fill();
        a07_Canvas.crc2.stroke();
        //        Fenster
        a07_Canvas.crc2.beginPath();
        a07_Canvas.crc2.moveTo(_x + 25, _y - 30);
        a07_Canvas.crc2.strokeStyle = "#3F130A";
        a07_Canvas.crc2.fillStyle = "#3F130A";
        a07_Canvas.crc2.lineTo(_x + 25, _y - 40);
        a07_Canvas.crc2.lineTo(_x + 35, _y - 40);
        a07_Canvas.crc2.lineTo(_x + 35, _y - 30);
        a07_Canvas.crc2.closePath();
        a07_Canvas.crc2.fill();
        a07_Canvas.crc2.stroke();
    }
    function drawberg1(_x, _y) {
        a07_Canvas.crc2.beginPath();
        a07_Canvas.crc2.moveTo(_x, _y);
        a07_Canvas.crc2.strokeStyle = "#666666";
        a07_Canvas.crc2.fillStyle = "#666666";
        a07_Canvas.crc2.lineTo(_x + 30, _y - 60);
        a07_Canvas.crc2.lineTo(_x + 60, _y - 0);
        //        crc2.arcTo(_x + 5 , _y - 25,  _x + 10, _y - 25, 20);
        //        crc2.lineTo(_x + 22, _y - 20 );
        //        crc2.strokeStyle = "#ff0000";
        //        crc2.arcTo(_x + 22 , _y - 20,  _x + 5, _y, 20);
        a07_Canvas.crc2.closePath();
        a07_Canvas.crc2.fill();
        a07_Canvas.crc2.stroke();
    }
    function drawberg2(_x, _y) {
        a07_Canvas.crc2.beginPath();
        a07_Canvas.crc2.moveTo(_x, _y);
        a07_Canvas.crc2.strokeStyle = "#666666";
        a07_Canvas.crc2.fillStyle = "#666666";
        a07_Canvas.crc2.lineTo(_x + 25, _y - 50);
        a07_Canvas.crc2.lineTo(_x + 50, _y - 0);
        a07_Canvas.crc2.closePath();
        a07_Canvas.crc2.fill();
        a07_Canvas.crc2.stroke();
    }
    function drawsonne(_x, _y) {
        a07_Canvas.crc2.beginPath();
        a07_Canvas.crc2.strokeStyle = "#FFFF00";
        a07_Canvas.crc2.fillStyle = "#FFFF00";
        a07_Canvas.crc2.arc(_x, _y, 15, 0, Math.PI * 2, true); // Kreis
        //        Sonnenstrahlen
        a07_Canvas.crc2.moveTo(_x, _y);
        a07_Canvas.crc2.moveTo(_x - 22, _y);
        a07_Canvas.crc2.lineTo(_x - 40, _y + 3);
        a07_Canvas.crc2.moveTo(_x, _y);
        a07_Canvas.crc2.moveTo(_x - 19, _y - 10);
        a07_Canvas.crc2.lineTo(_x - 35, _y - 18);
        a07_Canvas.crc2.moveTo(_x - 10, _y - 18);
        a07_Canvas.crc2.lineTo(_x - 30, _y - 50);
        a07_Canvas.crc2.moveTo(_x + 2, _y - 20);
        a07_Canvas.crc2.lineTo(_x - 22, _y - 410);
        a07_Canvas.crc2.moveTo(_x + 15, _y - 15);
        a07_Canvas.crc2.lineTo(_x + 48, _y - 50);
        a07_Canvas.crc2.moveTo(_x + 20, _y - 6);
        a07_Canvas.crc2.lineTo(_x + 40, _y - 10);
        a07_Canvas.crc2.moveTo(_x + 22, _y + 4);
        a07_Canvas.crc2.lineTo(_x + 40, _y + 6);
        a07_Canvas.crc2.moveTo(_x + 18, _y + 14);
        a07_Canvas.crc2.lineTo(_x + 35, _y + 25);
        a07_Canvas.crc2.moveTo(_x + 8, _y + 20);
        a07_Canvas.crc2.lineTo(_x + 15, _y + 38);
        a07_Canvas.crc2.moveTo(_x - 4, _y + 20);
        a07_Canvas.crc2.lineTo(_x - 7, _y + 38);
        a07_Canvas.crc2.moveTo(_x - 15, _y + 15);
        a07_Canvas.crc2.lineTo(_x - 30, _y + 25);
        a07_Canvas.crc2.closePath();
        a07_Canvas.crc2.fill();
        a07_Canvas.crc2.stroke();
    }
})(a07_Canvas || (a07_Canvas = {}));
//# sourceMappingURL=main.js.map