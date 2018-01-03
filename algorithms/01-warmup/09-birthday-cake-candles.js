function birthdayCakeCandles(n, ar) {
  let max = 0
  let count = 0

  for (let i = 0; i < n; i++) {
    if (ar[i] > max) {
      max = ar[i]
      count = 1
    } else if (ar[i] === max) {
      count++
    }
  }

  return count
}
