function getTotalX(a, b) {
  let lengthA = a.length
  let lengthB = b.length

  let count = 0

  for (let i = a[lengthA - 1]; i < b[lengthB - 1] + 1; i++) {
    let factor = true

    for (let j = 0; factor && j < lengthA; j++) {
      if (i % a[j] !== 0) {
        factor = false
      }
    }

    for (let j = 0; factor && j < lengthB; j++) {
      if (b[j] % i !== 0) {
        factor = false
      }
    }

    if (factor) {
      count++
    }
  }

  return count
}
