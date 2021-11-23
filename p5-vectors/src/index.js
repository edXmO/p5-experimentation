class Bouncer{
    position = createVector(200, 200);
    velocity = createVector(1, 0);

    contructor(x, y){
        this.position = createVector(x, y);
    };   

    update(vec){
        this.position.add(vec);
    };

    show(){
        stroke(255);
        strokeWeight(2);
        fill(255, 100);
        ellipse(this.position.x, this.position.y, 20);
    };
}

let vec1;
let vec2;
let bouncer;

function setup(){
    vec1 = createVector(1, -2);
    vec2 = createVector(-1, 2);
    createCanvas(400,400);
    background(0);
    bouncer = new Bouncer(200, 200);
}

function draw(){
    background(0);
    bouncer.show();
    bouncer.update(vec1);
    
}



