import React from 'react';
import './TicTacToe.scss';
import { connect }            from 'react-redux';
import ticTacToeActions from 'actions/tictactoe';

import GameBoard from './components/GameBoard';

const mapStateToProps = (state) => {
  return {
    playerTurn: state.tictactoe.playerTurn,
    winner: state.tictactoe.winner
  };
};


class TicTacToe extends React.Component {
  static propTypes = {
    playerTurn: React.PropTypes.bool,
    computer_move: React.PropTypes.func
  }

  componentWillReceiveProps (propObj) {
    if (!propObj.playerTurn) {
      this.props.computer_move();
    }
    if (propObj.winner && propObj.winner.result === 'draw') {
      // do very cool modal fadein
      console.log('DRAW');
    } else if (propObj.winner) {
      // do very cool modal fadein with computer winning
      console.log('YOU LOST');
    }
    // nothing else, the player can't win
  }

  render () {
    return (
      <div>
        <h1 className='text-center'>Tic-Tac-Toe</h1>
        <h2 className='text-center'>Open your console to see messages</h2>
        <h3 className='text-center'>You can't win</h3>
        <GameBoard />
      </div>
    );
  }
}

export default connect(mapStateToProps, ticTacToeActions)(TicTacToe);
