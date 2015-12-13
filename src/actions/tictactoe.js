import { PLAYER_MOVE,
         COMPUTER_MOVE,
         PLAYER_WIN,
         COMPUTER_WIN,
         DRAW_GAME,
         DEPTH_INCREMENT } from 'constants/tictactoe';

export default {
  player_move: (payload) => ({ type : PLAYER_MOVE, payload }),
  computer_move: () => ({ type : COMPUTER_MOVE }),
  player_win: () => ({ type : PLAYER_WIN }),
  computer_win: () => ({ type : COMPUTER_WIN }),
  draw_game: () => ({ type : DRAW_GAME }),
  depth_increment: () => ({ type : DEPTH_INCREMENT })
};
