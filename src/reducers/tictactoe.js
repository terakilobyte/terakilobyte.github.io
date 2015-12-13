import { createReducer }     from '../utils';
import { PLAYER_MOVE,
         COMPUTER_MOVE,
         RESET_GAME } from 'constants/tictactoe';

import mini from 'projects/TicTacToe/minimax.js';

const tileBoard = [
  'topLeft', 'topMiddle', 'topRight',
  'centerLeft', 'centerMiddle', 'centerRight',
  'bottomLeft', 'bottomMiddle', 'bottomRight'
];


const initialState = {
  board: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  depth: 0,
  playerTurn: true,
  winner: false
};

export default createReducer(initialState, {
  [PLAYER_MOVE] : (state, payload) => {
    let newState = Object.assign({}, state);
    let newBoard = state.board.slice();
    let move = tileBoard.indexOf(payload.move);
    newBoard[move] = 'X';
    newState.board = newBoard;
    newState.playerTurn = !newState.playerTurn;
    newState.winner = mini.terminalState(newState.board);
    return newState;
  },
  [COMPUTER_MOVE]: (state) => {
    mini.minimax(state.board, state.depth, 'O');
    let newState = Object.assign({}, state);
    newState.depth = newState.depth + 1;
    newState.board = mini.choice;
    newState.playerTurn = !newState.playerTurn;
    newState.winner = mini.terminalState(newState.board);
    return newState;
  },
  [RESET_GAME]: () => {
    return initialState;
  }
});
