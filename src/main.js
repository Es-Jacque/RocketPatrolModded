// Jake Indgin
// RocketPatrolModded
// 4/18/2022
// ~4 hours
//
// Point Breakdown:
// Implemented a simultaneous two-player mode (30)
// Implemented a new timing/scoring system that adds time to the clock for successful hits (20)
// Used Phaser's particle emitter to create a particle explosion when the rocket hits the spaceship (20)
// Created a new title screen (new colors, aligned center) (10)
// Implemented parallax scrolling (10)
// Display the time remaining on the play screen (10)
// Allow the player to control the Rocket after it's fired (5)
// Track a high score that persists across scenes and display it in the UI (5)
//
// I received LOTS of help from my groupmate, Tai Wen Lee. He's great at explaining things. Most of the changes are his code, modified by me.
// Note: Intentionally left out the graphic for debris created by the exploding ships because I think it looks cooler.

let config = {
  type: Phaser.CANVAS,
  width: 640,
  height: 480,
  scene: [Menu, Play]
}

let game = new Phaser.Game(config);

// reserve keyboard bars
let keyF, keyR, keyLEFT, keyRIGHT, keyUP, keyA, keyD, keyW;

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
let highscore = 0;