function hackerrankInString(s) {
  let neededLetters = 'hackerrank'.split('')

  for (let i = 0; i < s.length; i++) {
    if (neededLetters[0] === s[i]) {
      neededLetters.shift();
    }
  }

  return neededLetters.length === 0 ? 'YES' : 'NO'
}
