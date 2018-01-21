function stones(n, a, b) {
  let possibilities = new Set()

  for (let i = 0; i < n; i++) {
    possibilities.add(i * a + (n - 1 - i) * b)
  }

  return [...possibilities].sort((a, b) => { return a - b })
}
