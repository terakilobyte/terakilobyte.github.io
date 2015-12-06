import React from 'react';
import './TicTacToe.scss';

export default class TicTacToe extends React.Component {
  static propTypes = {

  }

  render () {
    return (
      <div>
        <h1 className='text-center'>Tic-Tac-Toe</h1>
        <div className='game-board'>
          <div className='game-row'>
            <div className='game-tile   '>
              <input id='topLeft' type='checkbox' />
              <label htmlFor='topLeft' />
            </div>
            <div className='game-tile  '>
              <input id='topMiddle' type='checkbox' />
              <label htmlFor='topMiddle' />
            </div>
            <div className='game-tile   '>
              <input id='topRight' type='checkbox' />
              <label htmlFor='topRight' />
            </div>
          </div>
          <div className='game-row'>
            <div className='game-tile  '>
              <input id='centerLeft' type='checkbox' />
              <label htmlFor='centerLeft' />
            </div>
            <div className='game-tile cross    '>
              <input id='centerMiddle' type='checkbox' />
              <label htmlFor='centerMiddle' />
            </div>
            <div className='game-tile  '>
              <input id='centerRight' type='checkbox' />
              <label htmlFor='centerRight' />
            </div>
          </div>
          <div className='game-row'>
            <div className='game-tile   '>
              <input id='bottomLeft' type='checkbox' />
              <label htmlFor='bottomLeft' />
            </div>
            <div className='game-tile  '>
              <input id='bottomMiddle' type='checkbox' />
              <label htmlFor='bottomMiddle' />
            </div>
            <div className='game-tile nought   '>
              <input id='bottomRight' type='checkbox' />
              <label htmlFor='bottomRight' />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
