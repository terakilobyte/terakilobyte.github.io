import React from 'react';
import '../TicTacToe.scss';

import GameTile from './GameTile';

const columns = [0, 1, 2];
const rows = {
  0: 'top',
  1: 'center',
  2: 'bottom'
};

export default class GameRow extends React.Component {
  static propTypes = {
    row: React.PropTypes.number.isRequired
  }

  render () {
    const tiles = columns.map(elem => {
      return (
        <GameTile column={elem} key={elem} row={rows[this.props.row]} />
      );
    });

    return (
      <div className='game-row'>
        {tiles}
      </div>
    );
  }
}
