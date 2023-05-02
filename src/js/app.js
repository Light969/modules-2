// TODO: write your code here
console.log('app worked');

const game = new Game();
game.start();
console.log(Game);

// import Game from './game.js';
import Game, { GameSavingData, readGameSaving as loadGame, writeGameSaving } from './game.js';

const gameSave = new GameSavingData;
gameSave.save();

// import {readGameSaving, writeGameSaving} from './game.js';
loadGame();
writeGameSaving();