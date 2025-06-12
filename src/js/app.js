// Импорт Game как default
// Импорт остальных сущностей с переименованием
import Game from './game.js';
import { 
  GameSavingData,
  readGameSaving as loadGame,
  writeGameSaving as saveGame
} from './game.js';

const game = new Game();
game.start();