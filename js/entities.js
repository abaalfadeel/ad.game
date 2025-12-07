const LANES = [WIDTH*0.25, WIDTH*0.75];
class Player {
  constructor(img){
    this.img = img;
    this.lane = 0; // 0 right, 1 left
    this.x = LANES[this.lane];
    this.y = HEIGHT - 200;
    this.health = 3;
    this.coins = 0;
  }
  switchLane(dir){
    this.lane = Math.max(0, Math.min(1, this.lane + dir));
    this.x = LANES[this.lane];
  }
  attack(){
    // create attack hitbox in front of player
  }
  update(dt){}
  draw(ctx){
    ctx.fillStyle='blue';
    ctx.fillRect(this.x-40, this.y-80, 80, 160);
  }
}
let player; // global
