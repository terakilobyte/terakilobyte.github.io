import { createReducer }     from '../utils';
import { PLAYER_MOVE,
         COMPUTER_MOVE,
         PLAYER_WIN,
         COMPUTER_WIN,
         DRAW_GAME,
         DEPTH_INCREMENT } from 'constants/tictactoe';

import mini from 'projects/TicTacToe/minimax.js';


const initialState = {
  board: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  tileBoard: [  'topLeft',   'topMiddle',    'topRight',
              'centerLeft', 'centerMiddle', 'centerRight',
              'bottomLeft', 'bottomMiddle', 'bottomRight'],
  depth: 0,
  playerSigil: 'X',
  computerSigil: 'O',
  playerTurn: true
};

export default createReducer(initialState, {
  [PLAYER_MOVE] : (state, payload) => {
    let newState = Object.assign({}, state);
    let newBoard = state.board.slice();
    let move = state.tileBoard.indexOf(payload.move);
    newBoard[move] = state.playerSigil;
    newState.board = newBoard;
    newState.playerTurn = !newState.playerTurn;
    return newState;
  },
  [COMPUTER_MOVE]: (state) => {
    mini.minimax(state.board, state.depth, state.computerSigil);
    let newState = Object.assign({}, state);
    newState.depth = newState.depth + 1;
    newState.board = mini.choice;
    newState.playerTurn = !newState.playerTurn;
    console.log(newState);
    return newState;
  }
});
