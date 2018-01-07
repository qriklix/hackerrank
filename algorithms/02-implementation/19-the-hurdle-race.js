function hurdleRace(k, height) {
  let max = 0
  let heightLength = height.length

  for (let i = 0; i < heightLength; i++) {
    if (max < height[i]) {
      max = height[i]
    }
  }

  return Math.max(max - k, 0)
}
