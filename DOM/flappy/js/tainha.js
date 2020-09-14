const tainhaSprite = new Image();
tainhaSprite.src = 'imgs/tainha.png';

class Tainha{
	constructor(){
		this.x = 150;
		this.y = 200;
		this.velocitY = 0;
		this.originalWidth = 1024;
		this.originalHeight = 1024;
		this.width = this.originalWidth/20;
		this.height = this.originalHeight/20;
		this.weight = 1;
	}
	update(){
		let curve =  Math.sin(angle) * 3;
		if(this.y > canvas.height - (this.height * 3) + curve){
			this.y = canvas.height - (this.height * 3) + curve
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
		if(spacePressed && this.y > this.height * 3) this.flap();
		}
	draw(){
		//ctx.fillStyle = 'silver';
		//ctx.fillRect(this.x, this.y, this.width, this.height);
		ctx.drawImage(tainhaSprite, 0, 0, this.originalWidth, this.originalHeight,
		this.x - 30, this.y - 30, this.width * 1.7, this.height * 1.7);
	}
	flap(){
		this.velocitY -= 2;
	}
}

const tainha = new Tainha();
