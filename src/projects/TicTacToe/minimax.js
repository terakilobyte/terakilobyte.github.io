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
      return {endState: true, result: winningPosition[0] + '-won', winningPosition};
    }

    if (noOpenSquares) {
      return {endState: true, result: 'draw'};
    }

    return false;
  };
  return mini;
})();

export default minimax;
