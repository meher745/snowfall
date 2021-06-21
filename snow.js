class snow{
    constructor(x,y){
        var options={
            friction:0.5,
            density:0.8,
            isStatic:false
        }
        this.x=x;
        this.y=y;
        this.scale=0.03;
        this.image=loadImage("snow4.webp");
        this.body=Matter.Bodies.rectangle(this.x,this.y,options);
        World.add(world,this.body);
    }
    display(){
        push();
        imageMode(CENTER);
        image(this.image,this.x,this.y,0,0);
        pop();
    }   
}