function solve(n, s, d, m) {
  let waysToShare = 0

  for (let i = 0; i < n; i++) {
    let sum = 0

    for (let j = i; j < n && j < i + m; j++) {
      sum += s[j]

      if (sum === d) {
        waysToShare++
        break
      }
    }
  }

  return waysToShare
}
