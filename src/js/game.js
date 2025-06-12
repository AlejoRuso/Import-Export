// Импорт Character из domain.js
import Character from './domain.js';

// Экспорт Game как default
export default class Game {
  start() {
    console.log('game started');
  }
}

// Экспорт GameSavingData
export class GameSavingData {
}

// Экспорт функций
export function readGameSaving() {
}

export function writeGameSaving() {
}