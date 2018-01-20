bigNumber = require('bignumber.js')

function taumBday(b, w, x, y, z) {
  let blackNum = b.toString()
  let whiteNum = w.toString()
  let blackCost = Math.min(x, y + z).toString()
  let whiteCost = Math.min(y, x + z).toString()

  let blackSum = new bigNumber(blackNum).times(blackCost)
  let whiteSum = new bigNumber(whiteNum).times(whiteCost)

  return new bigNumber(blackSum).plus(whiteSum)
}
