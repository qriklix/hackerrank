function viralAdvertising(n) {
  let currentVectors = 2
  let allVectors = currentVectors

  for (let i = 0; i < n - 1; i++) {
    let newVectors = Math.floor(currentVectors * 3 / 2)

    currentVectors = newVectors
    allVectors += newVectors
  }

  return allVectors
}
