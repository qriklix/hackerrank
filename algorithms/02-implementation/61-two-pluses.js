class Plus {
  constructor(grid, x, y) {
    this.grid = grid
    this.size = 0
    this.x = x
    this.y = y
    this.canGrow = true
  }

  tryToExtend(occupied) {
    if (this.canGrow = false) {
      return false
    }

    let size = this.size + 1

    let newCells = [
      [this.x - size, this.y],
      [this.x + size, this.y],
      [this.x, this.y - size],
      [this.x, this.y + size],
    ]

    let canGrow = true

    for (let i in newCells) {
      if (!this.valid(newCells[i], occupied)) {
        canGrow = false
      }
    }

    if (canGrow) {
      this.size++
      return newCells.map(element => element[0] + ',' + element[1])
    } else {
      this.canGrow = canGrow
      return false
    }

  }

  valid(cell, occupied) {
    let grid = this.grid
    let rows = grid.length
    let cols = grid[0].length

    let x = cell[0]
    let y = cell[1]

    if (x < 0 || x > rows - 1 || y < 0 || y > cols - 1) {
      return false
    }

    if (grid[x][y] !== 'G' || occupied.includes(x + ',' + y)) {
      return false
    }

    return true
  }

  get length() {
    return (this.size) * 4 + 1
  }
}

function getProduct(grid, x, y, z, w) {
  let rows = grid.length
  let cols = grid[0].length

  let plusFirst = new Plus(grid, x, y)
  let plusSecond = new Plus(grid, z, w)

  let occupied = [x + ',' + y, z + ',' + w]

  while (true) {
    let firstExtend = plusFirst.tryToExtend(occupied)

    if (firstExtend !== false) {
      occupied = occupied.concat(firstExtend)
    }

    let secondExtend = plusSecond.tryToExtend(occupied)

    if (secondExtend !== false) {
      occupied = occupied.concat(secondExtend)
    }

    if (!firstExtend && !secondExtend) {
      break
    }
  }

  return plusFirst.length * plusSecond.length
}

function twoPluses(grid) {
  grid = grid.map(el => el.split(''))

  let rows = grid.length
  let cols = grid[0].length

  let biggestProduct = 0

  for (let i = 0; i < rows * cols - 1; i++) {
    let x = Math.floor(i / cols)
    let y = i % cols

    for (let j = i + 1; j < rows * cols; j++) {
      let z = Math.floor(j / cols)
      let w = j % cols

      product = getProduct(grid, x, y, z, w)

      if (biggestProduct < product) {
        biggestProduct = product
      }
    }
  }

  return biggestProduct

}
