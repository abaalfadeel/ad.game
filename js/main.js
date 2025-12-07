loadImages(ASSETS.images, (images)=>{
  player = new Player(images.soldier);
  // load audio etc
  startGame();
});

function update(dt){
  // TODO: spawn zombies, move them, collisions
}
function render(){
  ctx.clearRect(0,0,WIDTH,HEIGHT);
  // draw lanes
  ctx.fillStyle='#222';
  ctx.fillRect(WIDTH*0.5-2,0,4,HEIGHT);
  player.draw(ctx);
  // draw zombies, pickups...
  document.getElementById('score').innerText = player.coins;
}

function playerAttack(){
  player.attack();
}
