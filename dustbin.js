class dustbin{

    constructor(x,y,width,height,angle){
        var options ={
            isStatic : true
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle;
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }
    display(){

        var dustpos = this.body.position;
        var ang = this.body.angle;
        push ();
        translate (dustpos.x,dustpos.y);
        rotate (ang);
        rectMode(CENTER);
        fill ("white");
        rect(0,0,this.width,this.height);
        pop ();
    }
}
