function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(255, 0, 180);
    fill(255);
    rect(50, 50, 50, 100);
    push();
    translate(250, 0);
    rotate(PI/2);
    fill(255);
    rect(50, 50, 50, 100);
    pop();
    push();
    translate(200, 250);
    rotate(PI/3);
    fill(255);
    rect(50, 50, 50, 100);
    pop();
}