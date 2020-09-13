class Dragon{
	constructor(){
		this.x = 150;
		this.y = 200;
		this.velocitY = 0;
		this.width = 20;
		this.height = 20;
		this.weight = 1;
	}
	update(){
		let curve =  Math.sin(angle);
		if(this.y > canvas.height - this.height * 3){
			this.y = canvas.height - (this.height * 3)
			this.velocitY = 0;
		} else {
			this.velocitY += this.weight;
			this.velocitY *= 0.9;
			this.y += this.velocitY;
		}
		if (this.y < 0 + this.height){
			this.y = 0 + this.height;
			this.velocitY = 0;
		}
		if(spacePressed) this.flap();
		}
	draw(){
		ctx.fillStyle = 'green';
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
	flap(){
		this.velocitY -= 2;
	}
}

const dragon = new Dragon();
