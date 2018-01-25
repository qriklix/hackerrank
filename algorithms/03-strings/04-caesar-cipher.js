function caesarCipher(s, k) {
  let letters = 'abcdefghijklmnopqrstuvwxyz'
  let minuscules = letters.split('')
  let capitals = letters.toUpperCase().split('')

  let output = s.split('')

  for (i in output) {
    let letter = output[i]

    if (minuscules.indexOf(letter) !== -1) {
      let index = (minuscules.indexOf(letter) + k) % minuscules.length
      output[i] = minuscules[index]
    }

    if (capitals.indexOf(letter) !== -1) {
      let index = (capitals.indexOf(letter) + k) % capitals.length
      output[i] = capitals[index]
    }

  }


  return output.join('')
}
