function minimumDistances(a) {
  let minimumDistance = -1

  let aLength = a.length

  for (let i = 0; i < aLength - 1; i++) {
    for (let j = i + 1; j < aLength; j++) {
      if (a[i] === a[j] && (minimumDistance === -1 || minimumDistance > j - i)) {
        minimumDistance = j - i
        break
      }
    }
  }

  return minimumDistance
}
