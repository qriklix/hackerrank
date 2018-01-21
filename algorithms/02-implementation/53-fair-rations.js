function fairRations(B) {
  let distributed = 0

  let sum = B.reduce((sum, val) => sum + val)

  if (sum % 2 === 1) {
    return 'NO'
  }

  for (let i = 0; i < B.length - 1; i++) {
    if (B[i] % 2 === 1) {
      B[i]++
      B[i + 1]++
      distributed += 2
    }
  }

  return distributed
}
