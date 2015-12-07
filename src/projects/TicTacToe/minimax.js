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

  // who needs lodash?
  const boardToArray = Object.keys(arrayToBoard).reduce((acc, key) => {
    acc[arrayToBoard[key]] = key;
    return acc;
  }, {});

  const mini =  {};

  mini.board = [];
  mini.playerTurn = true;

  mini.init = function (playerTurn) {
    this.board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.playerTurn = playerTurn;
  };

  mini.playerMoved = function (position) {
    mini.board[boardToArray[position]] = 'P';
  };

  /*
   *  Returns false if an endstate hasn't been reached.
   *  Returns an object of
   *  {
   *    winner: true,
   *    sigil: <x or o>,
   *    winningSquares: string of winnings square ('012')
   *    winningDirection: string of winning direction ('final-90')
   *  }
   *  if there is a winner.
   *  Returns an an object of
   *  {
   *    winner: draw
   *  }
   *  in case of a draw
  */
  mini.endState = function () {
    const noOpenSquares = this.board.indexOf(0) === -1;
    const winningPosition = winningPositions.reduce((acc, curr) => {
      const positions = curr.split('').map(elem => this.board[elem]);
      acc.push(positions);
      return acc;
    }, []).filter(elem => {
      return elem.reduce((acc, curr) => {
        if (curr === 0) {
          acc = false;
        }
        return acc;
      }, true);
    });

    if (winningPosition.length) {
      return (
        {
          winner: true,
          sigil: winningPosition[0],
          winningSquares: winningPosition.join(''),
          winningDirection: winningDirections[winningPosition.join('')]
        }
      );
    }

    if (noOpenSquares) {
      return ({winner: 'DRAW'});
    }

    return false;
  };

  return mini;
})();

export default minimax;
