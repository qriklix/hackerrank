function chocolateFeast(n, c, m) {
  let chocolates = Math.floor(n / c)
  let wrappers = chocolates

  while (wrappers >= m) {
    newChocolates = Math.floor(wrappers / m)
    wrappers -= newChocolates * (m - 1)
    chocolates += newChocolates
  }

  return chocolates
}
