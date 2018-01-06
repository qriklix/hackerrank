function countingValleys(n, s) {
  let steps = s.split('')

  let height = 0
  let valleys = 0

  for (let i = 0; i < n; i++) {
    if (steps[i] === 'D') {
      if (height === 0) {
        valleys++
      }
      height--
    } else {
      height++
    }
  }

  return height >= 0 ? valleys : Math.max(0, valleys - 1)
}
