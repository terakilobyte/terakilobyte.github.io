import React from 'react';
import '../TicTacToe.scss';
import { connect }            from 'react-redux';
import ticTacToeActions from 'actions/tictactoe';

const columns = {
  0: 'Left',
  1: 'Middle',
  2: 'Right'
};

const tileMap = {
  'topLeft': 0,
  'topMiddle': 1,
  'topRight': 2,
  'centerLeft': 3,
  'centerMiddle': 4,
  'centerRight': 5,
  'bottomLeft': 6,
  'bottomMiddle': 7,
  'bottomRight': 8
};

const mapStateToProps = (state) => {
  return {
    gameBoard: state.tictactoe.board
  };
};

class GameTile extends React.Component {
  static propTypes = {
    row: React.PropTypes.string.isRequired,
    column: React.PropTypes.number.isRequired,
    player_move: React.PropTypes.func.isRequired,
    gameBoard: React.PropTypes.array.isRequired
  }

  constructor (props) {
    super(props);
    this.state = {
      tile: `${this.props.row}${columns[this.props.column]}`,
      sigil: ''
    };
  }

  // shouldComponentUpdate () {
  //   if (this.props.gameBoard[tileMap[this.state.tile]] === 'O') {
  //     console.log('update called');
  //     return this.handleComputer();
  //   }
  //   if (this.props.gameBoard[tileMap[this.state.tile]] === 'X') {
  //     return this.handleUser();
  //   }
  //   return false;
  // }

  componentWillReceiveProps (propObj) {
    if (propObj.gameBoard[tileMap[this.state.tile]] === 'O') {
      console.log('update called', propObj);
      return this.handleComputer();
    }
    if (this.props.gameBoard[tileMap[this.state.tile]] === 'X') {
      return this.handleUser();
    }
  }

  handleComputer () {
    console.log('handle computer called');
    const input = this.refs.input;
    input.setAttribute('disabled', 'true');
    const tile = this.refs.tile;
    tile.classList.remove('active');
    setTimeout(() => {
      tile.classList.add('nought');
    }, 200);
    return true;
  }

  handleUser () {
    const input = this.refs.input;
    input.setAttribute('disabled', 'true');
    const tile = this.refs.tile;
    tile.classList.remove('active');
    setTimeout(() => {
      tile.classList.add('cross');
    }, 200);
    return true;
  }

  handleClick () {
    const input = this.refs.input;
    input.setAttribute('disabled', 'true');
    const tile = this.refs.tile;
    tile.classList.remove('active');
    setTimeout(() => {
      tile.classList.add('cross');
      setTimeout(() => {
        this.props.player_move({move: this.state.tile});
      }, 200);
    }, 200);
  }

  render () {
    return (
      <div className='game-tile active' ref='tile'>
        <input id={this.state.tile}
          onClick={this.handleClick.bind(this)}
          ref='input'
          type='checkbox' />
        <label htmlFor={this.state.tile} />
      </div>
    );
  }
}

export default connect(mapStateToProps, ticTacToeActions)(GameTile);
