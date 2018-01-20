function encryption(s) {
  let sLength = s.length
  let numberOfRows = Math.floor(Math.sqrt(sLength))
  let numberOfCols = Math.ceil(Math.sqrt(sLength))

  while (numberOfRows * numberOfCols < sLength) {
    numberOfRows++
  }

  let output = ''

  for (let i = 0; i < numberOfCols; i++) {
    for (let j = 0; j < numberOfRows; j++) {
      let letter = s[i + j * numberOfCols]
      output += letter != null ? letter : ''
    }

    output += ' '
  }

  return output
}
