function timerUpdate (grid) {
  let rows = grid.length
  let cols = grid[0].length

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (Number.isInteger(parseInt(grid[i][j]))) {
        grid[i][j] -= 1
      }
    }
  }

  return grid
}

function plant(grid) {
  let rows = grid.length
  let cols = grid[0].length

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === '.') {
        grid[i][j] = 3
      }
    }
  }

  return grid
}

function detonate(grid) {
  let rows = grid.length
  let cols = grid[0].length

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 0) {
        grid[i][j] = '.'

        if (i > 0 && grid[i - 1][j] !== 0) {
          grid[i - 1][j] = '.'
        }

        if (i < rows - 1 && grid[i + 1][j] !== 0) {
          grid[i + 1][j] = '.'
        }

        if (j > 0 && grid[i][j - 1] !== 0) {
          grid[i][j - 1] = '.'
        }

        if (j < cols - 1 && grid[i][j + 1] !== 0) {
          grid[i][j + 1] = '.'
        }

      }
    }
  }

  return grid
}

function output(grid) {
  let rows = grid.length

  let outputArr = []

  for (let i = 0; i < rows; i++) {
    outputArr.push(grid[i].join('').replace(/\d/g, 'O'))
  }

  return outputArr
}

function bomberMan(n, grid) {
  let rows = grid.length
  let cols = grid[0].length

  for (let i = 0; i < rows; i++) {
    grid[i] = grid[i].replace(/O/g, 2).split('')
  }

  if (n === 0 || n === 1) {
    return output(grid)
  }

  for (let seconds = 2; seconds < 4 + n % 4 + 1; seconds++) {
    grid = timerUpdate(grid)

    if (seconds % 2 === 0) {
      grid = plant(grid)
    } else {
      grid = detonate(grid)
    }

  }

  return output(grid)
}
