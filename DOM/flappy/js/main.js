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


function animate(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	//ctx.fillRect(10, canvas.height - 90, 50, 50);
	handleObstacles();
	dragon.update();
	dragon.draw();
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
		if(dragon.x < obstaclesArray[i].x + obstaclesArray[i].width &&
		dragon.x + dragon.width > obstaclesArray[i].x &&
		((dragon.y < 0 + obstaclesArray[i].top && dragon.y + dragon.height > 0) ||
		(dragon.y > canvas.height - obstaclesArray[i].bottom &&
		dragon.y + dragon.height < canvas.height))){
			ctx.drawImage(collision, dragon.x, dragon.y, 50, 50)
			ctx.font = '25px Georgia';
			ctx.fillStyle = 'black';
			ctx.fillText('Game Over. Your score is: ' + score, 160, canvas.height/2 - 10);
			return true
		}
	}
}
