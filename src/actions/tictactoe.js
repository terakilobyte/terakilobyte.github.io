import { PLAYER_MOVE,
         COMPUTER_MOVE,
         RESET_GAME } from 'constants/tictactoe';

export default {
  player_move: (payload) => (
    {
      meta:
      {
        debounce: 'simple'
      },
      type : PLAYER_MOVE,
      payload
    }
  ),
  computer_move: () => ({ type : COMPUTER_MOVE }),
  reset_game: () => ({ type: RESET_GAME })
};
