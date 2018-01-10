String.prototype.bigAdd = function(n) {
  let a = this.split('').reverse().map(Number)
  let b = n.split('').reverse().map(Number)
  let c = []

  let smaller = a.length < b.length ? a : b
  let size = Math.max(a.length, b.length)

  while (smaller.length < size) {
    smaller.push(0)
  }

  let remainder = 0

  for (let i = 0; i < size; i++) {
    let resultant = a[i] + b[i] + remainder
    let newDigit = resultant % 10

    c.push(newDigit)

    remainder = Math.floor(resultant / 10)
  }

  if (remainder !== 0) {
    c.push(remainder)
  }

  return c.reverse().join('')
}

String.prototype.bigMultiply = function(n) {
  let a = this.split('').reverse().map(Number)
  let b = n.split('').reverse().map(Number)
  let c = []

  let aLength = a.length
  let bLength = b.length

  let bigSum = '0'

  for (let i = 0; i < aLength; i++) {
    let addend = []
    let remainder = 0

    for (let j = 0; j < bLength; j++) {
      let multiplicand = a[i] * b[j] + remainder
      let newDigit = multiplicand % 10

      addend.push(newDigit)

      remainder = Math.floor(multiplicand / 10)
    }

    if (remainder !== 0) {
      addend.push(remainder)
      remainder = 0
    }

    addend = addend.reverse()

    for (let k = 0; k < i; k++) {
      addend.push(0)
    }

    bigSum = bigSum.bigAdd(addend.join(''))
  }

  return bigSum
}

function extraLongFactorials(n) {
  let factorial = '1'

  for (let i = 1; i < n + 1; i++) {
    factorial = factorial.bigMultiply(i.toString())
  }

  console.log(factorial)

}
