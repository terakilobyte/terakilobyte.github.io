import React from 'react';
import './TicTacToe.scss';
import { connect }            from 'react-redux';
import ticTacToeActions from 'actions/tictactoe';

import GameBoard from './components/GameBoard';

const mapStateToProps = (state) => {
  return {
    playerTurn: state.tictactoe.playerTurn
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
    } else if (propObj.winner) {
      // do very cool modal fadein with computer winning
    }
    // nothing else, the player can't win
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

export default connect(mapStateToProps, ticTacToeActions)(TicTacToe);
