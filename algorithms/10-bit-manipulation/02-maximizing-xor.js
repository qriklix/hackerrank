function maximizingXor(l, r) {
  let max = 0

  for (let i = l; i <= r; i++) {
    for (let j = l; j <= r; j++) {
      let xor = i ^ j

      if (max < xor) {
        max = xor
      }
    }
  }

  return max
}
