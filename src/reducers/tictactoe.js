import { createReducer }     from '../utils';
import { PLAYER_MOVE,
         COMPUTER_MOVE,
         PLAYER_WIN,
         COMPUTER_WIN,
         DRAW_GAME,
         DEPTH_INCREMENT } from 'constants/tictactoe';

import miniMax from 'projects/TicTacToe/minimax.js';


const initialState = {
  board: [],
  depth: 0,
  playerTurn: true,
  playerSigil: 'x'
};

export default createReducer(initialState, {
  [PLAYER_MOVE] : (state) => state + 1,
  [COMPUTER_MOVE]: (state) => state + 1,
  [PLAYER_WIN]: (state) => state + 1,
  [COMPUTER_WIN]: (state) => state + 1,
  [DRAW_GAME]: (state) => state + 1,
  [DEPTH_INCREMENT]: (state) => state + 1
});
