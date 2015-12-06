import React from 'react';
import '../TicTacToe.scss';

const columns = {
  0: 'Left',
  1: 'Middle',
  2: 'Right'
};

export default class GameTile extends React.Component {
  static propTypes = {
    row: React.PropTypes.string.isRequired,
    column: React.PropTypes.number.isRequired
  }

  handleClick () {
    const input = this.refs.input;
    input.setAttribute('disabled', 'true');
    const tile = this.refs.tile;
    tile.classList.remove('active');
    setTimeout(() => {
      tile.classList.add('cross');
    }, 200);
  }

  render () {
    return (
      <div className='game-tile active' ref='tile'>
        <input id={`${this.props.row}${columns[this.props.column]}`}
          onClick={this.handleClick.bind(this)}
          ref='input'
          type='checkbox' />
        <label htmlFor={`${this.props.row}${columns[this.props.column]}`}/>
      </div>
    );
  }
}
