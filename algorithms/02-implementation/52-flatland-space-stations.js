function flatlandSpaceStations(n, c) {
  let distances = []
  let distance = 0

  for (let i = 0; i < n; i++) {
    if (c.indexOf(i) === -1) {
      distance++
    } else {
      distances.push(distance)
      distance = 0
    }
  }

  distances.push(distance)

  let first = distances.splice(0, 1)
  let last = distances.splice(-1, 1)

  distances = distances.map(element => Math.ceil(element / 2))

  return Math.max(first, ...distances, last)

}
