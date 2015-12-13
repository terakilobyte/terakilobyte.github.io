import React from 'react';
import './TicTacToe.scss';
import { connect }            from 'react-redux';
import ticTacToeActions from 'actions/tictactoe';

import GameBoard from './components/GameBoard';

const mapStateToProps = (state) => {
  return {
    playerTurn: state.tictactoe.playerTurn,
    winner: state.tictactoe.winner,
    gameKey: state.tictactoe.gameKey
  };
};


class TicTacToe extends React.Component {
  static propTypes = {
    playerTurn: React.PropTypes.bool,
    computer_move: React.PropTypes.func,
    winner: React.PropTypes.bool,
    reset_game: React.PropTypes.func,
    gameKey: React.PropTypes.number.isRequired

  }

  constructor (props) {
    super(props);
    this.state = {
      message: '',
      winner: false
    };
  }

  componentWillReceiveProps (propObj) {
    if (!propObj.playerTurn) {
      this.props.computer_move();
    }
    if (propObj.winner && propObj.winner.result === 'draw') {
      this.setState({message: 'DRAW'});
    } else if (propObj.winner) {
      this.setState({message: 'YOU LOSE'});
    }
    // nothing else, the player can't win
  }

  render () {
    let notifier;

    if (this.props.winner) {
      notifier = (
        <div className='text-center'>
          <h1 className='text-center'>{this.state.message}</h1><span className='reset' onClick={this.props.reset_game}>Reset</span>
        </div>
      );
    }

    return (
      <div key={this.props.gameKey}>
        <h1 className='text-center'>Tic-Tac-Toe</h1>
        <h3 className='text-center'>You can't win</h3>
        <hr />
        <GameBoard key={this.props.gameKey} />
        {notifier}
      </div>
    );
  }
}

export default connect(mapStateToProps, ticTacToeActions)(TicTacToe);
