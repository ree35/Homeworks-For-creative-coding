var myBall;

function setup(){
	createCanvas(800,800);

	myBall = new Ball();
	myPelota = new Pelota();
	myChibola = new Chibola();


}

function draw(){
	background(255);
	myBall.animate();
	myBall.display();
	myChibola.animate();
	myChibola.display();
	myPelota.animate();
	myPelota.display();

}

function Ball(){

	this.x = 0;
	this.y = 0;
	this.step = 2;

	this.animate = function(){
		this.x += this.step;
		if(this.x > width){
			this.step = this.step*(-1);
		}

	}

	this.display = function(){
		ellipse(this.x, this.y, 20,40);
	}

};

function Chibola(){

	this.x = 0;
	this.y = 0;
	this.step = 2;

	this.animate = function(){
		this.x += this.step;
		if(this.x > width){
			this.step = this.step*(-1);
		}

	}

	this.display = function(){
		ellipse(this.x, this.y, 80,120);
};

function Pelota(){

	this.x = 0;
	this.y = 0;
	this.step = 2;

	this.animate = function(){
		this.x += this.step;
		if(this.x > width){
			this.step = this.step*(-1);
		}

	}

	this.display = function(){
		ellipse(this.x, this.y, 200,240);

	};
	