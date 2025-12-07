const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

let lastTime=0, delta=0, running=false, state='MENU';
const WIDTH = canvas.width, HEIGHT = canvas.height;

// simple input: swipe detection
let touchStartX=null;
canvas.addEventListener('touchstart', e=>{ touchStartX = e.changedTouches[0].clientX; });
canvas.addEventListener('touchend', e=>{
  const dx = e.changedTouches[0].clientX - touchStartX;
  if(Math.abs(dx) > 40){
    if(dx > 0) onSwipe('right'); else onSwipe('left');
  } else {
    onTap();
  }
});
document.getElementById('btn-attack').addEventListener('click', ()=> playerAttack());

function onSwipe(dir){
  // move lanes
  if(dir === 'left') player.switchLane(-1);
  if(dir === 'right') player.switchLane(1);
}
function onTap(){ playerAttack(); }

function loop(ts){
  delta = (ts - lastTime) / 1000; lastTime = ts;
  update(delta);
  render();
  if(running) requestAnimationFrame(loop);
}

function startGame(){
  running = true; lastTime = performance.now();
  state='RUNNING';
  requestAnimationFrame(loop);
}
