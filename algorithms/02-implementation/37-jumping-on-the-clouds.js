function jumpingOnClouds(c) {
  let cLength = c.length
  let numberOfZeroes = 0
  let steps = 0

  for (let i = 0; i < cLength; i++) {
    if (c[i] === 0) {
      numberOfZeroes++
    } else {
      steps += Math.ceil((numberOfZeroes + 1) / 2)
      numberOfZeroes = 0
    }
  }

  steps += Math.ceil((numberOfZeroes + 1) / 2) - 1

  return steps

}
