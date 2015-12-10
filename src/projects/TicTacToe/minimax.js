const minimax = (function () {
  const winningPositions = [
    '012', '036', '048', '147', '258', '345', '678', '246'
  ];

  const winningDirections = {
    '012': 'final-180',
    '345': 'final-180',
    '678': 'final-180',
    '036': 'final-90',
    '147': 'final-90',
    '258': 'final-90',
    '048': 'final-45',
    '246': 'final-135'
  };

  const arrayToBoard = {
    0: 'topLeft',
    1: 'topMiddle',
    2: 'topRight',
    3: 'centerLeft',
    4: 'centerMiddle',
    5: 'centerRight',
    6: 'bottomLeft',
    7: 'bottomMiddle',
    8: 'bottomRight'
  };

  const boardToArray = Object.keys(arrayToBoard).reduce((acc, key) => {
    acc[arrayToBoard[key]] = key;
    return acc;
  }, {});

  const mini =  {};

  mini.init = function () {
    mini.board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    mini.status = 'running';
    mini.currentState.depth = 0;
    mini.currentState.turn = 'X';
  };

  mini.advance = function (newState) {
    mini.currentState = Object.assign({}, mini.currentState, newState);
    if (mini.terminalState(newState.board)) {
      mini.status = 'ended';
      // todo notify of winner
    } else {
      if (mini.currentState.turn === 'O') {
        mini.givePlayerTheBusiness();
      }
    }
  };

  mini.advance = function () {
    mini.playerTurn = mini.playerTurn === 'X' ? 'O' : 'X';
  };


  mini.terminalState = function (board) {
    const noOpenSquares = board.indexOf(0) === -1;
    const winningPosition = winningPositions.reduce((acc, curr) => {
      const positions = curr.split('').map(elem => board[elem]);
      acc.push(positions);
      return acc;
    }, []).filter(elem => {
      return elem.reduce((acc, curr) => {
        if (curr === 0) {
          /*eslint-disable*/
          // in this case it's perfectly fine to write the acc(umulator)
          acc = false;
          /*eslint-enable*/
        }
        return acc;
      }, true);
    });

    if (winningPosition.length) {
      mini.result = winningPosition[0] + '-won';
      return true;
    }

    if (noOpenSquares) {
      mini.result = 'draw';
      return true;
    }

    return false;
  };

  mini.score = function (_state) {
    if (_state.result !== 'running') {
      if (_state.result === 'X-won') {
        return 10 - _state.depth;
      } else if (_state.result === 'O-won') {
        return -10 + _state.depth;
      }
    }
    return 0;
  };

  mini.empties = function (board) {
    return board.map((elem, index) => {
      return {marking: elem, index};
    })
      .filter(elem => elem.marking === 0)
      .map(elem => elem.index);
  };

  mini.AIMaximize = function (first, second) {
    if (first.score < second.score) {
      return -1;
    } else if (first.score > second.score) {
      return 1;
    } else {
      return 0;
    }
  };

  return mini;
})();

export default minimax;
