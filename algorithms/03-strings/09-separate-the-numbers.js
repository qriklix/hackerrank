bigNumber = require('bignumber.js')

function separateNumbers(s) {
  outerloop:
  for (let firstLength = 1; firstLength < s.length; firstLength++) {
    let first = new bigNumber(s.substr(0, firstLength))

    let current = first.plus(1)
    let currentIndex = firstLength
    let currentLength = current.toString().length

    while (currentIndex + currentLength <= s.length) {
      if (s.substr(currentIndex, currentLength) !== current.toString()) {
        continue outerloop
      }

      current = current.plus(1)
      currentIndex += currentLength
      currentLength = current.toString().length
    }

    if (currentIndex === s.length) {
      console.log('YES', first.toString())
      return
    }
  }

  console.log('NO')
}
