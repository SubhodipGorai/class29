class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.image1 = loadImage("sprites/sling1.png");
        this.image2 = loadImage("sprites/sling2.png");
        this.image3 = loadImage("sprites/sling3.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image (this.image1,200,20)
        image (this.image2,170,20)
        if(this.sling.bodyA){
            var A = this.sling.bodyA.position;
            var B = this.pointB;
            push();
            if (A.x <220) {
                strokeWeight(7);
                stroke(84,39,15)
                line(A.x-20, A.y, B.x-20, B.y);
                line(A.x+25, A.y, B.x+25, B.y);
                image (this.image3,A.x-32,A.y-10,15,30)
            }else{
                strokeWeight(4);
                stroke(84,39,15)
                line(A.x+20, A.y, B.x-20, B.y);
                line(A.x+25, A.y, B.x+25, B.y);
                image (this.image3,A.x+25,A.y-10,15,30)
            }
           
            pop();
        }
    }
    
}