function migratoryBirds(n, ar) {
  let birds = [0,0,0,0,0]

  for (let i = 0; i < n; i++) {
    birds[ar[i] - 1]++
  }

  let max = birds.reduce((a, b) => { return Math.max(a, b) })

  for (let i = 0; i < 5; i++) {
    if (max === birds[i]) {
      return i + 1
    }
  }
}
