function solve(n, p) {
  let n2 = Math.floor(n / 2)
  let p2 = Math.floor(p / 2)

  let forward = p2
  let backward = n2 - p2

  return Math.min(forward, backward)
}
