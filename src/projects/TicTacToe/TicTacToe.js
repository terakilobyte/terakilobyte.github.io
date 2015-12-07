import React from 'react';
import './TicTacToe.scss';

import GameBoard from './components/GameBoard';

export default class TicTacToe extends React.Component {
  static propTypes = {

  }

  render () {
    return (
      <div>
        <h1 className='text-center'>Tic-Tac-Toe</h1>
        <GameBoard />
      </div>
    );
  }
}
