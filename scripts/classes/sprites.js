class Sprite {
    constructor(pos,src) {
        this.position = pos;
        this.image = new Image();
        this.image.src = src;
        this.image.onload = () => {
            this.height = this.image.height;
            this.width = this.image.width;
        }
    }
    draw() {
        ctx.drawImage(this.image,this.position.x,this.position.y);
    }
    update() {
        this.draw();
    }
}