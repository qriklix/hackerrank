function diagonalDifference(a) {
  let n = a.length

  let primaryDiagonal = 0
  let secondaryDiagonal = 0

  for (i = 0; i < n; i++) {
    primaryDiagonal += a[i][i]
    secondaryDiagonal += a[n - i - 1][n - i - 1]
  }

  console.log(primaryDiagonal, secondaryDiagonal)
}
