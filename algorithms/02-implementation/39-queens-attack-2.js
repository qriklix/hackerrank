function countCellsBetween(r_1, c_1, r_2, c_2) {
  return Math.max(Math.abs(r_2 - r_1) - 1, Math.abs(c_2 - c_1) - 1)
}

function queensAttack(n, k, r_q, c_q, obstacles) {
  let directions = [-1, 0, 1]

  let closestObstacles = { }

  // starting as walls
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      if (directions[r] === 0 && directions[c] === 0) {
        continue
      }

      let wall = [r_q + directions[r], c_q + directions[c]]

      while (wall[0] > 0 && wall[0] < n + 1 && wall[1] > 0 && wall[1] < n + 1) {
        wall[0] += directions[r]
        wall[1] += directions[c]
      }

      let direction =
        (directions[r] === -1 ? '-' : directions[r] === 0 ? '0' : '+') +
        (directions[c] === -1 ? '-' : directions[c] === 0 ? '0' : '+')

      closestObstacles[direction] = wall
    }
  }

  // real obstacles
  for (let i = 0; i < k; i++) {
    let obst = obstacles[i]

    let verticalHorizontal = r_q === obst[0] || c_q === obst[1]
    let diagonal = Math.abs(r_q - obst[0]) === Math.abs(c_q - obst[1])

    if (verticalHorizontal || diagonal) {
      let direction =
        (obst[0] < r_q ? '-' : obst[0] === r_q ? '0' : '+') +
        (obst[1] < c_q ? '-' : obst[1] === c_q ? '0' : '+')

      let closestObst = closestObstacles[direction]
      let closestObstDistance = countCellsBetween(closestObst[0], closestObst[1], r_q, c_q)
      let obstDistance = countCellsBetween(obst[0], obst[1], r_q, c_q)

      if (obstDistance < closestObstDistance) {
        closestObstacles[direction] = obst
      }
    }
  }

  let sumOfCells = 0

  for (i in closestObstacles) {
    let obst = closestObstacles[i]
    sumOfCells += countCellsBetween(r_q, c_q, obst[0], obst[1])
  }

  return sumOfCells
}
