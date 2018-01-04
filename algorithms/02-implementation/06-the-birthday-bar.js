function solve(n, s, d, m) {
  let waysToShare = 0

  let count = 0
  let sum = 0

  for (let i = 0; i < n; i++) {
    count++
    sum += s[i]

    if (count === m) {
      if (sum === d) {
        waysToShare++
      }

      i = i - count + 1
      count = 0
      sum = 0
    }
  }

  return waysToShare
}
