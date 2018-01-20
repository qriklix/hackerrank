function organizingContainers(container) {
  let containerLength = container.length
  let boxTotals = new Array(containerLength).fill(0)
  let ballTotals = new Array(containerLength).fill(0)

  for (let i = 0; i < containerLength; i++) {
    for (let j = 0; j < containerLength; j++) {
      boxTotals[i] += container[i][j]
      ballTotals[j] += container[i][j]
    }
  }

  let possible = JSON.stringify(boxTotals.sort()) === JSON.stringify(ballTotals.sort())

  return possible ? 'Possible' : 'Impossible'

}
