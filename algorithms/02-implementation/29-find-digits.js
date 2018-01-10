function findDigits(n) {
  let numbers = n.toString().split('').map(Number)
  let numbersLength = numbers.length
  let count = 0

  for (let i = 0; i < numbersLength; i++) {
    if (numbers[i] !== 0 && n % numbers[i] === 0) {
      count++
    }

  }

  return count
}
