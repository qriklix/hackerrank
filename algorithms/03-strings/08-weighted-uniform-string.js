function getWeights(s) {
  let characters = s.match(/([a-z])\1*/g)

  let weights = new Set()

  for (let i = 0; i < characters.length; i++) {
    let weight = characters[i][0].charCodeAt(0) - 96

    let characterLength = characters[i].length

    for (let j = 1; j < characterLength + 1; j++) {
      weights.add(weight * j)
    }
  }

  return weights
}

function main() {
  let s = readLine()

  let weights = getWeights(s)

  let n = parseInt(readLine())
  for (let a0 = 0; a0 < n; a0++) {
    let x = parseInt(readLine())
    console.log(weights.has(x) ? 'Yes' : 'No')
  }

}
