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
