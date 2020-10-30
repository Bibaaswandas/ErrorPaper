class Ground {
    constructor(x, y, width, height) {

        var options = {
            isStatic : true
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
    }
    display() {
        var groundposx = this.body.position.x;
        var groundposy = this.body.position.y;

        push();
        translate(this.body.groundposx, this.body.groundposy);
        rectMode(CENTER);
        fill("white");
        rect(400,620, this.width, this.height);
        pop();
    }
}
