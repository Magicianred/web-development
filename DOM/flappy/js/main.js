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
let temp = canvas.height - 90;


function animate(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillRect(10, temp, 50, 50);
	requestAnimationFrame(animate);
}
animate();

window.addEventListener('keydown', function(evento){
	if(evento.code === 'Space') spacePressed = true;
	temp-=20
});

window.addEventListener('keyup', function(evento){
	if(evento.code === 'Space') spacePressed = false;
});
