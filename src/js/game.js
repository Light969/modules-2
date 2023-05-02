console.log('game worked');

import defaultDomain from './domain.js';
const character = new defaultDomain();
character.start();


class Game {
    start() {
      console.log('game started');
    }
  }
  
  export class GameSavingData {
    save() {
      console.log('game saved');
    }
  }
  
  export function readGameSaving() {
    console.log('read game');
  }
  
  export function writeGameSaving() {
    console.log('write game');
  }
  
  export default Game;