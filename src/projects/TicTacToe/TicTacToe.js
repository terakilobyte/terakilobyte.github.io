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
    computer_move: React.PropTypes.func,
    winner: React.PropTypes.bool,
    reset_game: React.PropTypes.func

  }

  constructor (props) {
    super(props);
    this.state = {
      gameKey: Date.now()
    };
    this.handleReset = this.handleReset.bind(this);
  }

  componentWillReceiveProps (propObj) {
    if (!propObj.winner) {
      if (!propObj.playerTurn) {
        this.props.computer_move();
      }
    }
    // nothing else, the player can't win
  }

  handleReset () {
    this.props.reset_game();
    this.setState({gameKey: Date.now(), message: ''});
  }

  render () {
    let notifier;

    if (this.props.winner.result) {
      const message = this.props.winner.result === 'draw' ? 'IT\'S A ' + this.props.winner.result.toUpperCase()
              : this.props.winner.result.toUpperCase().split(/-/).join(' ');
      notifier = (
        <div className='text-center'>
          <h1 className='text-center'>{message}</h1><span className='reset' onClick={this.handleReset}>Reset</span>
        </div>
      );
    }

    return (
      <div key={this.state.gameKey}>
        <h1 className='text-center'>Tic-Tac-Toe</h1>
        <h3 className='text-center'>You can't win</h3>
        <hr />
        <GameBoard key={this.state.gameKey} />
        <hr />
        {notifier}
      </div>
    );
  }
}

export default connect(mapStateToProps, ticTacToeActions)(TicTacToe);
