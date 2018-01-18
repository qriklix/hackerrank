function equalizeArray(arr) {
  let arrLength = arr.length
  let frequency = {}

  for (let i = 0; i < arrLength; i++) {
    let n = arr[i]

    if (!frequency.hasOwnProperty(n)) {
      frequency[n] = 1
    } else {
      frequency[n]++
    }
  }

  let maximum = 0

  for (let i in frequency) {
    if (maximum < frequency[i]) {
      maximum = frequency[i]
    }
  }

  return arrLength - maximum
}
