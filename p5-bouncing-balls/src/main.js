class RandomBouncer {
    constructor(x, y) {
        this.position = createVector(x, y);
        this.velocity = p5.Vector.random2D();
    }
    
    update(){
        this.acceleration = p5.Vector.random2D();
        this.acceleration.setMag(2);
        this.velocity.add(this.acceleration);
        this.velocity.limit(2);
        this.position.add(this.velocity);
    };

    show(){
        stroke(255);
        fill(0);
        ellipse(this.position.x, this.position.y, 20);
    }

    applyForce(force){}
}


class MouseFollower {
    constructor(x, y){
        this.position = createVector(x, y);
        this.velocity = createVector(x, y);
    }

    update(x, y){
        let mouse = createVector(x, y);
        this.acceleration = p5.Vector.sub(mouse, this.position);
        this.acceleration.setMag(0.5)
        this.velocity.add(this.acceleration)
        this.velocity.limit(3);
        this.position.add(this.velocity);
    }

    show(){
        stroke(255);
        fill(0);
        ellipse(this.position.x, this.position.y, 20);
    }
}


let randomBouncer;
let mouseFollower;
let vec1;

function setup(){
    createCanvas(500, 500);
    background(0);
    // randomBouncer = new RandomBouncer(250, 250);
    mouseFollower = new MouseFollower(250, 250);
}

function draw(){
    background(0);
    // randomBouncer.update();
    // randomBouncer.show();
    mouseFollower.update(mouseX, mouseY);
    mouseFollower.show();
}




