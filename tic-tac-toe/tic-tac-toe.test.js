/* eslint-disable no-sequences */
const { gameBoard, player, gameManager } = require('./tic-tac-toe');

describe('game board', () => {
  it('setBoardTile function set tile position on game board', () => {
    expect(gameBoard.setBoardTile(0, 'X')).toBe(gameBoard.arrayTiles['X', '', '', '', '', '', '', '', '']);
  });

  it('reset game board', () => {
    expect(gameBoard.resetBoard()).toBe(gameBoard.arrayTiles['', '', '', '', '', '', '', '', '']);
  });
});

describe('game winning patterns', () => {
  it('check first row for win pattern on the game board', () => {
    const rowOne = ['X', 'X', 'X', '', '', '', '', '', ''];
    expect(gameBoard.checkRows(rowOne)).toBe('X');
  });

  it('check second row for win pattern on the game board', () => {
    const rowTwo = ['', '', '', 'O', 'O', 'O', '', '', ''];
    expect(gameBoard.checkRows(rowTwo)).toBe('O');
  });

  it('check third row for win pattern on the game board', () => {
    const rowThree = ['', '', '', '', '', '', 'X', 'X', 'X'];
    expect(gameBoard.checkRows(rowThree)).toBe('X');
  });

  it('check first column for win pattern on the game board', () => {
    const colFirst = ['X', '', '', 'X', '', '', 'X', '', ''];
    expect(gameBoard.checkColumns(colFirst)).toBe('X');
  });

  it('check second column for win pattern on the game board', () => {
    const colSecond = ['', 'O', '', '', 'O', '', '', 'O', ''];
    expect(gameBoard.checkColumns(colSecond)).toBe('O');
  });

  it('check third column for win pattern on the game board', () => {
    const colThree = ['', '', 'X', '', '', 'X', '', '', 'X'];
    expect(gameBoard.checkColumns(colThree)).toBe('X');
  });

  it('check for first diagonal win pattern on the game board', () => {
    const diagonalFirst = ['O', '', '', '', 'O', '', '', '', 'O'];
    expect(gameBoard.checkDiagonals(diagonalFirst)).toBe('O');
  });

  it('check for second diagonal win pattern on the game board', () => {
    const diagonalSecond = ['', '', 'X', '', 'X', '', 'X', '', ''];
    expect(gameBoard.checkDiagonals(diagonalSecond)).toBe('X');
  });

  it('check for draw', () => {
    let checkDraw = false;
    const pattern = ['O', 'X', 'X', 'X', 'O', 'O', 'X', 'O', 'X'];
    if (gameBoard.checkDiagonals(pattern)) {
      checkDraw = gameBoard.checkWinPattern();
    } else if (gameBoard.checkRows(pattern)) {
      checkDraw = gameBoard.checkWinPattern();
    } else if (gameBoard.checkColumns(pattern)) {
      checkDraw = gameBoard.checkWinPattern();
    }
    expect(checkDraw).toBe(false);
  });
});

describe('Players', () => {
  it('playerA', () => {
    const playerX = player('playerA', 'X');
    expect(playerX.name).toBe('playerA');
    expect(playerX.token).toBe('X');
    expect(playerX.score).toBe(0);
  });

  it('playerB', () => {
    const playerO = player('playerB', 'O');
    expect(playerO.name).toBe('playerB');
    expect(playerO.token).toBe('O');
    expect(playerO.score).toBe(0);
  });
});

describe('GameManager', () => {
  const playerA = player('playerA', 'X');
  const playerB = player('playerB', 'O');
  const gm = gameManager(playerA, playerB);

  it('select current player', () => {
    expect(gm.getCurrentPlayer()).toBe(playerA);
  });

  it('round selector', () => {
    expect(gm.roundSelector()).toBe(playerB);
  });

  it('game winner', () => {
    expect(gm.winner('X')).toBe(playerA);
    expect(gm.winner('O')).toBe(playerB);
  });
});
