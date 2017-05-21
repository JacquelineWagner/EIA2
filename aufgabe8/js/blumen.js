var a08_Canvas;
(function (a08_Canvas) {
    class Blumen {
        constructor(_x, _y, _flowerType) {
            this.x = _x;
            this.y = _y;
            this.flowerType = _flowerType;
            this.draw();
        }
        //            draw(): void {
        //            switch (this.flowerType) {
        //                case "blume":
        //                    this.blume(this.x - 25, this.y - 6, 5);
        //                    break;
        //                case "tulpe":
        //                    this.tulpe(this.x + 40, this.y - 5);
        //                    break;
        //            }  
        //
        //        }
        //        
        draw() {
            //         Draw Funktion
        }
        update() {
            //            this.draw();
        }
    }
    a08_Canvas.Blumen = Blumen;
})(a08_Canvas || (a08_Canvas = {}));
//# sourceMappingURL=blumen.js.map