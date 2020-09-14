const canvas = document.getElementById('canvas-element-1')
const ctx = canvas.getContext('2d')
canvas.width = 600;
canvas.height = 400;

let spacePressed = false;
let angle = 0;
let hue = 0;
let frame = 0;
let score =  0;
let gamespeed =  2;


const background = new Image();
background.src = 'imgs/sea-background.png'
const bg = {
	axis_x_1: 0,
	axis_x_2: canvas.width,
	axis_y_1: 0,
	width: canvas.width,
	height: canvas.height
}

function handleBackground(){
	if(bg.axis_x_1 <= -bg.width + gamespeed){
		bg.axis_x_1 = bg.width
	}else{
		bg.axis_x_1 -= gamespeed;
	}
	if(bg.axis_x_2 <= -bg.width + gamespeed){
		bg.axis_x_2 = bg.width
	}else{
		bg.axis_x_2 -= gamespeed;
	}
	ctx.drawImage(background, bg.axis_x_1, bg.axis_y_1, bg.width, bg.height);
	ctx.drawImage(background, bg.axis_x_2, bg.axis_y_1, bg.width, bg.height);
}

function animate(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	//ctx.fillRect(10, canvas.height - 90, 50, 50);
	handleBackground();
	handleObstacles();
	tainha.update();
	tainha.draw();
	ctx.fillStyle = 'red';
	ctx.font = '90px Georgia';
	ctx.strokeText(score, 450, 70);
	ctx.fillText(score, 450, 70);
	handleParticles();
	if(handleCollision()) return;
	handleCollision();
	requestAnimationFrame(animate);
	angle+= 0.25;
	hue++;
	frame++;
}
animate();

window.addEventListener('keydown', function(evento){
	if(evento.code === 'Space') spacePressed = true;
});

window.addEventListener('keyup', function(evento){
	if(evento.code === 'Space') spacePressed = false;
});

const collision = new Image();
collision.src = 'imgs/pow.png'
function handleCollision(){
	for(let i = 0; i < obstaclesArray.length; i ++){
		if(tainha.x < obstaclesArray[i].x + obstaclesArray[i].width &&
		tainha.x + tainha.width > obstaclesArray[i].x &&
		((tainha.y < 0 + obstaclesArray[i].top && tainha.y + tainha.height > 0) ||
		(tainha.y > canvas.height - obstaclesArray[i].bottom &&
		tainha.y + tainha.height < canvas.height))){
			ctx.drawImage(collision, tainha.x, tainha.y, 50, 50)
			ctx.font = '25px Georgia';
			ctx.fillStyle = 'white';
			ctx.fillText('The tainha is dead. Score: ' + score, 160, canvas.height/2 - 10);
			return true
		}
	}
}
