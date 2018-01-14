function repeatedString(s, n) {
  let sLength = s.length

  let repeats = Math.floor(n / sLength)
  let countInRepeat = s.split('a').length - 1
  let countInRepeats = repeats * countInRepeat

  let remainingString = s.substr(0, n % sLength)
  let countInRemaining = remainingString.split('a').length - 1

  return countInRepeats + countInRemaining
}
