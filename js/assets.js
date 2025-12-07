const ASSETS = {
  images: {
    soldier: 'assets/images/soldier_sprites.png',
    zombie: 'assets/images/zombie_sprites.png',
    obstacles: 'assets/images/obstacles.png',
    pickups: 'assets/images/pickups.png'
  },
  audio: {
    hit: 'assets/audio/hit.wav',
    coin: 'assets/audio/coin.wav',
    bgm: 'assets/audio/bgm_loop.mp3'
  }
};

function loadImages(list, cb){
  const images = {};
  const keys = Object.keys(list);
  let loaded = 0;
  keys.forEach(k=>{
    const img = new Image();
    img.src = list[k];
    img.onload = ()=>{ loaded++; images[k]=img; if(loaded===keys.length) cb(images); };
    img.onerror = ()=>{ console.error('asset load error', list[k]); loaded++; if(loaded===keys.length) cb(images); };
  });
}
