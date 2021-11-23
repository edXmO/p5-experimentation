class Bouncer {
    constructor(x, y) {
        this.position = createVector(x, y);
        this.velocity = p5.Vector.random2D();
    }
    
    update(){
        this.acceleration = p5.Vector.random2D();
        this.acceleration.setMag(2);
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
    };

    show(){
        stroke(255);
        fill(255, 20);
        ellipse(this.position.x, this.position.y, 20);
    }

    applyForce(force){}
}

let bouncer;
let vec1;

function setup(){
    vec1 = createVector(0, 1);
    createCanvas(500, 500);
    background(0);
    bouncer = new Bouncer(250, 250);
}

function draw(){
    background(0);
    bouncer.update();
    bouncer.show();
}