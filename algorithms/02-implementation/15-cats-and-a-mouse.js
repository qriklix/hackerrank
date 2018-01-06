function catAndMouse(x, y, z) {
  let distanceA = Math.abs(z - x)
  let distanceB = Math.abs(z - y)

  if (distanceA === distanceB) {
    return ['Mouse', 'C']
  } else {
    return distanceA < distanceB ? ['Cat', 'A'] : ['Cat', 'B']
  }
}
