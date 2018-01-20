function isKaprekar(n) {
  let square = (n * n).toString()
  let squareLength = square.length

  let leftPiece = square.substr(0, Math.floor(squareLength / 2))
  let rightPiece = square.substr(Math.floor(squareLength / 2))

  let sum = parseInt(leftPiece) + parseInt(rightPiece)

  return sum === n
}

function kaprekarNumbers(p, q) {
  let numbers = []

  for (let i = p; i < q + 1; i++) {
    if (i === 1 || isKaprekar(i)) {
      numbers.push(i)
    }
  }

  if (numbers.length === 0) {
    console.log('INVALID RANGE')
  }

  return numbers
}
