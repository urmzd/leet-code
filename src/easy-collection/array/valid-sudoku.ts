function isValidSudoku(board: string[][]): boolean {
  const s = new Set();

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      const val = board[i][j]

      if (val === '.'){
        continue;
      }

      const xVal = `x${j} - ${val}`
      const yVal = `y${i} - ${val}`
      const bVal = `b${Math.floor(i/3)}${Math.floor(j/3)} - ${val}}`

      if (s.has(xVal) || s.has(yVal) || s.has(bVal)) {
        return false;
      }

      s.add(xVal)
      s.add(yVal);
      s.add(bVal)
    }
  }

  return true;
};


