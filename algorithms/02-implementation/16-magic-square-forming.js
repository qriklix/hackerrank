function formingMagicSquare(s) {
  let magic_squares = [
    [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
    [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
    [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
    [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
    [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
    [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
    [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
    [[2, 7, 6], [9, 5, 1], [4, 3, 8]],
  ]

  let min_cost = null

  for (let i = 0; i < 8; i++) {
    let cost = 0

    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        cost += Math.abs(s[j][k] - magic_squares[i][j][k])
      }
    }

    if (min_cost === null || cost < min_cost) {
      min_cost = cost
    }
  }

  return min_cost
}
