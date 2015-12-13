import React from 'react';
import '../TicTacToe.scss';

import GameRow from './GameRow';

const rows = [0, 1, 2];

class GameBoard extends React.Component {
  static propTypes = {
    key: React.PropTypes.number
  }

  render () {
    const gameRows = rows.map(elem => {
      return (
        <GameRow key={elem} row={elem} />
      );
    });

    return (
      <div className='game-board'>
        {gameRows}
      </div>
    );
  }
}

export default GameBoard;
