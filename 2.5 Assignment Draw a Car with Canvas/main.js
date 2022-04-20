const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');


//initialization
const drawCar = () => {
  ctx.save();
  ctx.translate(40, 20);

  // Trunk 
  ctx.fillRect(0, 30, 15, 15);
 
  // Car body 
  ctx.fillRect(15, 20, 25, 25);

  // Window
  ctx.fillStyle = 'white';
  ctx.fillRect(28, 23, 7, 7);
  ctx.fillStyle = 'black';

  // Hood 
  ctx.fillRect(40, 30, 15, 15);

  // Wheels
  ctx.fillRect(7, 43, 10, 10);
  ctx.fillRect(37, 43, 10, 10);
  ctx.restore();
};

// Final car
drawCar();