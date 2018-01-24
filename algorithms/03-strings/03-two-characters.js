function getLength(s, c1, c2) {
  arr = s.split('').filter(char => char === c1 || char === c2)

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      return 0
    }
  }

  return arr.length
}

function twoCharaters(s) {
  let characters = []

  for (let i = 0; i < s.length; i++) {
    if (characters.indexOf(s[i]) === -1) {
      characters.push(s[i])
    }
  }

  let longest = 0

  for (let i = 0; i < characters.length; i++) {
    for (let j = i + 1; j < characters.length; j++) {
      let newLength = getLength(s, characters[i], characters[j])

      if (longest < newLength) {
        longest = newLength
      }
    }
  }

  return longest
}
