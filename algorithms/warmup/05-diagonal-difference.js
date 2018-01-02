function diagonalDifference(a) {
  let n = a.length

  let primaryDiagonal = 0
  let secondaryDiagonal = 0

  for (i = 0; i < n; i++) {
    primaryDiagonal += a[i][i]
    secondaryDiagonal += a[i][n - i - 1]
  }

  return (Math.abs(primaryDiagonal - secondaryDiagonal))
}
