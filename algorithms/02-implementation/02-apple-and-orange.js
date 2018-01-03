function appleAndOrange(s, t, a, b, apple, orange) {
  m = apple.length
  n = orange.length

  let numberOfApples = 0
  let numberOfOranges = 0

  for (let i = 0; i < m; i++) {
    if (a + apple[i] >= s && a + apple[i] <= t) {
      numberOfApples++
    }
  }

  for (let i = 0; i < n; i++) {
    if (b + orange[i] >= s && b + orange[i] <= t) {
      numberOfOranges++
    }
  }

  return [numberOfApples, numberOfOranges]
}
