import { SimpleScene } from './scenes/simple-scene.js';

// const gameConfig = {
//   width: 680,
//   height: 400,
//   scene: SimpleScene
// };


window.onload = function() {
  // object containing configuration options
  let gameConfig = {
    key: "PlayGame",
    type: Phaser.AUTO,
    width: 680,
    height: 480,
    scene: SimpleScene,
    backgroundColor: 0x87ceeb,

    // physics settings
    physics: {
      default: "arcade"
    }
  };
  game = new Phaser.Game(gameConfig);
  window.focus();
  resize();
  window.addEventListener("resize", resize, false);
};

