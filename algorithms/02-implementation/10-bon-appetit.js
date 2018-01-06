function bonAppetit(n, k, b, ar) {
  let bill = 0

  for (let i = 0; i < n; i++) {
    if (i !== k) {
      bill += ar[i]
    }
  }

  return bill / 2 === b ? 'Bon Appetit' : b - bill / 2

}
