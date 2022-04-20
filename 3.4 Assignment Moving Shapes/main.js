//initialization
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

//variables
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 20;
ctx.strokeStyle = 'purple';

//second phase variables
let isDrawing = false;
let lastX = 0;
let lastY = 0;


//draw function
function draw(e) {
    if (!isDrawing) return;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
  }


  //event listener
  canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
  });
  
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', () => (isDrawing = false));
  canvas.addEventListener('mouseout', () => (isDrawing = false));