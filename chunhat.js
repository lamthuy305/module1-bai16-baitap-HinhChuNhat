class Chunhat {
    x;
    y;
    chieuDai;
    chieuRong;

    constructor(x, y, chieuDai, chieuRong) {
        this.x = x;
        this.y = y;
        this.chieuDai = chieuDai;
        this.chieuRong = chieuRong;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    getChieuDai() {
        return this.chieuDai;
    }
    getChieuRong() {
        return this.chieuRong;
    }
    getArea() {
        return this.chieuRong*this.chieuDai;
    }
    getChuVi() {
        return (this.chieuDai+this.chieuRong)*2;
    }
    //
    // setX() {
    //     this.x = x;
    // }
    //
    // setY() {
    //     this.y = y;
    // }
    //
    // setChieuDai() {
    //     this.chieuDai = chieuDai;
    // }
    // setChieuRong() {
    //     this.chieuRong = chieuRong;
    // }

    getRandomHex() {
        return Math.floor(Math.random() * 255);
    }

    getRandomColor() {
        let red = this.getRandomHex();
        let green = this.getRandomHex();
        let blue = this.getRandomHex();
        return "rgb(" + red + "," + blue + "," + green + ")";
    }

}
