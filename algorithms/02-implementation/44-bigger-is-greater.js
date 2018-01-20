function biggerIsGreater(w) {
  let highestI = -1

  for (let i = 0; i < w.length - 1; i++) {
    if (w[i] < w[i + 1]) {
      highestI = i
    }
  }

  if (highestI === -1) {
    return 'no answer'
  }

  let highestJ = -1

  for (let j = highestI + 1; j < w.length; j++) {
    if (w[j] > w[highestI]) {
      highestJ = j
    }
  }

  let wArr = w.split('')

  let temp = wArr[highestI]
  wArr[highestI] = wArr[highestJ]
  wArr[highestJ] = temp

  let wArrStart = wArr.slice(0, highestI + 1)
  let wArrEnd = wArr.slice(highestI + 1)

  return wArrStart.concat(wArrEnd.reverse()).join('')
}
