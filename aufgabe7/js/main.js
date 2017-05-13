var a07_Canvas;
(function (a07_Canvas) {
    var canvas;
    let flower = [];
    let beeData = [];
    let n = 10;
    let imgData;
    window.addEventListener("load", init);
    function init(_event) {
        let x;
        let y;
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
        for (var i = 0; i < 2; i++) {
            let s = new a07_Canvas.Hintergrund(0, 0);
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
        for (let i = 0; i < n; i++) {
            y = Math.floor(Math.random() * ((canvas.height / 2 + canvas.height / 5) - (canvas.height / 2 + 20) + 1)) + canvas.height / 2 + 20;
            switch (Math.floor((Math.random() * 4) + 0)) {
                case 0:
                    new a07_Canvas.Flower(Math.floor(Math.random() * (canvas.width - 0 + 1)), y, "blume");
                    break;
                case 1:
                    new a07_Canvas.Flower(Math.floor(Math.random() * (canvas.width - 0 + 1)), y, "tulpe");
                    break;
                default:
                    break;
            }
        }
        console.log(flower);
        for (var i = 0; i < 2; i++) {
            let randomFlower = Math.floor((Math.random() * 3) + 0);
            let _x = (Math.random() * (240 + 20)) + 0;
            let _y = (Math.random() * (240 - 130)) + 130;
            let s = new a07_Canvas.Flower(0, 0, "");
            s.blume(_x - 25, _y - 6, 5);
            s.blume(_x - 10, _y + 5, 6);
            s.blume(_x + 10, _y - 5, 4);
            s.tulpe(_x + 40, _y - 5);
            s.blume3(370, 200);
        }
        imgData = a07_Canvas.crc2.getImageData(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < 10; i++) {
            beeData.push(new a07_Canvas.Bee(310, 150, Math.random() * 10 + 5, "hsl(" + Math.random() * 180 + ", 80%, 50%)"));
        }
        window.setTimeout(animate, 30);
        canvas.addEventListener("click", addBee);
        canvas.addEventListener("push", addBee);
    }
    //Funktionen 
    function animate() {
        a07_Canvas.crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < flower.length; i++) {
            let s = flower[i];
            s.update();
        }
        for (let i = 0; i < beeData.length; i++) {
            beeData[i].update();
        }
        window.setTimeout(animate, 20);
    }
    function addBee() {
        beeData.push(new a07_Canvas.Bee(310, 150, Math.random() * 10 + 5, "hsl(" + Math.random() * 180 + ", 80%, 50%)"));
        n++;
    }
})(a07_Canvas || (a07_Canvas = {}));
//# sourceMappingURL=main.js.map