function cavityMap(grid) {
  let gridMap = []
  let n = grid.length

  for (let i = 0; i < n; i++) {
    gridMap[i] = ''
    for (let j = 0; j < n; j++) {
      let onBorder = i === 0 || j === 0 || i === n - 1 || j === n - 1

      if (!onBorder && grid[i][j] > Math.max(grid[i - 1][j], grid[i + 1][j], grid[i][j - 1], grid[i][j + 1])) {
        depth = 'X'
      } else {
        depth = grid[i][j]
      }

      gridMap[i] += depth
    }

  }

  return gridMap
}
