function main() {
  var n = parseInt(readLine())
  let binaryN = parseInt(n, 10).toString(2).split('')

  let maximumConsOnes = 0
  let currentConsOnes = 0

  for (let i = 0; i < binaryN.length; i++) {
    if (binaryN[i] === '1') {
      currentConsOnes++
    } else {
      currentConsOnes = 0
    }

    if (maximumConsOnes < currentConsOnes) {
      maximumConsOnes = currentConsOnes
    }
  }

  console.log(maximumConsOnes)
}
